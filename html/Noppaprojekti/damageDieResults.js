function getDamageDieResults(rollResults, die, playerName) {

    //how many times was the die rolled
    var rollAmount = 0;
    var result = 0;

    rollResults.forEach(function(item, index, array) {

        if(item.by.includes(playerName)) {
            
            if (item.die == die) {
                result = +result + +item.result;
                rollAmount++;
            }
            
        } //if
        
    }) //foreach

    console.log(result);
    var average = result/rollAmount;

    console.log(die + " was rolled " + rollAmount);
    console.log("on average the damage was: " + average);
}