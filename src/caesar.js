// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  
  //helper function that handles encoding and decoding encodes by default - (multiply "shift" by -1 to decode)
  function caesarEncodeDecode(input, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("") //Alphabet array
    const formattedInput = input.toLowerCase() //format input string to lowercase
    let resultString = ""
    for (let i = 0; i < formattedInput.length; i++) { //loop through each character of input string
      if (!alphabet.includes(formattedInput[i])) { //Leave as is if not an alpha letter
        resultString += formattedInput[i]
    } else {
        const alphaIndex = alphabet.indexOf(formattedInput[i]) //find index position, in alphabet, for current letter from formattedInput
        const shiftValue = alphaIndex + shift //add the index position of the input letter to the shift value to calculate index position of replacement letter
        //the if statements below account for when the index needs to 'wrap around' the alphabet
        if (shiftValue <= 25 && shiftValue >= 0) { //if it does not exceed alphabet length and is not negative, add letter with index of shiftValue to resultString
          resultString += alphabet[shiftValue] 
      } else if (shiftValue > 25) { //if shiftValue does exceed, then subtract 26 from shiftValue and add the letter with the resulting index
          resultString += alphabet[shiftValue - 26]
      } else if (shiftValue < 0) { //if shiftVaule is negative, then add 26 to shiftValue and add letter with the resulting index
          resultString += alphabet[shiftValue + 26]
      }
    } 
  }
   return resultString
  }
//-------------------------------------------------------------
  function caesar(input, shift, encode = true) {
    if (!input || !shift || shift > 25 || shift < -25 || shift === 0) return false
    let output = ""
    if (encode) {
      output = caesarEncodeDecode(input,shift)
  } else {
      output = caesarEncodeDecode(input,shift * -1)
            }
  return output
 }

  return {
    caesar,
  };
})();



module.exports = { caesar: caesarModule.caesar };
