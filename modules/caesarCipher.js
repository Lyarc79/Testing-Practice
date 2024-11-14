
function caesarCipher(string, shiftFactor){
    return string.split('').map(char => cipherCharacter(char, shiftFactor)).join('');
}

function shiftCharacter(code, baseCode, shiftFactor){
    let adjustedValue = code - baseCode;
    let shiftedValue = adjustedValue + shiftFactor;
    let wrappedValue = (shiftedValue % 26 + 26) % 26;
    return String.fromCharCode(wrappedValue + baseCode);
}

function cipherCharacter(char, shiftFactor){
    let code = char.charCodeAt(0);

    // If its uppercase
    if(code >= 65 && code <= 90){
        return shiftCharacter(code, 65, shiftFactor);
    } 
    // or if its lowercase
    else if(code >= 97 && code <= 122){
        return shiftCharacter(code, 97, shiftFactor);
    }
    // or its non-alphabetical
    return char;
}

module.exports = caesarCipher;