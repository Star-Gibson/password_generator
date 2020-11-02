// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var PLength = prompt("Enter Desired Password Length. Min 8 Characters and 128 Max.");

  // Verification that Password is 8-128 characters and creates array dictated by User's answer. 
  if (PLength >= 8 && PLength <= 128) {
    var NPwdLength = parseInt(PwdLength);
    //NPwdLength = PLength;

    //console.log(NPwdLength);
    var confirmUppercase = confirm("Have Password Contain Uppercase Letters?");
    var confirmNumbers = confirm("Have Password Contain Numbers?");
    var confirmLowercase = confirm("Have Password Contain Lowercase Letters?");
    var confirmSymbols = confirm("Have Password Contain Special Characters?");

    var NPwdLength;

    // Defined variables for all values.
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    var symbols = '!"#$%&\'()*+,-./:;<=>?@^[]^_`{|}~';

    //User's Choices 

    // 1 - All options
    if (NPwdLength >= 8 && NPwdLength <= 128 && confirmUppercase && confirmNumbers && confirmLowercase && confirmSymbols) {
      function generate(length = NPwdLength) {
        var all = upperCase + numbers + lowerCase + symbols;
        var password = '';
        for (var index = 0; index < length; index++) {
          var character = Math.floor(Math.random() * all.length);
          password += all[(character, character + 1)];
        }
        document.getElementById("password").innerHTML = password;
        return password;
      }
      generate(NPwdLength);
    }

    // 2 - Uppercase, Lowercase, Numbers
    else if (NPwdLength >= 8 && NPwdLength <= 128 && confirmUppercase && confirmLowercase && confirmNumbers) {
      function generate(length = NPwdLength) {
        var all = upperCase + lowerCase + numbers;
        var password = '';
        for (var index = 0; index < length; index++) {
          var character = Math.floor(Math.random() * all.length);
          password += all[(character, character + 1)];
        }
        document.getElementById("password").innerHTML = password;
        return password;
      }
      generate(NPwdLength)
    }

    // 3 - Uppercase, Lowercase, Symbols
    else if (NPwdLength >= 8 && NPwdLength <= 128 && confirmUppercase && confirmLowercase && confirmSymbols) {
      function generate(length = NPwdLength) {
        var all = upperCase + lowerCase + symbols;
        var password = '';
        for (var index = 0; index < length; index++) {
          var character = Math.floor(Math.random() * all.length);
          password += all[(character, character + 1)];
        }
        document.getElementById("password").innerHTML = password;
        return password;
      }
      generate(NPwdLength)
    }

    //4 - Uppercase, Numbers, Symbols
    else if (NPwdLength >= 8 && NPwdLength <= 128 && confirmUppercase && confirmNumbers && confirmSymbols) {
      function generate(length = NPwdLength) {
        var all = upperCase + numbers + symbols;
        var password = '';
        for (var index = 0; index < length; index++) {
          var character = Math.floor(Math.random() * all.length);
          password += all[(character, character + 1)];
        }
        document.getElementById("password").innerHTML = password;
        return password;
      }
      generate(NPwdLength)
    }

    //5 - Lowercase, Numbers, Symbols
    else if (NPwdLength >= 8 && NPwdLength <= 128 && confirmLowercase && confirmNumbers && confirmSymbols) {
      function generate (length = NPwdLength) {
        var all = lowerCase + numbers + symbols;
        var password = '';
        for (var index = 0; index < length; index++) {
          var character = Math.floor(Math.random() * all.length);
          password += all[(character, character + 1)];
        }
        document.getElementById("password").innerHTML = password;
        return password;
      }
      generate(NPwdLength)
    }

    //6 - Uppercase, Lowercase
    else if (NPwdLength >= 8 && NPwdLength <= 128 && confirmUppercase && confirmLowercase) {
      function generate (length = NPwdLength) {
        var all = upperCase + lowerCase;
        var password = '';
        for (var index = 0; index < length; index++) {
          var character = Math.floor(Math.random() * all.length);
          password += all[(character, character + 1)];
        }
        document.getElementById("password").innerHTML = password;
        return password;
      }
      generate(NPwdLength)
    }


  }
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
