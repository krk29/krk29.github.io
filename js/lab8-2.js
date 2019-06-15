

//INPUT get input number guesses from user and setup code for random number to generate.
function guessNum() {
    let rnum = Math.floor(Math.random() * 100);
     let answer= "Please enter a number between 1 and 100.";
     let n;
     let i = 0
     
     //PROCESSING generate message to alert user is guesses are too high or too low and when correct and setup a do / while loop for all of the user's guesses until it is correct.
 do {	
     n = parseInt(prompt(answer));
     if (n < rnum) {
         answer = "Too low, try again.";
     }
     else if	(n > rnum) {
         answer = "Too high, try again.";
     }
         i++;
 } while (n != rnum);
     answer = n  + " is correct!";
 
 //OUTPUT show total guesses made to get correct number
     document.getElementById("output").innerHTML = answer;
     document.getElementById("guessTot").innerHTML = "You made " + i + " guesses.";
}