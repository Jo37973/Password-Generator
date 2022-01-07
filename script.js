//Character arrays 
// Various special characters for the random password
var specialCharacters = [
  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '_', '+', '`', '~', ';', ':', ',', '.', '<', '>', '/', '?', '\\',"'", '[', ']', '{', '}',
];
// Numeric characters for the random password
var numbers = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];
//Uppercase characters for the random password
var upperCase = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
];
// Lowercase characters for the random password 
var lowerCase = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',  'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
];
//Store the selected characters
var hasspecialCharacters = true;
var hasnumbers = true;
var hasupperCase = true;
var haslowerCase = true;

//This function generates the characters for the password from the user input.
function createOptions() {

  // This prompts the user to select how long they want their password to be within the length limits of 8-128 characters.
  passwordLength = parseInt(prompt('How long would you like your password to be? Min. 8 - Max. 128 characters.'), 10);

  //Alerts to the user to select what characters to be used for the password.
  hasspecialCharacters = confirm('Do you want your password to include special characters? OK: Yes, Cancel: No.' );

  hasnumbers = confirm('Do you want your password to include numbers? OK: Yes, Cancel: No.');

  haslowerCase = confirm('Do you want your password to include Lower Case characters? OK: Yes, Cancel: No.');

  hasupperCase = confirm('Do you want your password to include Upper Case Characters? OK: Yes, Cancel: No');

    //Check that the user has selected the characters, and wont generate a password if all four are not used.
    function charList() {

      if (hasspecialCharacters === true) {
        passOptions = passOptions.concat(specialCharacters);
      }
      if (hasnumbers === true) {
        passOptions = passOptions.concat(numbers);
      }
      if (haslowerCase === true) {
        passOptions = passOptions.concat(lowerCase);
      }
      if (hasupperCase === true) {
        passOptions = passOptions.concat(upperCase);
      }
      return passOptions;
    }

    charList();
  }

//This function selects the random characters from the users choices, based on the desired length
function randomizer(){
  for (var i = 0; i < passwordLength; i++) {
    let charSelect = passOptions[Math.floor(Math.random() * passOptions.length)];
    passwordChars.push(charSelect);
  }
}

//Generate the password from what the user puts in
function generatePassword() {
  passwordLength = 0;
  passOptions = [];
  passwordChars = [];

createOptions();

  //Alerts to make sure the password is the required length and at least one character has been selected
  if (passwordLength < 8) {
    return "ALERT! Password must be 8 characters or more.";
  }
  else if (passwordLength > 128) {
    return "ALERT! Password must be 128 characters or less.";
  }
  else if (isNaN(passwordLength)) {
    return "ALERT! Password must be between 8 and 128 characters in length.";
  }
  else if (haslowerCase === false && hasupperCase === false && hasnumbers === false && hasspecialCharacters === false) {
    return "ALERT! One special character type must be selected to create a password.";
  }

  randomizer();

  return passwordChars.join('');
}

//Assignment code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Event listener to generate button
generateBtn.addEventListener('click', writePassword);