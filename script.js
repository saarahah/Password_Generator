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
  var testPassword = "";
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
       
        } else{
          // console.log("test" + numOfCharacters);

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
  if (stringCheck > 0 ){
    for (let i=0; i < numOfCharacters; i++){
      var randomNumber = Math.floor(Math.random() * 10)
      var randomLetter =letterString[Math.floor(Math.random() * letterString.length)]
      var randomUppercase =letterUCString[Math.floor(Math.random() * letterUCString.length)]
      var randomCharacter = characterString[Math.floor(Math.random() * characterString.length)]
      
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

      var random =randomArray[Math.floor(Math.random() * randomArray.length)]

      testPassword += random;
  }
   return testPassword

  }else{
    alert("you must have at least one character option")
    }
  }
}

// Write password to the #password input
function writePassword() {

resetValues();
var password = generatePassword();
var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//resetting the values to initial so a new password can be made without reloading
function resetValues(){
  randomArray =[];
  stringCheck=0;
   capitalLetters ===false;
   specialcharacters===false;
   numericCharacters===false;
   lowercaseCharacters===false;
  // console.log("reset this bitch");
}
