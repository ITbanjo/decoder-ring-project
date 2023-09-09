const { expect } = require("chai");
const { polybius } = require("../src/polybius");


describe("polybius", () => {
  describe("encode", () => {
    it("should return a string when an input string is given", () => {
      const actual = polybius("thinkful")
      expect(actual).to.be.a('string')
    })
    it("should return a pair of numbers for each letter in the input string", () => {
        const actual = polybius("thinkful")
        const expected = "4432423352125413"
        expect(actual).to.equal(expected)
    })
    it("should translate i and j to code 42", () => {
      const actual = polybius("ij")
      const expected = "4242"
      expect(actual).to.equal(expected)
    })
    it("should ignore capital letters", () => {
      const actual = polybius("THINKful")
      const expected = "4432423352125413"
      expect(actual).to.equal(expected)
    })
    it("should leave spaces unaltered", () => {
        const actual = polybius("think ful")
        const expected = "4432423352 125413"
        expect(actual).to.equal(expected)
    })
  })
  describe("decode (encode = false)", () => {
    it("should return a string when an input string is given", () => {
      const actual = polybius("44",false)
      expect(actual).to.be.a('string')
    })
    it("should return 1 letter per pair of input numbers - i or j should be '(i/j)'", () => {
      const actual = polybius("4432423352125413",false)
      const expected = "th(i/j)nkful"
      expect(actual).to.equal(expected)
    })
    it("should leave spaces unaltered", () => {
      const actual = polybius("4432423352 125413",false)
      const expected = "th(i/j)nk ful"
      expect(actual).to.equal(expected)
    })
    it("should return false if input length is an odd number", () => {
      const actual = polybius("443",false)
      expect(actual).to.be.false
    })
  })
})
