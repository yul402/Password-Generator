# Project: Password Generator
This repository showcases a web application that can be used to generate strong passwords for users based on their choices. Figure below shows the outlook of the application:

![Alt text](/Assets/PasswordGenerator_01.png?raw=true "Website layout")


## Ask for Password Specification
Once the user clicks on "Generate Password" button, a sequence of promp will be shown to ask for desired specification. 

- Password Length: user should enter a numeric value between 8-128. The defualt length is 8 digits. 
- Uppercase character type: check if user want to include uppercase letter within the generated password.
- Lowercase character type: check if user want to include lowercase letter within the generated password.
- Number character type: check if user want to include number within the generated password.
- Special character type: check if user want to include special characters within the generated password.

Figure below demonstrates the prompt used to collect "Password Length":

![Alt text](/Assets/PasswordGenerator_02.png?raw=true "Prompt: Ask for Specification")

### User Input Validation
Several conditions are used to check if user's input is valid. If the input is not valid, user will be guided through the flow of collecting "password specification" until enough information is gathered for further processing.

- Check for "Password Length": Both "string input" and "numeric value not within 8-128" are not allowed.
- Check for "Character Type": User need to selecte at lease one character type among 4 provided character types.

Figure below demonstrates the prompt used to guide and remind user of the correct way to utilize the application:

![Alt text](/Assets/PasswordGenerator_03.png?raw=true "Prompt: Input Validation")

## Generate Password
After collecting valid password specification, a password will be generated. The generated password met user's requirement and will be shown in the website.

Figure below illustrates a generated password string (Password Specification: 8 digits, with uppercase letter, number and special characters):

![Alt text](/Assets/PasswordGenerator_04.png?raw=true "Generated Password")
