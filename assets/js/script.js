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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
