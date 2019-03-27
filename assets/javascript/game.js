var random_result;
var lost = 0;
var win = 0;
var previous = 0;

// Setters
// Getters

//$(".crystal").attr('class');

var resetAndStart = function () {

    $(".crystals").empty();

    var images =   
        ['https://i.pinimg.com/originals/7a/1e/8c/7a1e8cbae81363b96096b4c5d0971705.png', 
        'https://www.pngarts.com/files/1/Quartz-Crystal-Transparent-Background-PNG.png', 
        'https://i.pinimg.com/originals/0e/e4/d1/0ee4d155315e22bb8148f9092c422c43.png', 
        'https://www.pngarts.com/files/1/Quartz-Crystal-PNG-Photo.png'];

    random_result = Math.floor(Math.random() * 69) + 30;

    $("#result").html('Random Result: ' + random_result);
   
    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;
        //console.log(random);

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"

        })

        $(".crystals").append(crystal);
    }
    $("#previous").html("Total Score: " + previous);
}

resetAndStart();



$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous);

    if (previous > random_result) {

        lost++;

        $("#lost").html("You lost" + lost);

        previous = 0;

        resetAndStart();
    }
    else if (previous === random_result) {

        win++;

        $("#win").html("You win!" + win);
        
        previous = 0;

        resetAndStart();
    }
});



//A game with 4 crystal and random result
//every crystal needs to have a random number between 1 - 12
//A new random number should be generated every single time we win or lose
//When clicking any CRYSTAL, it should add to the previous result
//until it equals the total score
//if it is greater than the random result we decrease the last counter
// if it is equal, then we increment a win counter