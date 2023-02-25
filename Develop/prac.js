
var possibleChar = ["a","b","c","d","e","f","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];
var passLength = 10;
var newPassLength = "";
var confirmArr = [];
var character = "";

var newArr = [];

var selectLowercase = confirm("Include lowercase letters?");
var selectUppercase = confirm("Include uppercase letters?");


if (selectLowercase) {
 confirmArr.push("y");
}
if (selectUppercase) {
    confirmArr.push("y");
   }

newPassLength = passLength - (confirmArr.length);


function selectRandomItems(arr, count) {
    var result = [];
    for (let i = 0; i < count; i++) {
     var randomIndex = Math.floor(Math.random() * arr.length);
     result.push(arr[randomIndex]);
    }
    return result;
  }

  var randomItems = selectRandomItems(possibleChar, newPassLength);

  


// var randomPassword = function writePass(possibleChar, newPassLength) {
// 	for (i=0; i<newPassLength; i++) { 
// 	   newArr = result.push(possibleChar[Math.floor(Math.random() * possibleChar)]);
// }
//     console.log(newArr);
// }












// var length = 8
// console.log(possibleChar.length)
// var randomPassword = ""


//     for (i = 0; i < possibleChar.length; i++) {
//         //  var randomChar = (Math.floor(Math.random() * possibleChar.length));
//         //  randomPassword += possibleChar.charAt(randomChar, randomChar + 1)
//         var character = Math.floor(Math.random() * possibleChar.length);
//         randomPassword += possibleChar.charAt(character, character + 1);
//         console.log(randomPassword);

// }


// function fillArr(passLength) {
//     let numberSelected = 0;
//     for (let i = 0; i < selectObject.options.length; i++) {
//       if (selectObject.options[i].selected) {
//         numberSelected++;
//       }
//     }
//     return numberSelected;
//   }


