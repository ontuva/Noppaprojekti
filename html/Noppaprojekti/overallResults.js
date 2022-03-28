function getOverallResults(rollResults, die) {

    var dieAmount = 0; //how many times die was rolled
    var result = 0; //what the dieresult was

    //lets save the results in an array, initial dieAmount count is 0, the array length is the same as die used
    var results = new Array(die).fill(0);

    rollResults.forEach(function(item, index, array) {

        if (item.die == die) {
            dieAmount++; //how many times was the die rolled
            result = +result + +item.result; //for calculating average
            results[item.result-1] += 1; ////add one to the results, array index starts from 0, so -1
        } //if item.die

    }) //foreach

    //find out which die was rolled most and least
    var max = 0; //init max to 0

    //loop through the rolls
    for (let i = 0; i < results.length; i++) {
        if (max < results[i] ) max = results[i]; //if current max is smaller than the next one, save new one
    }

    var min = max; //init minimum to current max
    //loop through the rolls to find minimum roll
    for (let j = 0; j < results.length; j++) {
        if (min > results[j] ) min = results[j]; //if current min is larger than the next one, save new one
    }

    maxDies = ""; //what dies were rolled max times
    minDies = ""; //what dies were rolled min times

    //we need all the dies that we're rolled max or min times
    for (let k = 0; k < results.length; k++) {
        if (results[k] == max) maxDies += k+1 + " ";
        if (results[k] == min) minDies += k+1 + " ";
    }

    //calculating average roll
    var average = result / dieAmount;

    console.log("Together d" + die + " was rolled " + dieAmount + " times.");
    console.log("AVERAGE:" + average + " on d" + die + " die");
    console.log("MOST: " + maxDies + " was rolled " + max + " times");
    console.log("LEAST: " + minDies + " was rolled " + min + " times");
    console.log("d" + die + " " + results[0] + " were nat1");
    if (die == 20) {
        console.log("d" + die + " " + results[19] + " were nat20");
    }  
}
