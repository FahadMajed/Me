var buttonColor = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var i = 0;



$(document).keypress(function() {
nextSequence();
});

$(".btn").click(function(){


  var userChosenColour = $(this).attr("id");

$("."+userChosenColour).fadeTo(100, 0.3, function() { $(this).fadeTo(100, 1.0); });

userClickedPattern.push(userChosenColour);


playSound(userChosenColour);

animatePress(userChosenColour);

checkAnswer(userClickedPattern.length-1);
});


function animatePress(currentColor) {
var cc = "#"+currentColor;
  $(cc).addClass("pressed");

  setTimeout(function () {
        $(cc).removeClass("pressed");
}, 100);

}

function playSound(name) {

    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();

  }


function nextSequence() {
  var randomNumber = Math.random()*4;
  randomNumber = Math.floor(randomNumber);
userClickedPattern = [];
var randomChosenColor = buttonColor[randomNumber];
gamePattern.push(randomChosenColor);
var color = "."+randomChosenColor;


$(color).fadeTo(100, 0.3, function() { $(this).fadeTo(100, 1.0); });


playSound(randomChosenColor);

i++;
var level = "Level "+i;

$("#level-title").text(level);


}

//1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {



      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {
$("#level-title").text("YOU LOST!");
$("body").addClass("game-over");
playSound("wrong");
startOver();
setTimeout(function () {
  $("body").removeClass("game-over");
  $("#level-title").text("Press any key to restart");
}, 500);

    }
  }

  function startOver() {
    gamePattern = [];
    userClickedPattern = [];
    i = 0;
  }
