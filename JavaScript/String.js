// String method in JavaScript

// Constructor in the string of js

let firstname  = "Satyam" // return a string 
let lastname = "Anand"
let fisrtsentence = 'The quick brown fox over   the'
let newfirstname = new String(firstname) // retutn a object with string value as firstname

// methods

const regex = /[a]/gi // method to find the specific letter  /g-global /gi- global but igonre the cse sensitive

console.log(newfirstname.at(5))  // return the chat at the given index value  m
console.log(firstname.at(5))  // return the chat at the given index value  m
console.log(firstname.charAt(5)) // return the chat at the given index value  m
console.log(firstname.concat(' ', lastname)) // add two string with given joining value here empty space      Satyam Anand
console.log(firstname.endsWith('am'))  // retutn boolean value true
console.log(firstname.includes('ama')) // retutn boolean value false
console.log(firstname.indexOf('a')) // return the first occurance
console.log(firstname.concat(' ', lastname).match(regex)) // return the array of all occurance [ 'a', 'a', 'A', 'a' ]
console.log(firstname.concat(' ', lastname).matchAll(regex))
console.log(firstname.concat(' ', lastname).replace('a', 't'))
console.log(firstname.concat(' ', lastname).replaceAll('a', 't'))
console.log(firstname.slice(3, 5))
console.log(fisrtsentence.split("fox"))
console.log(firstname.toLowerCase())
console.log(firstname.toUpperCase())
console.log(fisrtsentence.trim())
console.log(fisrtsentence.length)
