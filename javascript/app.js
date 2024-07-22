let number = document.getElementById('number');
let letter = document.getElementById('letter');
let splChar = document.getElementById('spl-char');
let lowerCaseLetter = document.getElementById('lower-case-letter');
let upperCaseLetter = document.getElementById('upper-case-letter');


let inputValue = document.getElementById('get-password');

inputValue.addEventListener('input', () =>
{
    let password = inputValue.value;

    if (password.search(/[a-z]/g) !== -1) {
        lowerCaseLetter.className = 'true'
    } else {
        lowerCaseLetter.className = 'false'
    }


    if (password.search(/[A-Z]/g) !== -1) {
        upperCaseLetter.className = 'true'
    } else {
        upperCaseLetter.className = 'false'
    }


    if (password.search(/[!@#$%^&*]/) !== -1) {
        splChar.className = 'true'
    } else {
        splChar.className = 'false'
    }


    if (password.search(/[0-9]/) !== -1) {
        number.className = 'true'
    } else {
        number.className = 'false'
    }

    let afterRemove = password.replace(/[^a-zA-Z\s]/g, '')
    if (afterRemove.length > 12) {
        letter.className = 'true'
    } else {
        letter.className = 'false'
    }


});


function removeDigitsAndSpecialCharacters(input) {
    // Use regex to replace digits and special characters with an empty string
    return input.replace(/[^a-zA-Z\s]/g, '');
}

// Example usage
let inputString = "P@ssw0rd!23 with special characters & digits.";
let cleanedString = removeDigitsAndSpecialCharacters(inputString);

console.log(cleanedString); // Output: "Psswrd with special characters  digits"
