// Assignment Code - Dont Touch! 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var nPassword = "";
  nPassword = generatePassword();
  var passwordText = document.querySelector("#password");
}

//Function 
function generatePassword (){

  var PLength = prompt("Enter desired length of password. Password length must be between 8-128 characters!");

  //Verification that Password is 8-128 characters and creates array dictated by User's answer. 
  if (PLength >= 8 && PLength <= 128) {
    var NPwdLength = parseInt(PLength);
    //NPwdLength = PLength;

    console.log(NPwdLength);

    var confirmUppercase = confirm("Press OK if password should contain uppercase letters.");
    var confirmNumbers = confirm("Press OK if password should contain numbers.");
    var confirmLowercase = confirm("Press OK if password should contain lowercase letters.");
    var confirmSymbols = confirm("Press OK if password should contain symbols/special characters.");

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
      generate(NPwdLength);
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
      generate(NPwdLength);
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
      generate(NPwdLength);
    }

    //5 - Lowercase, Numbers, Symbols
    else if (NPwdLength >= 8 && NPwdLength <= 128 && confirmLowercase && confirmNumbers && confirmSymbols) {
      function generate(length = NPwdLength) {
        var all = lowerCase + numbers + symbols;
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

    //6 - Uppercase, Lowercase
    else if (NPwdLength >= 8 && NPwdLength <= 128 && confirmUppercase && confirmLowercase) {
      function generate(length = NPwdLength) {
        var all = upperCase + lowerCase;
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

    //7 - Uppercase, Symbols
    else if (NPwdLength >= 8 && NPwdLength <= 128 && confirmUppercase && confirmSymbols) {
      function generate(length = NPwdLength) {
        var all = upperCase + symbols;
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

    //8 - Uppercase, Number
    else if (NPwdLength >= 8 && NPwdLength <= 128 && confirmUppercase && confirmNumbers) {
      function generate(length = NPwdLength) {
        var all = upperCase + numbers;
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

    //9 - Lowercase, Symbols
    else if (NPwdLength >= 8 && NPwdLength <= 128 && confirmLowercase && confirmSymbols) {
      function generate(length = NPwdLength) {
        var all = lowerCase + symbols;
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
    //10 - Lowercase, Numbers
    else if (NPwdLength >= 8 && NPwdLength <= 128 && confirmLowercase && confirmNumbers) {
      function generate(length = NPwdLength) {
        var all = lowerCase + numbers;
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

    //11 - Lowercase
    else if (NPwdLength >= 8 && NPwdLength <= 128 && confirmLowercase) {
      function generate(length = NPwdLength) {
        var all = lowerCase;
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

    //12 - Uppercase
    else if (NPwdLength >= 8 && NPwdLength <= 128 && confirmUppercase) {
      function generate(length = NPwdLength) {
        var all = upperCase;
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

    //13 - Numbers
    else if (NPwdLength >= 8 && NPwdLength <= 128 && confirmNumbers) {
      function generate(length = NPwdLength) {
        var all = numbers;
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

    //14 - Symbols
    else if (NPwdLength >= 8 && NPwdLength <= 128 && confirmSymbols) {
      function generate(length = NPwdLength) {
        var all = symbols;
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

    //Alert to ensure that at least one type of character is chosen.
    else {
      alert("Please select at least one: Lowercase letters, Uppercase letters, numbers, or special characters");
    }
  }
  //Alert to ensure that password length is between 8-128 characters.
  else {
    alert("Please select a number between 8-128!")
  }
  console.log(generate(NPwdLength))
}

// //Attempt at Clipboard function
// function copyClipboard() {
//   var copy = document.getElementById("password");
//   var text = copy.textContent;
//   if (text.length > 0) {
//     copy.select()
//     copy.setSelectionRange(0, 99999)
//     document.execCommand("copy");
//     alert("Copied to Clipboard.");
//   }
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
