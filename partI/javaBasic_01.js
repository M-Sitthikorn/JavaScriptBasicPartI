// terminal 
// ctrl + j => Open Terminal in Vs Code 
// cd partI => node node javaBasic_01.js

// Example 1 JavaScript console 
console.log("Hello world")
console.error("This is an Error")
console.warn("")
console.table({
      name: "Sitthikorn",
      age: 43,
      occupation: ["employed"]
})
// Test the code in Devtool in Chrome Browser

// Example 2 JavaScript comment 
// Single-line Comment 

/*
      Multi-line Comment
*/

/**
 * Documentation Comment example sum of a and b 
 * @param {number} a - ตัวเลขตัวที่ 1
 * @param {number} b - ตัวเลขตัวที่ 2
 * @returns {number} ผลรวมของ a และ b
 */
function sum(a, b) {
      return a + b;
}


// Example 3 JavaScript Primitives
// 3.1 variables 
let tum = "Sitthikorn"   // strig 
const age = 43           // number
var occupation = "Employee" // string
const isTeacher = true  // boolean 
let isStudent;  // undefined 
let empty = null // null 

// Exercise 1 
let name = "Sitthikorn"
let whatDoyouWannaBecomeInYouLife = "Programmer"
let sex = "male"
let facebookHandle = "fb:Sitthikorn tum"

console.log(name)
console.log(whatDoyouWannaBecomeInYouLife)
console.log(sex)
console.log(facebookHandle)

//Example 4 Number

const randomNumber = 15000
const dateNumber = 10
let num = 80
console.log("This is num", num)
let incrementNum = num +1
console.log("This is incrementNum", incrementNum)  
let decrementNum = num - 1 
console.log("This is decrementNum", decrementNum)  

// Exercise 2 
let firstNumber = 5 
let secondeNumber = 3
console.log(firstNumber + secondeNumber) // + 
console.log(firstNumber - secondeNumber) // - 
console.log(firstNumber * secondeNumber) // *
console.log(firstNumber/secondeNumber)  // /
console.log(firstNumber%secondeNumber) // modulus
console.log(firstNumber**secondeNumber) // exponential 

