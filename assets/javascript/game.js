var firebaseConfig = {
    apiKey: "AIzaSyC3kmX2MwOV7Ook5W09KB6SzcoCVIgFHEY",
    authDomain: "rpsgame2.firebaseapp.com",
    databaseURL: "https://rpsgame2.firebaseio.com",
    projectId: "rpsgame2",
    storageBucket: "rpsgame2.appspot.com",
    messagingSenderId: "700519141058",
    appId: "1:700519141058:web:bcd04eacd676ea3b"
};

firebase.initializeApp(firebaseConfig);

//player one data:
var playerOnewin = 0; //number of wins for player one
var playerOne; //what player one chose (rock/paper/scissors)
var nameOne; //player one's name


//player two data:
var playerTwowin = 0; //number of wins for player two
var playerTwo; //what player two chose (rock/paper/scissors)
var nameTwo; //player two's name

var ties = 0;

$("#playerTwoWin").text(playerTwowin);
$("#playerOneWin").text(playerOnewin);
$("#ties").text(ties);

$(".left, .playerOne, .right, .playerTwo, .scores, .width").hide();

$(".startBtn").on("click", function () {
    $(".left, .playerOne, .right, .playerTwo, .scores, .width").show();
    $(".startBtn").hide();
})

$(".playerOne").on("click", "img", function () {
    var which = $(this).attr("alt");
    switch (which) {
        case "rock":
            console.log("rock was clicked for player 1");
            playerOne = "rock";
            evaluate();
            break;
        case "paper":
            console.log("paper was clicked for player 1");
            playerOne = "paper";
            evaluate();
            break;
        case "scissors":
            console.log("scissors was clicked for player 1");
            playerOne = "scissors";
            evaluate();
            break;
        default:
            console.log("not sure how you got here")
    }
})


$(".playerTwo").on("click", "img", function () {
    var which = $(this).attr("alt");
    switch (which) {
        case "rock":
            console.log("rock was clicked for player 2");
            playerTwo = "rock";
            evaluate();
            break;
        case "paper":
            console.log("paper was clicked for player 2");
            playerTwo = "paper";
            evaluate();
            break;
        case "scissors":
            console.log("scissors was clicked for player 2");
            playerTwo = "scissors";
            evaluate();
            break;
        default:
            console.log("not sure how you got here")
    }
})

function evaluate() {
    if (playerOne && playerTwo) {
        $(".playerOne").hide();
        $(".playerTwo").hide();
        $(".playerOne").show();
        $(".playerTwo").show();
        if (playerOne === "rock" && playerTwo === "rock") {
            console.log("Tie!");
            ties++;
            $(".outcome").text("Tie!");
        }
        else if (playerOne === "paper" && playerTwo === "rock") {
            console.log("Player one wins!");
            playerOnewin++;
            $(".outcome").text("Player one won!");
        }
        else if (playerOne === "scissors" && playerTwo === "rock") {
            console.log("Player two wins!");
            playerTwowin++;
            $(".outcome").text("Player two won!");
        }
        else if (playerOne === "rock" && playerTwo === "paper") {
            console.log("Player two wins!");
            playerTwowin++;
            $(".outcome").text("Player two won!");
        }
        else if (playerOne === "paper" && playerTwo === "paper") {
            console.log("Tie!");
            ties++;
            $(".outcome").text("Tie!");
        }
        else if (playerOne === "scissors" && playerTwo === "paper") {
            console.log("Player one wins!");
            playerOnewin++;
            $(".outcome").text("Player one won!");
        }
        else if (playerOne === "rock" && playerTwo === "scissors") {
            console.log("Player one wins!");
            playerOnewin++;
            $(".outcome").text("Player one won!");
        }
        else if (playerOne === "paper" && playerTwo === "scissors") {
            console.log("Player two wins!");
            playerTwowin++;
            $(".outcome").text("Player two won!");
        }
        else if (playerOne === "scissors" && playerTwo === "scissors") {
            console.log("Tie!");
            ties++;
            $(".outcome").text("Tie!");
        }
        else {
            console.log("invalid");
        }
        playerOne = undefined;
        playerTwo = undefined;
        restart();
    }
}

function restart() {
    $(".playerOne").hide();
    $(".playerTwo").hide();
    $(".playerOne").show();
    $(".playerTwo").show();
    $("#playerTwoWin").text(playerTwowin);
    $("#playerOneWin").text(playerOnewin);
    $("#ties").text(ties);
}

var database = firebase.database();
var connectionsRef = database.ref("/connections");
var connectedRef = database.ref(".info/connected");

connectedRef.on("value", function (snap) {
    if (snap.val()) {
        var con = connectionsRef.push(true);
        con.onDisconnect().remove();
    }
});
connectionsRef.on("value", function (snapshot) {
    var playersNum = snapshot.numChildren();
    console.log(playersNum);
    if (playersNum == 1) {
        playerOne();
        break;
    }
    else if (playersNum == 2) {
        playerTwo();
        break;
    }
});

function playerOne() {
    alert("one");
}
function playerTwo() {
    alert("two");
}






// -------------------------------------------------------------- (CRITICAL - BLOCK) --------------------------- //
// Set Initial Counter
// var initialValue = 100;
// var clickCounter = initialValue;

// // At the page load and subsequent value changes, get a snapshot of the local data.
// // This callback allows the page to stay updated with the values in firebase node "clicks"
// database.ref("/clicks").on("value", function(snapshot) {

//   // Print the local data to the console.
//   console.log(snapshot.val());


  // Change the HTML to reflect the local value in firebase.
//   clickCounter = snapshot.val().clickCount;

//   // Log the value of the clickCounter
//   console.log(clickCounter);

//   // Change the HTML to reflect the local value in firebase.
//   $("#click-value").text(clickCounter);

// // If any errors are experienced, log them to console.
// }, function(errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });

// --------------------------------------------------------------

// Whenever a user clicks the click-button
// $("#click-button").on("click", function() {

//   // Reduce the clickCounter by 1
//   clickCounter--;

//   // Alert User and reset the counter
//   if (clickCounter === 0) {
//     alert("Phew! You made it! That sure was a lot of clicking.");
//     clickCounter = initialValue;
//   }

//   // Save new value to Firebase
//   database.ref("/clicks").set({
//     clickCount: clickCounter
//   });

//   // Log the value of clickCounter
//   console.log(clickCounter);
// });

// // Whenever a user clicks the restart button
// $("#restart-button").on("click", function() {

//   // Set the clickCounter back to initialValue
//   clickCounter = initialValue;

//   // Save new value to Firebase
//   database.ref("/clicks").set({
//     clickCount: clickCounter
//   });

//   // Log the value of clickCounter
//   console.log(clickCounter);

//   // Change the HTML Values
//   $("#click-value").text(clickCounter);
// });
