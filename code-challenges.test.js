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
    it("converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
      const secretCodeWord1 = "Lackadaisical"
      // Expected output: "L4ck4d41s1c4l"
      const secretCodeWord2 = "Gobbledygook"
      // Expected output: "G0bbl3dyg00k"
      const secretCodeWord3 = "Eccentric"
      // Expected output: "3cc3ntr1c"
      expect(theSecret(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(theSecret(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(theSecret(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })

// Fill in "describ/ it / expect statment"
// Run test
// ReferenceError: theSecret is not defined

// b) Create the function that makes the test pass.

// Write function that takes in a string.
// use .replace
// Using global modifier in a regex
// Return our modified string


const theSecret = (string) => {
  return string.replace(/a|A/g, 4).replace(/e|E/g, 3).replace(/i|I/g, 1).replace(/o|O/g, 0)
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
      expect(theLetter(arrayOfWords1,letterA)).toEqual(["Apple", "Banana", "Orange"])
      expect(theLetter(arrayOfWords2,letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })

//   ReferenceError: theLetter is not defined

// b) Create the function that makes the test pass.

// If the string contains either "a" or "e" return the string.

// // Pseudocode 
// create a function called tootyFruity
// use .filter to filter out the values that has the specified letter
// use .toUpperCase to and || to also include capital letters
// use .includes to look for the letter in the value


const theLetter = (array, letter) => {
  return array.filter(value => { 
      return value.includes(letter) || value.includes(letter.toUpperCase()) 
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
      // Expected output: true
      const hand2 = [5, 5, 3, 3, 4]
      // Expected output: false
      const hand3 = [5, 5, 5, 5, 4]
      // Expected output: false
      const hand4 = [3, 5, 5, 3, 5]
      // Expected output: true
    expect(theFull(hand1)).toEqual(true)
    expect(theFull(hand2)).toEqual(false)
    expect(theFull(hand3)).toEqual(false)
    expect(theFull(hand4)).toEqual(true)
    })
  })

  //     ReferenceError: theFull is not defined

// b) Create the function that makes the test pass.

// create function that takes in array of 5 numbers
// have it determin if the array contains 2 same numbers and 3 same numbers
// if both of those are true than it is true that it is a full house.
// if one or both is flase than it is not a full house

const theFull = (arr) => {
  if (arr[0] === arr[1,2] && arr[3] === arr[4] || 
      arr[0] === arr[2,3] && arr[1] === arr[4] ||
      arr[0] === arr[3,4] && arr[1] === arr[2])
      return true
  else{
      return false
  }
}
