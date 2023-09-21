//Create function to take in all the password criteria from user
//  Prompt user for length, save as var
//  check to ensure length is between 8-128 chars
//  confirm whether to include lower/upper, nums, and/or special chars
//  validate at least one selected
//  store input

//create a seperate global array for each confirmation

//inside generatePassword:
//  create a var to store user input from password criteria function
//  create new array to take all possible chars that can be used. (from bank of char for each possibility)
//  create conditional statements to push into possible char array
//  ex: if user selected lower case, then push lower case into char array
//  add 1 random char from each required set
//  grab random chars from main bank array until we've met proper size.
//  shuffle characters in password. 
//  validate that password meets all conditions. (update/regenerate password until it is valid.)
//  return result. pass to be generated on page.


// Assignment Code
var generateBtn = document.querySelector("#generate");

//Store user preferences
var passReqs = [8, false, false, false, false];//length, lower, upper, num, symbols


// Write password to the #password input
function writePassword() {
  getPreferences();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Use confirm to get user preferences
function getPreferences() {
  var isValid = false;
  var errorMessage = "Invalid input. Must be number between 8-128.";
  var numRequest = 8;
  //get valid length
  while (!isValid) {
    numRequest = prompt("How many characters long do you want your password to be?\nMust be between 8-128 characters.");
    if (numRequest == null || isNaN(numRequest)) {
      alert(errorMessage);
      continue;
    }
    numRequest = Number(numRequest);
    if (numRequest < 8 || numRequest > 128) {
      alert(errorMessage);
      continue;
    }
    passReqs[0] = numRequest;
    isValid = true;
  }
  isValid = false;
  while (!isValid) {
    isValid = true;
    passReqs[1] = confirm("Would you like to include lower case characters in your password?");
    passReqs[2] = confirm("Would you like to include upper case cahracters in your password?");
    passReqs[3] = confirm("Would you like to include numbers in your password?");
    passReqs[4] = confirm("Would you like to include symbols in your password?");
    if (!(passReqs[1] || passReqs[2] || passReqs[3] || passReqs[4])) {
      alert("Invalid input. Must include at least one character set.");
      isValid = false;
    }
  }
}

//Generates password based on preferences
function generatePassword() {
  var symChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";//len 33
  var alphaChars = "abcdefghijklmnopqrstuvwxyz";//len 26
  var numChars = "0123456789";//len 10
  var charBank = [];
  var remainingChars = passReqs[0];
  var pass = "";
  //TODO: Encapsulate in function
  //Add character to password from each required section,
  //then add section to bank of available characters.
  if (passReqs[1]) {
    charBank = charBank.concat(alphaChars.split(""));
    pass += alphaChars[Math.floor(Math.random() * alphaChars.length)];
    remainingChars--;
  }
  if (passReqs[2]) {
    charBank = charBank.concat(alphaChars.toUpperCase().split(""));
    pass += alphaChars.toUpperCase()[Math.floor(Math.random() * alphaChars.length)];
    remainingChars--;
  }
  if (passReqs[3]) {
    charBank = charBank.concat(numChars.split(""));
    pass += numChars[Math.floor(Math.random() * numChars.length)];
    remainingChars--;
  }
  if (passReqs[4]) {
    charBank = charBank.concat(symChars.split(""));
    pass += symChars[Math.floor(Math.random() * symChars.length)];
    remainingChars--;
  }

  for (remainingChars; remainingChars > 0; remainingChars--) {
    pass += charBank[Math.floor(Math.random() * charBank.length)];
  }
  // console.log(charBank);
  return shuffle(pass);
}

//Use to shuffle midstage password
function shuffle(shuffleStr) {
  return shuffleStr
}