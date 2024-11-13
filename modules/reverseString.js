
function reverseString(string){
    if(typeof string !== 'string' || string.length === 0){
        return '';
    }
    return string.split('').reverse().join('');
}

module.exports = reverseString;