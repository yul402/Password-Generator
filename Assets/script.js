// Declare variables
var password_string = ""
var passwordLen
var upperCase_place
var lowerCase_place
var number_place
var special_place
var generateBtn = document.querySelector("#generate");
var lowerCase_set = "abcdefghijklmnopqrstuvwxyz"
var upperCase_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number_set = "1234567890"
var special_set = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var all_set = ""


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write 'generatePassword function' to generate a password
function generatePassword(){
  getInput()
  var all_set_arr = all_set.split("")
  //Generate password
  while(passwordLen > 0){
    password_string += all_set[Math.floor(Math.random()*all_set.length)]
    passwordLen --
  }

  // Make sure the final password have at least one character for each specified type 
  var array = [upperCase_place,lowerCase_place,number_place,special_place] 
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
    //Slice and insert the specified character type
    if(typeof(array[i]) != "undefined"){
      var temp = Math.floor(Math.random()*password_string.length)
      password_string = password_string.slice(0,temp) + array[i] + password_string.slice(temp)
      console.log(password_string);
    }
  }

  return password_string
}


// Get user requirment through 'prompt'
function getInput(){

  //Get correct 'password length':
  passwordLen = parseInt(prompt("Please specify password length (8-128): ",8))
  
  while (isNaN(passwordLen) || passwordLen < 8 || passwordLen > 128){
    passwordLen = parseInt(prompt(" Please enter valid numeric input for password length (8-128): "))
  }

  //Get user's requirement for 'Uppercase/Lowercase/Number/Special_Character':
  var upperCase_check = confirm("Add uppercase letter in your password?");
  var lowerCase_check = confirm("Add lowercase letter in your password?");
  var number_check = confirm("Add number in your password?");
  var special_check = confirm("Add special character in your password?");
  // Make sure user choose at least one character type 
  while(!(upperCase_check||lowerCase_check||number_check||special_check)){
    alert("Please choose at least one character type among 'Upper Case', 'Lower Case', 'Numeber', 'Special Characters'");
    var upperCase_check = confirm("Add uppercase letter in your password?");
    var lowerCase_check = confirm("Add lowercase letter in your password?");
    var number_check = confirm("Add number in your password?");
    var special_check = confirm("Add special character in your password?");
  }

  //Make sure types of element match with user requirment
  //Generate and store a specified character randomly (will insert to generated password string latter)
  if(upperCase_check){
    all_set += upperCase_set
    var upperCase_set_arr = upperCase_set.split("")
    upperCase_place = upperCase_set_arr[Math.floor(Math.random()*upperCase_set_arr.length)]
    passwordLen--
  }
  if(lowerCase_check){
    all_set += lowerCase_set
    var lowerCase_set_arr = lowerCase_set.split("")
    lowerCase_place = lowerCase_set_arr[Math.floor(Math.random()*lowerCase_set_arr.length)]
    passwordLen--
  }
  if(number_check){
    all_set += number_set
    var number_set_arr = number_set.split("")
    number_place = number_set_arr[Math.floor(Math.random()*number_set_arr.length)]
    passwordLen--
  }
  if(special_check){
    all_set += special_set
    var special_set_arr = special_set.split("")
    special_place = special_set_arr[Math.floor(Math.random()*special_set_arr.length)]
    passwordLen--
  }

}
