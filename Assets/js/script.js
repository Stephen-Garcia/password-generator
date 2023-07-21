// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var numbers = '0123456789';
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var specialCharacters = '!@#$%^&*()*+,-./:;<=>?@>';
  var password = '';
  var usableCharacters = '';

  var passwordLength = promt('Please choose a password length betweeen 8 and 128 characters.');

  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength);
  }
  else {
    alert('Please select a password length betweeen 8 and 128 characters. Previous selected is invalid.');
    return '';
  };

  var numQuestion = confirm('Do you want to use a number between 0 and 9 for your password?');
  var lowerQuestion = confirm('Do you want to use lowercase letters in your password');
  var upperQuestion = confirm('Do you want to use uppercase letters for your password?');
  var specialQuestion = confirm('Do you want to use special characters for your password?');

  if (numQuestion) {
    usableCharacters += numbers
  }

  if (lowerQuestion) {
    usableCharacters += lowerCase
  }

  if (upperQuestion) {
    usableCharacters += upperCase
  }

  if (specialQuestion) {
    usableCharacters += specialCharacters
  }

  if (!numQuestion && !lowerQuestion && !upperQuestion && !specialQuestion) {
    return alert('You must select at least one character.');
  };

  for (let i = 0; i < passwordLength; i++) {
    password += usableCharacters[Math.floor(Math.random() * usableCharacters.length)];
  }
  return password;
};











}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
