var generate = document.querySelector("#generate");

symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
uppercase = ["A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

generate.addEventListener("click", function () {
    pass = generatePassword();
    document.getElementById("password").placeholder = pass;
});

var theSymbols;
var theNumber;
var theLowercase;
var theUppercase;
var enter;

var enter;
var choices;

function generatePassword() {
    enter = parseInt(prompt("How long do you want your password to be? 8 - 128 letters"));
    if (enter) {
        theSymbols = confirm("Do you want symobls?");
        theNumber = confirm("Do you want numbers?");
        theLowercase = confirm("Do you want lowercase letters?");
        theUppercase = confirm("Do you want uppercase letters?");
    }
    if (!theSymbols && !theNumber && !theLowercase && !theUppercase) {
        choices = alert("N/A");

    }
    else if (theSymbols && theNumber && theLowercase && theUppercase) {
        choices = symbols.concat(number, lowercase, uppercase);
    }
    else if (theNumber && theLowercase && theUppercase) {
        choices = number.concat(lowercase, uppercase);
    }
    else if (theSymbols && theLowercase && theUppercase) {
        choices = symbols.concat(lowercase, uppercase);
    }
    else if (theSymbols && theNumber && theLowercase) {
        choices = symbols.concat(number, lowercase);
    }
    else if (theSymbols && theNumber && theUppercase) {
        choices = symbols.concat(number, uppercase);
    }
    else if (theSymbols && theNumber) {
        choices = symbols.concat(number);
    } 
    else if (theLowercase && theUppercase) {
        choices = lowercase.concat(uppercase);
    }
    else if (theNumber && theLowercase) {
        choices = number.concat(lowercase);
    } 
    else if (theSymbols && theLowercase) {
        choices = symbols.concat(lowercase);

    } 
    else if (theUppercase && theSymbols) {
        choices = uppercase.concat(symbols);
    } 
    else if (theNumber && theUppercase) {
        choices = number.concat(uppercase);
    }
    else if (theSymbols) {
        choices = symbols;
    }
    else if (theNumber) {
        choices = number;
    }
    else if (theLowercase) {
        choices = lowercase;
    }
    else if (theUppercase) {
        choices = uppercase;
    };

    var password = [];

    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    var pass = password.join("");
    UserInput(pass);
    return pass;
}

function UserInput(pass) {
    document.getElementById("password").textContent = pass;

}

// step 1. create variables to hold arrays of the password crieteria ex: symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "?"] Got it!
//  step 2. user prompt function to get password options (I think i did it)
//  step 2.1 inside of the user prompt function need to set the asnwers to a variable so that i can use those to get the values that i need. and can either set the answers globally or this function can be a value of a variable.
//  step 3. create new function to generate a random value.
//  step 4. generate password function this is going to contain if statements and based on those if statements im going concat (look it up) going to need variables to store temporary arrays.
// step 5. submit password to html.
