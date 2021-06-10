//create new array and object where to save rolls
var rollResults = [];
var results = {};

//what we want to save
var by = ""; //who made the roll
var tstamp = ""; //timestamp of the roll
var die = ""; //which die was used
var result =""; //roll result
var elementExists = false;

//get all the elements with roll results
var rolls = document.getElementsByClassName("rollresult");

//iterate through
for (i = 0; i < rolls.length; i++){

    //is there by element (sometimes roll20 doesn't add it), but there can only be one inside an element, so [0]
    elementExists = !!rolls[i].getElementsByClassName("by")[0];

    //if by element exists, so does timestamp, if they don't exits, they are made by the same player as previous
    if(elementExists) {
        by = rolls[i].getElementsByClassName("by")[0].textContent;
        tstamp = rolls[i].getElementsByClassName("tstamp")[0].textContent;
    }

    //rollresult class exists even if there wasn't a roll, check to see if there is actual rolling involved
    var elementExists = !!rolls[i].getElementsByClassName("didroll")[0];

    //we only want to save rolls if we know it is an actual roll
    if(elementExists) {

        var dieRolls = rolls[i].getElementsByClassName("didroll");
        
        //there can be multiple dicerolls
        for (j = 0; j < dieRolls.length; j++) {
            
            //what result was the roll 
            result = rolls[i].getElementsByClassName("didroll")[j].textContent;
            
            //get what die was used, it's the classname after diceroll
            var dieName = rolls[i].getElementsByClassName("diceroll")[j].className.split(" ");
            die = dieName[1];

            //make a nice fancy object
            results = {
                "by":by, 
                "tstamp":tstamp, 
                "die":die, 
                "result":result
            };

        //push in array
        rollResults.push(results);

        }

    }//if
}//for



//next let's check all the sheet rolls
var sheetRolls = document.getElementsByClassName("inlinerollresult");
//iterate through
for (i = 0; i < sheetRolls.length; i++){

    //if sheetRolls has title (it can be called title or original title, need to check both)
    if (!!sheetRolls[i].title) {
        var splitInfo = sheetRolls[i].title.split(/">"/);
        
        //if it has an result, it has a roll
        if(!!(sheetRolls[i].title.match(/">(.*?)<\/span/))) {
            
            //TODO: some have more than one roll
            var resultRoll = sheetRolls[i].title.match(/">(.*?)<\/span/)[1];

            //TODO make regexp prettier
            var dieUsed = sheetRolls[i].title.match(/(?<=Rolling )(.*?)(\+|c| )/)[1];
            var dDie = dieUsed.split("d");
            die = "d"+dDie[1];

            //if there is a roll, we need to find who made it and when, find the parent message
            var parent = sheetRolls[i].closest(".message");
    
            //is there by element (sometimes roll20 doesn't add it), but there can only be one inside an element, so [0]
            elementExists = !!parent.getElementsByClassName("by")[0];

            //if by element exists, so does timestamp, if they don't exits, they are made by the same player as previous
            if(elementExists) {
                by = parent.getElementsByClassName("by")[0].textContent;
                tstamp = parent.getElementsByClassName("tstamp")[0].textContent;
            } //if

            //save results
            results = {
                "by":by, 
                "tstamp":tstamp, 
                "die":die, 
                "result":resultRoll
            };

            //push in array
            rollResults.push(results);
        } //if sheetrolls title match
    }//if sheetrolls has a title

    //TODO: Original-title inlinerollresults  
    
}//for

//all results
getOverallResults(rollResults);

//by player
getPlayerResults(rollResults, "Gilbin");
getPlayerResults(rollResults, "Mirarin");
getPlayerResults(rollResults, "Pihlaja");
getPlayerResults(rollResults, "Vellamo");
getPlayerResults(rollResults, "Kiljurn");
getPlayerResults(rollResults, "Aranthir");
getPlayerResults(rollResults, "Persikka");
getPlayerResults(rollResults, "DM");

//by damageDie
getDamageDieResults(rollResults, "d8", "Kiljurn");

getMostUsedDamageDie(rollResults);

