// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var number = '0123456789';
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var specialCharacters = '!@#$%^&*()*+,-./:;<=>?@>';
  var passwords = '';
  var usableCharacters = '';
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
