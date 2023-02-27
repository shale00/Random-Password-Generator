// References to the #generate element
var generateBtn = document.querySelector("#generate");

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Possible character arrays.
var lowercase = ["a","b","c","d","e","f","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = ["1","2","3","4","5","6","7","8","9","0"];
var special = ["!","@","#","$","%","^","&","*","(",")"];

// Global Variables.
var possibleChar = []
var confirmArr = [];
var guaranteeChar = [];
var passLength = ""


// Main function
function generatePassword () {
  passwordLength();


// Local function to prompt user for variable length. User will be alerted and prompted again if input is invalid.
function passwordLength() {
  passLength = parseInt(prompt("Enter a password length (number) between 8 and 128 characters:"));
  if (passLength >= 8 && passLength <= 128) {
  chooseCharacters(); 
} else {
  window.alert("Try again");
   passwordLength();
}
 
}


// Local function to prompt user which character types to include. Must include one type or user will be prompted again.
function chooseCharacters() {
  var selectLowercase = confirm("Include lowercase letters?");
  var selectUppercase = confirm("Include uppercase letters?");
  var selectNumeric = confirm("Include numbers?");
  var selectSpecial = confirm("Include special characters?");

    if (!selectLowercase && !selectUppercase && !selectNumeric && !selectSpecial) {
    window.alert("You must select at least one character type.");
    chooseCharacters();
  } 

  //If character type is confirmed, concatenate it into a custom array.
    if (selectLowercase) {
      possibleChar = possibleChar.concat(lowercase);

      //To make sure at least one character from each selection is added in the array, push a random character from the 
      //  selected character type into a custom array. "y" is just used as a counter.
      guaranteeChar.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
      confirmArr.push("y");
      
    }
    if (selectUppercase) {
      possibleChar = possibleChar.concat(uppercase);
      guaranteeChar.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
      confirmArr.push("y");

    }
    if (selectNumeric) {
      possibleChar = possibleChar.concat(numeric);
      guaranteeChar.push(numeric[Math.floor(Math.random() * numeric.length)]);
      confirmArr.push("y");
      
    }
    if (selectSpecial) {
      possibleChar = possibleChar.concat(special);
      guaranteeChar.push(special[Math.floor(Math.random() * special.length)]);
      confirmArr.push("y");

    }
  }
// Variable to account for the guaranteed characters.
  var newPassLength = passLength - (confirmArr.length);

  // Function to select a random item from the possible characters array and push it into a new array.
  function selectRandomItems() {
    var result = [];
    for (i = 0; i < newPassLength; i++) {
     var randomIndex = Math.floor(Math.random() * possibleChar.length);
     result.push(possibleChar[randomIndex]);
    }
    return result;
  }

   // Variable to call the random item function.
    var randomItems = selectRandomItems();

   // Final varible that concatenates the guaranteed character array with the random items array and removes the commas within the array for the final result.
    var randomPassword = (guaranteeChar.concat(randomItems)).join("");

 
return randomPassword;

}


// Write password function to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}





