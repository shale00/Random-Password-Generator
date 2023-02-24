
var possibleChar = ["a","b","c","d","e","f","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"]
var length = 8
console.log(possibleChar.length)
var randomPassword = ""


    for (i = 0; i < possibleChar.length; i++) {
        //  var randomChar = (Math.floor(Math.random() * possibleChar.length));
        //  randomPassword += possibleChar.charAt(randomChar, randomChar + 1)
        var character = Math.floor(Math.random() * possibleChar.length);
        randomPassword += possibleChar.charAt(character, character + 1);
        console.log(randomPassword);

}
