// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("theSecret", () => {
    it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
      const secretCodeWord1 = ["Lackadaisical"]
      const secretCodeWord2 = ["Gobbledygook"]
      const secretCodeWord3 = ["Eccentric"]
      expect(theSecret(secretCodeWord1)).toEqual(expect.arrayContaining(["L4ck4d41s1c4l"]))
      expect(theSecret(secretCodeWord2)).toEqual(expect.arrayContaining(["Gobbledygook"]))
      expect(theSecret(secretCodeWord3)).toEqual(expect.arrayContaining(["Eccentric"]))
    })
  })

// Fill in "describ/ it / expect statment"
// Run test
// ReferenceError: theSecret is not defined

// b) Create the function that makes the test pass.

// Write function that takes in specific letter and if there is that letter reuturn this other specific number.

const theShuffler = (string) => {
  return string.filter(value => {
      if(value a){
          return 4
      }
      if(value e){
        return 3
    }
    if(value i){
        return 1
    }
    if(value o){
        return 0
  })
}


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("theLetter", () => {
    it("takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {
      const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
      const letterA = "a"
      const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
      const letterE = "e"
      expect(theLetter(arrayOfWords1)).toEqual(expect.arrayContaining(["Apple", "Banana", "Orange"]))
      expect(theLetter(arrayOfWords2)).toEqual(expect.arrayContaining(["Cherry", "Blueberry", "Peach"]))
    })
  })

//   ReferenceError: theLetter is not defined

// b) Create the function that makes the test pass.

// If the string contains either "a" or "e" return the string.

const theLetter = (array) => {
    return array.filter(value => {
      if (value "a"){
        return string
      }
      if (value "e"){
        return string
    })
  }

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// // Expected output: false

describe("theFull", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house.", () => {
        const hand1 = [5, 5, 5, 3, 3]
        const hand2 = [5, 5, 3, 3, 4]
        const hand3 = [5, 5, 5, 5, 4]
      expect(theFull(hand1)).toEqual(expect.arrayContaining([true]))
      expect(theFull(hand2)).toEqual(expect.arrayContaining([false]))
      expect(theFull(hand3)).toEqual(expect.arrayContaining([false]))
    })
  })

  //     ReferenceError: theFull is not defined

// b) Create the function that makes the test pass.

// create function that takes in array of 5 numbers
// have it determin if the array contains 2 same numbers and 3 same numbers
// if both of those are true than it is true that it is a full house.
// if one or both is flase than it is not a full house

const theFull = (arr) => {
    if arr.inculdes()
    return true
    if arr.includes()
    return true
    if true
    return full house
    else not full house
console.log(theFull)
