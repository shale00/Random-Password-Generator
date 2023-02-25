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

var passLength = ""
var lowercase = ["a","b","c","d","e","f","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = ["1","2","3","4","5","6","7","8","9","0"];
var special = ["!","@","#","$","%","^","&","*","(",")"];
//my new array created by confirm choices
var possibleChar = []
var randomPassword = []
// var randomLowercase = ""
// var selectLowercase = ""
var confirmArr = [];
var newPassLength = "";
var guaranteeChar = [];

function generatePassword () {
  passwordLength();
//Step 3
//   When prompted for the length of the password
//       I choose a length of at least 8 characters and no more than 128 characters

function passwordLength() {
passLength = parseInt(prompt("Enter a password length (number) between 8 and 128 characters:"));
  if (passLength >= 8 && passLength <= 128) {
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
  //If character type is selected, concatenate it into our custom array
    if (selectLowercase) {
      possibleChar = possibleChar.concat(lowercase);

      //To make sure at least one character from each selection is added in the array, push a random character from the selected character type to push into the custom array
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

  newPassLength = passLength - (confirmArr.length);

  function selectRandomItems(array, amount) {
    var result = [];
    for (let i = 0; i < amount; i++) {
     var randomIndex = Math.floor(Math.random() * array.length);
     result.push(array[randomIndex]);
    }
    return result;
  }
    var randomItems = selectRandomItems(possibleChar, newPassLength);
    console.log(randomItems);
    console.log(confirmArr);

    randomPassword = guaranteeChar.concat(randomItems);



//Step 5
//   When I answer each prompt
//       My input should be validated and at least one character type should be selected


return randomPassword;

}






//Step 6
//   When all prompts are answered 
//      Then a password is generated that matches the selected criteria



// function writePass(possibleChar, newPassLength ) {
//   var result = [];
//   for ( i = 0; i < possibleChar.length; i++) {
//    var randomChar = (Math.floor(Math.random() * newPassLength));
//    result.push(randomChar[randomIndex]);
//   }
//   console.log(result)
// }
    // randomPassword += possibleChar.charAt(randomChar, randomChar + 1)
//   var character = Math.floor(Math.random() * possibleChar.length);
//   randomPassword += possibleChar.charAt(character, character + 1);
//   console.log(randomPassword);

//   }
//   }

//Step 7
//  When the password is generated
//      The password is either displayed in an alert or written to the page



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}





