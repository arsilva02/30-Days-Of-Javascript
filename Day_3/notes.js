console.log('Day 3 Notes')

//booleans are seperated into truthy and falsy values
//truthy- all numbers except -, all strings excepty empty strings, the true boolean
//falsy - 0,0n, undefined, NaN, false boolean, empty strings


let firstName
console.log(firstName) //undefined, falsy

let empty = null
console.log(null) //null

//Operators
firstName = 'Arden'
let country = 'USA' //we are assigning here

//arithmitic
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64


//lets calculate the radius of a circle!
const PI = Math.PI
let radius = 100

const areaOfCircle = PI * radius**2
console.log(areaOfCircle)

//weight
const gravity = 9.81
let mass = 72
const weight = gravity * mass
console.log(weight)

const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC
console.log(
    `The boiling point of water is ${boilingPoint}0c.\nThe human body temperature is ${bodyTemp}oC.\
    \nThe gravity of earth is ${gravity} meters/seconds squared.`
)

//comparisons are generally the same to other programming langaues
//except == and ===
//first is equivalent in value, the second in equal in value and data type
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type

//operators are &&, ||, and !
console.log(4 > 3 && 10 > 5 )// true && true -> true
console.log(4 > 3 && 10 < 5  )// true && false -> false

console.log(4 > 3 || 10 > 5   )// true && false -> false
console.log(4 > 3 || 10 < 5  )// true && false -> True
console.log(4 < 3 || 10 < 5  )// false && false -> false


console.log(!(4==4))// false 


//increments
let count = 0
console.log(++count) //1
console.log(count) //it stays at 1!

count = 0
console.log(count++)        // 0
console.log(count)          // it stays at 0

count = 0
console.log(--count) // -1
console.log(count)  // -1

count = 0
console.log(count--) // 0
console.log(count)   // -1

//trenary operators
let isRaining = true
isRaining
    ? console.log('You need a rain coat.') //true
    : console.log('No need for a rain coat.') //false
isRaining = false

isRaining
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')

//windows methods
//alert('Welcome to day 3!')

//prompt
let promptNum = ('Enter number','number goes here')
console.log(promptNum)

//confirm
//const agree = confirm('Are you sure you like to delete? ')
//console.log(agree) // result will be true or false based on what you click on the dialog box

//date objects
const now = new Date()
console.log(now) //Tue Dec 19 2023 15:56:18 GMT-0600 (Central Standard Time)

//lets get the full year!
console.log(now.getFullYear()) //2023
//month
console.log(now.getMonth()) // 11, because the month is December,  month(0-11)
console.log(now.getDate()) // 19, because the day of the month is 19th,  day(1-31)
console.log(now.getDay()) // 2, because the day is Tuesday which is the 3rd day
//Starts at Sunday 0

console.log(now.getHours()) // 15
console.log(now.getMinutes()) // 58
console.log(now.getSeconds()) // 34

//getting unix time
console.log(now.getTime()) //number of seconds passed from January 1, 1970 to const now

//this also gets unix time
const allSeconds = Date.now()
console.log(allSeconds) 


const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) 

