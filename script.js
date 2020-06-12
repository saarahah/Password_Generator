// Assignment Code
var generateBtn = document.querySelector("#generate");

var letterString="abcdefghijklmnopqrstuvwxyz";
 var numberString="1234567890";
var characterString="!@#$%^&*()";
var letterUCString="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var stringCheck = 0;
var randomArray =[];


function generatePassword(){
  var testPassword = "";
  var numOfCharacters= prompt ("how many characters")
  

  if (numOfCharacters < 8 ){
    alert ("needs to be at least 8 char");
  }
      else if (numOfCharacters>128){
        alert("needs to be less than 129 characters")
      }
      else{
    
  var specialcharacters=confirm ("will there be special characters");
  if(specialcharacters===true){
    stringCheck ++;
  }
  var numericCharacters=confirm ("will there be numbers");
  if(numericCharacters===true){
    stringCheck ++;
  }

  var lowercaseCharacters=confirm ("will there be lowercase characters");
  if(lowercaseCharacters===true){
    stringCheck ++;
  }

  var capitalLetters=confirm ("will there be capitals");
  if(capitalLetters===true){
    stringCheck ++;
  }
  if (stringCheck>0){
    for (let i=0; i< numOfCharacters; i++){

      
      var randomNumber = Math.floor(Math.random() *10)
      var randomLetter =letterString[Math.floor(Math.random() *letterString.length)]
      var randomUppercase =letterUCString[Math.floor(Math.random() *letterUCString.length)]
      var randomCharacter = characterString[Math.floor(Math.random() *characterString.length)]
      // var randomArray =[randomUppercase, randomNumber, randomLetter, randomCharacter];
      
      

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

      var random =randomArray[Math.floor(Math.random() *randomArray.length)]
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
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
