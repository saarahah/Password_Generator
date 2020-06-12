// Assignment Code

//global variables for strings and random array
var generateBtn = document.querySelector("#generate");
//string of lowercase
var letterString="abcdefghijklmnopqrstuvwxyz";
//string of numbers
var numberString="1234567890";
//string of special characters
var characterString="!@#$%^&*()";
//string of uppercase characters
var letterUCString="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//check to make sure at least 1 option chosen after character count
var stringCheck = 0;
//array which the random chosen letters are pushed to
var randomArray =[];

//declared these variables globally for reset
var capitalLetters;
var specialcharacters;
var numericCharacters;
var lowercaseCharacters;

//creates function and asks user for numOfCharacters input for variable
function generatePassword(){
  
var ourPassword = [];
var numOfCharacters= prompt ("how many characters");

//check that the character type and length is correct
  if (numOfCharacters < 8){
    alert ("needs to be at least 8 char");
  }

//larger number of characters
    else if (numOfCharacters>128){
        alert("needs to be less than 129 characters");
      }

//input is not a number
    else if (isNaN(numOfCharacters)){
       alert("not a number");

//moves on to other confirms 
      }else{
        // console.log(numOfCharacters);

  //if correct move onto other confirmations re: characters/capitals
  var specialcharacters=confirm ("will there be special characters");
    if(specialcharacters===true){
    stringCheck ++;
  }

  //confirm whether there will be numbers if yes add to 
  var numericCharacters=confirm ("will there be numbers");
  if(numericCharacters===true){
    stringCheck ++;
  }

  //confirms lowercase letters
  var lowercaseCharacters=confirm ("will there be lowercase characters");
  if(lowercaseCharacters===true){
    stringCheck ++;
  }

//confirms capital letters
  var capitalLetters=confirm ("will there be capitals");
  if(capitalLetters===true){
    stringCheck ++;
  }

//makes sure at least one of the conditions above is chosen
  if (stringCheck > 0 ){
    
//adds one each iteration
    for (let i=0; i < numOfCharacters; i++){

//uses math random times the string length to randomly pick from each string of letters/numbers/etc
var randomNumber = Math.floor(Math.random() * 10)
var randomLetter =letterString[Math.floor(Math.random() * letterString.length)]
var randomUppercase =letterUCString[Math.floor(Math.random() * letterUCString.length)]
var randomCharacter = characterString[Math.floor(Math.random() * characterString.length)]
      
//pushes values into an empty array that stores the password
  if(specialcharacters===true){
        randomArray.push(randomCharacter);
      }

  if(lowercaseCharacters===true){
        randomArray.push(randomLetter);
      }
  if(capitalLetters===true){
        randomArray.push(randomUppercase);
      }

  if(numericCharacters===true){
        randomArray.push(randomNumber);
      }

//chooses randomly from the random array the values were pushed to
var randomChoice = randomArray[Math.floor(Math.random() * randomArray.length)]

//concatenates ourpassword and random choice
    ourPassword += randomChoice;
  }

   return ourPassword

//if user does not choose any option they get an alert and aren't able to make pw
  }else{
    alert("you must have at least one character option")
    }
  }
}

// Write password to the #password input
function writePassword() {

//calls for the values to be reset after password is written
resetValues();
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//resetting the values to initial so a new password can be made without reloading page
function resetValues(){
  randomArray =[];
  stringCheck=0;
   capitalLetters ===false;
   specialcharacters===false;
   numericCharacters===false;
   lowercaseCharacters===false;
// console.log("resetted that garbage");
}