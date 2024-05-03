
function capitalize(string){
    return string.toUpperCase()
}

function reverseString(string){
    return string.split("").reverse().join('')
}

const calculator = {
    add: (num1, num2) => num1+num2,
    subtract: (num1, num2) => num1-num2,
    divide: (num1, num2) => num1/num2,
    multiply: (num1, num2) => num1*num2,
}

function caesarCipher (string, factor){
    let ciphered = []
    let chars = string.split("").map(char => char.charCodeAt())
    chars.forEach(char => {
        if (char >= 97 && char <=122){
            ciphered.push(String.fromCharCode(((char+factor-97)%26)+97))
        } else if (char >= 65 && char <=90){
            ciphered.push(String.fromCharCode(((char+factor-65)%26)+65))
        } else {
            ciphered.push(String.fromCharCode(char))
        }
    })
    return ciphered.join("")
}

function analyzeArray(array){
    const sum = array.reduce((a, b) => a + b, 0);
    const length = array.length;
    const average = sum/length;
    const min = Math.min(...array);
    const max = Math.max(...array);
    

    return { average, min, max, length }
}

module.exports = {capitalize, reverseString, calculator, caesarCipher, analyzeArray};