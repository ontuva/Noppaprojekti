/**
 * Function to see what damage die was used the most during our campaign
 * 
 * 
 * @param {*} rollResults all the rolls
 */

function getMostUsedDamageDie(rollResults) {

    //the usual damage dies are 4, 6, 8, 10 and 12
    var results = {
        "d4":0, 
        "d6":0, 
        "d8":0, 
        "d10":0,
        "d12":0,
    };

    var rolls = {
        "d4":0,
        "d6":0,
        "d8":0,
        "d10":0,
        "d12":0,
    }

    rollResults.forEach(function(item, index, array) {

        //we only want damage dies
        if (item.die == "d4" || item.die == "d6" || item.die == "d8" || item.die == "d10" ||item.die == "d12") {
            rolls[item.die] = +rolls[item.die] + +item.result; //for calculating average
            results[item.die] += 1; //how many times was rolled
        }
    }) //foreach

    //TODO Why doesn't D6 work?

    console.log(results);
    console.log(rolls);

}