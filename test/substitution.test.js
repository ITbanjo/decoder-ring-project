const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    describe("check input", () => {
        it("should return false if alphabet string is undefined", () => {
            const actual = substitution("thinkful")
            expect(actual).to.be.false
        })
        it("should return false if alphabet string length does not equal 26", () => {
            const actual = substitution("thinkful","abcdefghijklmnopqrstuvwxyz!")
            expect(actual).to.be.false
        })
        it("should return false if alphabet string contains any duplicate characters", () => {
            const actual = substitution("thinkful","abcdefghijklmnopqrstuvwxzz")
            expect(actual).to.be.false
        })
    })
    describe("encode", () => {
        it("should return an encoded string when called with input string and substitute alphabet string", () => {
            const actual = substitution("thinkful","xoyqmcgrukswaflnthdjpzibev")
            const expected = "jrufscpw"
            expect(actual).to.equal(expected)
        })
        it("should ignore capital letters from input", () => {
            const actual = substitution("THINKful","xoyqmcgrukswaflnthdjpzibev")
            const expected = "jrufscpw"
            expect(actual).to.equal(expected)
        })
        it("should leave spaces unaltered in output", () => {
            const actual = substitution("think ful","xoyqmcgrukswaflnthdjpzibev")
            const expected = "jrufs cpw"
            expect(actual).to.equal(expected)
        })
    })
    describe("decode (encode = false)", () => {
        it("should return a decoded string when called with input string and substitute alphabet string and encode is set to false", () => {
            const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
            const expected = "thinkful"
            expect(actual).to.equal(expected)
        })
        it("should ignore capital letters from input", () => {
            const actual = substitution("JRUFScpw", "xoyqmcgrukswaflnthdjpzibev", false)
            const expected = "thinkful"
            expect(actual).to.equal(expected)
        })
        it("should leave spaces unaltered in output", () => {
            const actual = substitution("jrufs cpw", "xoyqmcgrukswaflnthdjpzibev", false)
            const expected = "think ful"
            expect(actual).to.equal(expected)
        })
    })
})
