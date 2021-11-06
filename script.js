function guessNumber(){
alert(" Welcome! What is your name?");
let playerName = prompt(" Enter your name")
alert("Hey, " + playerName + "! Let's start to play!");

const rightAnswer = Math.floor(Math.random() * 25) +1 ;
let guess = parseInt (prompt("Pick a number between 0 and 25" ));

while (guess !== rightAnswer){
   guess = parseInt(prompt("Sorry, that is not correct. Try again"));
   
 } if( guess == rightAnswer){
        alert (" correct");

    }
}
guessNumber();

//Bonus opdracht//

alert(" Welcome! What is your name?");
let playerName = prompt(" Enter your name")
alert("Hey, " + playerName + "! Let's start to play!");

const lowestNumber = parseInt(prompt("Pick your lowest number: "));
const highestNumber = parseInt(prompt("Pick your highest number: "));
const rightAnswer = Math.floor(Math.random() * (highestNumber-lowestNumber)) + lowestNumber;
console.log(rightAnswer);
let guess = parseInt(prompt("Pick a number between " + lowestNumber + "and" + highestNumber));
let attempts = 5
while (guess !== rightAnswer) {
    if (attempts < 1){
        alert (" Game over. You lost the game.");
        attempts= 5;
        rightAnswer = Math.floor(Math.random() * (highestNumber - lowestNumber)) + lowestNumber;
    }
    if (guess > rightAnswer){
        attempts --;
        alert("Too high");
        if( attempts <1){
            alert("This is your last chance to guess");
            prompt ("Try again")}
            
        }else if (guess < rightAnswer){
            attempts--;
            if (attempts < 5){
            alert("Too low");
              alert(" Sorry that is not correct. You still have:" + attempts + " attempts left."); 
              prompt("Try another number");
        }
    }
    else{
                    alert (" That is correct.Congratulations");
                    alert ("Thank you for playing. Bye," + playerName+ "!")
               break
                }
            
            }
        
        