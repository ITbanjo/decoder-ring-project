// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  //helper function
  function findDuplicates(alphabetInput) { //checks substitution alphabet for duplicate characters - returns true if more than one is found - returns false if not
    const alphabet = alphabetInput.toLowerCase().split("")
    for (let i = 0; i < alphabet.length; i++) {
      const matches = alphabet.filter((char) => alphabet[i] === char)
      if (matches.length > 1) {
        return true
      } 
    }
    return false
  }
//-------------------------------------------------------------
  function substitutionEncode(inputArray,substAlpha,standardAlpha) { //takes in formatted input from substitution() and returns encoded string
    let resultString = ""
    inputArray.forEach((char) => {
      if (char === " ") {
        resultString += char
      } else {
        const index = standardAlpha.indexOf(char)
        resultString += substAlpha[index]
      }
    })
    return resultString
  }
//-------------------------------------------------------------
  function substitutionDecode(inputArray,substAlpha,standardAlpha) { //takes in formatted input from substitution() and returns decoded string
    let resultString = ""
    inputArray.forEach((char) => {
      if (char === " ") {
        resultString += char
      } else {
        const index = substAlpha.indexOf(char)
        resultString += standardAlpha[index]
      }
    })
    return resultString
  }
//-------------------------------------------------------------
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length != 26 || findDuplicates(alphabet)) return false //returns false if alphabet is undefined, length is not equal to 26, or there are duplicate chars in the string
    const standardAlpha = 'abcdefghijklmnopqrstuvwxyz'.split("")
    const substAlpha = alphabet.toLowerCase().split("")
    const inputArray = input.toLowerCase().split("")
    if (encode) {
      return substitutionEncode(inputArray,substAlpha,standardAlpha)
    } else {
      return substitutionDecode(inputArray,substAlpha,standardAlpha)
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
