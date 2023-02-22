// Assignment code here

//Step 1
// When I click the BUTTON to generate a password
//    I am presented with a series of prompts for password criteria

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Step 2
//   When prompted for password criteria
//       I select which criteria to include in the password



function generatePassword () {
  passwordLength();
//Step 3
//   When prompted for the length of the password
//       I choose a length of at least 8 characters and no more than 128 characters
function passwordLength() {
var length = parseInt(prompt("Enter a password length (number) between 8 and 128 characters:"));
  if (length >= 8 && length <= 128) {
  chooseCharacters(); 
} else {
  window.alert("Try again");
   passwordLength()
}
 return; //****** */
}


//Step 4
//   When asked for character types to include in the password
//       I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters






function chooseCharacters() {
  var selectLowercase = confirm("Include lowercase letters?");
  var selectUppercase = confirm("Include uppercase letters?");
  var selectNumeric = confirm("Include numbers?");
  var selectSpecial = confirm("Include special characters?");

    if (!selectLowercase && !selectUppercase && !selectNumeric && !selectSpecial) {
    window.alert("You must select at least one character type.");
    chooseCharacters();
  } 





//Step 5
//   When I answer each prompt
//       My input should be validated and at least one character type should be selected



  
  }

}





//Step 6
//   When all prompts are answered 
//      Then a password is generated that matches the selected criteria



//Step 7
//  When the password is generated
//      The password is either displayed in an alert or written to the page



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}





