var wins = 0;
var losses = 0;
var leftGuesses = 9;
var array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userInput;
var compPick;
var userPress=[];
var wrongGuesses=[];

//reset the game after the user losses or wins
function reset() {
	compPick = array[Math.floor(Math.random() * array.length)];
	leftGuesses = 9;
	userPress = [];
  	
	}

  // Let's start by grabbing a reference to the <span> below.
    var userInputSpan = document.getElementById("user-input");
   
   //computer will puck a random letter   
    compPick = array[Math.floor(Math.random() * array.length)];
      
  // To give JavaScript a function to execute when onkeyup event fires.
    document.onkeyup = function(letters) {
      	userInput = letters.key;
      	userPress.push(userInput);
		userInputSpan.textContent = userPress;
		  
		//check if the player inputs letters
		if (event.keyCode >= 65 && event.keyCode <=90) {
			if (leftGuesses > 0) {

				for (var i=0; i < array.length; i++) {
					userInput = array[i];
				}	
				
				if (userInput === compPick) {
					wins++;
					document.getElementById("wins").textContent = wins;
					reset();
				}
				else {
					wrongGuesses.push(letters);
					leftGuesses--;
					document.getElementById("guessesLeft").textContent = leftGuesses;
				//	array.splice(array.indexOf(userInput),1);
				}
			}
			else if(leftGuesses === 0) {
				losses++;
				document.getElementById("lossesInput").textContent = losses;
				reset();
			}
			
		}
		//If the player doesn't input letters
		else {
			userPress.pop();
			alert("Plase pick a letter! You punk!");		
		}
	
	}





