// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  const polybiusSquare = [
    ["a","f","l","q","v"],
    ["b","g","m","r","w"],
    ["c","h","n","s","x"],
    ["d","(i/j)","o","t","y"],
    ["e","k","p","u","z"]
  ]
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("") //Alphabet array
//-----------------------------------------------------------
  function polybiusEncode(input) {
    const formattedInput = input.toLowerCase().split("") //format input string to lowercase
    let resultString = ""
    formattedInput.forEach((char) => {
      if (!alphabet.includes(char)) { //if char is not a letter, add char
        resultString += char
    } else if (char === "i" || char === "j") { //if char is 'i' or 'j' then add shared code 42
        resultString += "42"
    } else {
      polybiusSquare.forEach((block) => { //find block that includes char and then concat blockIndex and charIndex as code for given letter
        if (block.includes(char)) {
          const blockIndex = (polybiusSquare.indexOf(block)) + 1
          const charIndex = (block.indexOf(char)) + 1
          resultString += `${blockIndex}${charIndex}`
        } 
      })
    }
  })
  return resultString
}
//-----------------------------------------------------------
function polybiusDecode(input) {
  if (!checkCountIntOdd(input)) return false //if length of ints in input string is odd then return false
  let resultString = ""
  let formattedInput = []
  for (let i = 0; i < input.length; i += 2) { //builds array from input by separating numbers into pairs and separating spaces individually 
    if (input[i] != " ") {
      formattedInput.push(`${input[i]}${input[i + 1]}`)
    } else {
      formattedInput.push(" ")
      i--
    }   
  }
  formattedInput.forEach((pair) => {
    if (pair === " ") { //keep spaces in string
      resultString += " "
    } else {
    const block = polybiusSquare[pair[0] - 1] //takes first number in "pair", subracts 1 (to convert to array index) and stores the matching array of letters from "polybiusSquare" in "block"
    const char = block[pair[1] - 1] //takes second number in "pair", subracts 1 (to convert to array index) and stores the matching letter from "block" in "char"
    resultString += char //adds resulting letter to resultString
    }
  })
  return resultString
}
//-----------------------------------------------------------
//helper function - counts all of the integers from the input string to determine if the length is an even number
function checkCountIntOdd(input) {
  let intCount = 0
  for (let i = 0; i < input.length; i++){
    if (input[i] != " ") intCount++ //excludes spaces from count
  }
  return Number.isInteger(intCount / 2) //returns false if decimal (odd) - returns true if whole number (even)
}

  function polybius(input, encode = true) {
    let output 
    if (encode){
      output = polybiusEncode(input)
    } else {
      output = polybiusDecode(input)
    }
   return output
  }

  return {
    polybius,
  };
})();



module.exports = { polybius: polybiusModule.polybius };
