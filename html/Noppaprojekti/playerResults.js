function getPlayerResults(rollResults, playerName) {

    var d20 = 0;
    var result = 0;
    //lets save the results in object
    var results = {
        "1":0, 
        "2":0, 
        "3":0, 
        "4":0,
        "5":0,
        "6":0,
        "7":0,
        "8":0,
        "9":0,
        "10":0,
        "11":0,
        "12":0,
        "13":0,
        "14":0,
        "15":0,
        "16":0,
        "17":0,
        "18":0,
        "19":0,
        "20":0
    };

    rollResults.forEach(function(item, index, array) {

        if(item.by.includes(playerName)) {
            
            if (item.die == "d20") {
                d20++;
                result = +result + +item.result; //for calculating average
                results[item.result] += 1;
            }
            
        } //if

    }) //foreach

    //find out which die was rolled most
    var max = 0; //initialize
    var die = 0; //initialize
    var keys = Object.keys(results); //get all the keys

    for (i = 0; i < keys.length; i++) {
        if(results[keys[i]] > max) {
            max = results[keys[i]]; // how many times was rolled
            die = keys[i]; // what die it was
        }       
    }

    //calculate average roll
    var average = result/d20;

    console.log(playerName + " rolled d20 " + d20 + " times.");
    console.log(results[1] + " were nat1");
    console.log(results[20] + " were nat20");
    console.log("Most rolled die was: " + die + " and it was rolled " + max + " times");
    console.log("On average player rolled: " + average + " on d20");
    console.log(results);
}