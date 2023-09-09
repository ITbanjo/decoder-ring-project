const { expect } = require("chai");
const { caesar } = require("../src/caesar");

//caesar shift
describe("caesar", () => {
  describe("input range", () => {
    it("should return false if shift is undefined", () =>{
        const actual = caesar("thinkful")
        expect(actual).to.be.false
    })
    it("should return false if shift is greater than 25", () => {
        const actual = caesar("thinkful",26)
        expect(actual).to.be.false
    })
    it("should return false if shift is less than -25", () => {
        const actual = caesar("thinkful",-26)
        expect(actual).to.be.false
    })
    it("should return false if shift equals 0", () => {
        const actual = caesar("thinkful",0)
        expect(actual).to.be.false
    })
    
  })
  describe("encode", () => {
    it("should return encoded string when given input string and shift value", () => {
        const actual = caesar("a",3)
        const expected = "d"
        expect(actual).to.equal(expected)
    })
    it("should format any capital letters to lowercase", () => {
        const actual = caesar("THINKful",3)
        const expected = "wklqnixo"
        expect(actual).to.equal(expected)
    })
    it("should leave spaces and non-alphabet characters unaltered", () => {
        const actual = caesar("think ful!",3)
        const expected = "wklqn ixo!"
        expect(actual).to.equal(expected)
    })
    it("should 'wrap around' the alphabet if shift goes past 'Z'", () => {
        const actual = caesar("z",3)
        const expected = "c"
        expect(actual).to.equal(expected)
    })
    it("should 'wrap around' the alphabet if shift goes before 'A'", () => {
        const actual = caesar("a",-3)
        const expected = "x"
        expect(actual).to.equal(expected)
    })
  })
  describe("decode (encode is false)", () => {
    it("should return decoded string when given input string, shift value, and encode is false", () => {
        const actual = caesar("d",3,false)
        const expected = "a"
        expect(actual).to.equal(expected)
    })
    it("should format any capital letters to lowercase", () => {
        const actual = caesar("WKLQnixo",3,false)
        const expected = "thinkful"
        expect(actual).to.equal(expected)
    })
    it("should leave spaces and non-alphabet characters unaltered", () => {
        const actual = caesar("wklqn ixo!",3,false)
        const expected = "think ful!"
        expect(actual).to.equal(expected)
    })
    it("should 'wrap around' the alphabet if shift goes past 'Z'", () => {
        const actual = caesar("z",-3,false)
        const expected = "c"
        expect(actual).to.equal(expected)
    })
    it("should 'wrap around' the alphabet if shift goes before 'A'", () => {
        const actual = caesar("a",3,false)
        const expected = "x"
        expect(actual).to.equal(expected)
    })
  }) 
})
