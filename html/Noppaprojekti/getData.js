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

    //is there "by" element (sometimes roll20 doesn't add it), but there can only be one inside an element, so [0]
    elementExists = !!rolls[i].getElementsByClassName("by")[0];

    //if by element exists, so does timestamp, if they don't exits, they are made by the same player as previous message
    if(elementExists) {
        by = rolls[i].getElementsByClassName("by")[0].textContent;
        tstamp = rolls[i].getElementsByClassName("tstamp")[0].textContent;
    }

    //rollresult class exists even if there wasn't a roll, check to see if there is actual rolling involved
    var rollExists = !!rolls[i].getElementsByClassName("didroll")[0];

    //we only want to save rolls if we know it is an actual roll
    if(rollExists) {

        var dieRolls = rolls[i].getElementsByClassName("didroll");
        
        //there can be multiple dicerolls
        for (j = 0; j < dieRolls.length; j++) {
            
            //what result was the roll 
            result = rolls[i].getElementsByClassName("didroll")[j].textContent;
            
            //get what die was used, it's the classname after diceroll
            var dieName = rolls[i].getElementsByClassName("diceroll")[j].className.split(" ");
            //we don't want the d
            die = dieName[1].split("d")[1];

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
}//for rolls.length


//next let's check all the sheet rolls
var sheetRolls = document.getElementsByClassName("inlinerollresult");
//iterate through
for (i = 0; i < sheetRolls.length; i++){

    //if sheetRolls has title
    if (!!sheetRolls[i].title) {
        var title = sheetRolls[i].title;

        //if the title incluses [SAVE], the message is a spell DC and not a roll, we don't need that
        if (!title.includes("[SAVE]")) {

            //if there is a roll, we need to find who made it and when, find the parent message
            var parent = sheetRolls[i].closest(".message");
            
            //is there by element (sometimes roll20 doesn't add it), but there can only be one inside an element, so [0]
            elementExists = !!parent.getElementsByClassName("by")[0];

            //if by element exists, so does timestamp, if they don't exits, they are made by the same player as previous
            if(elementExists) {
                by = parent.getElementsByClassName("by")[0].textContent;
                tstamp = parent.getElementsByClassName("tstamp")[0].textContent;
            } //if

            //what die was rolled (ex. Rolling 1d20...)
            var dieUsed = title.match(/(?<=Rolling )(.*?)(\+|c|k| )/)[1];
            var die = dieUsed.split("d")[1];

            //also store how many times die was rolled, it can be an integer or ex. (1*5), stored before d, ex 2d20 or (1*2)d20
            var dieAmount = dieUsed.split("d")[0];
            dieArray = dieAmount.split("*");
            if (dieArray.length > 1) {
                dieAmount = dieAmount.match(/(?<=\*)[0-9]/)[0];
            }

            //we need to store all the rolls
            for (j = 0; j < dieAmount; j++) {
                //the rollresults are between spans ex. <span class="basicdiceroll">11</span>
                var resultRolls = title.match(/(?<=">)(.*?)(?=<\/span)/g);
                for (k = 0; k < resultRolls.length; k++) {
                    var resultRoll = resultRolls[k];

                    //save results
                    results = {
                        "by":by, 
                        "tstamp":tstamp, 
                        "die":die, 
                        "result":resultRoll
                    };

                    //push in array
                    rollResults.push(results);

                } // for ResultRolls length
            } //for dieAmount
        } //if !has [SAVE]
    }//if sheetrolls has a title   
}//for


//all results
//getOverallResults(rollResults);

//by player
//getPlayerResults(rollResults, "Gilbin");
//getPlayerResults(rollResults, "Mirarin");
//getPlayerResults(rollResults, "Pihlaja");
//getPlayerResults(rollResults, "Vellamo");
//getPlayerResults(rollResults, "Kiljurn");
//getPlayerResults(rollResults, "Aranthir");
//getPlayerResults(rollResults, "DM");

//by damageDie
//getDamageDieResults(rollResults, "d8", "Kiljurn");

//getMostUsedDamageDie(rollResults);

