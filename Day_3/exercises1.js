console.log('Exercises - 1')

// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstN = 'Arden'
let lastN = 'Silva'
let con = 'USA'
let age = 21
let isMarried = false
let currYear = 2023

console.log(typeof firstN)
console.log(typeof lastN)
console.log(typeof con)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof currYear)

//Check if type of '10' is equal to 10
console.log(typeof '10' == typeof 10)//false
//Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10)//false
console.log(parseInt('9.8') === 10)//false

//Write three JavaScript statement which provide truthy value.
let firstT = 'Hello World'
let secondT = 3
let thirdT = true
console.log(firstT && secondT && thirdT) //all three are true

//Write three JavaScript statement which provide falsy value.
let firstF = ''
let secondF = 0
let thirdF = false
console.log(firstF || secondF || thirdF) //all three are false


//5
//true, true, false, false, true, true, false, false, false, true, false
console.log(4 > 3,4 >= 3,4 < 3,4 <= 3,4 == 4,4 === 4,4 != 4,4 !== 4,4 != '4',4 == '4',4 === '4') 


//Find the length of python and jargon and make a falsy comparison statement.
//im not sure what this means... return a false?
console.log(!('python'.length == 'jargon'.length)) //returns false if true

//6
//true, false, true, true, false, true, true, false, true, true,false
console.log(4 > 3 && 10 < 12,4 > 3 && 10 > 12
    ,4 > 3 || 10 < 12,4 > 3 || 10 > 12,!(4 > 3),!(4 < 3),!(false),!(4 > 3 && 10 < 12)
    ,!(4 > 3 && 10 > 12),!(4 === '4'),
    !('python'.includes('on')&&'dragon '.includes('on')) )


let todayDate = new Date()
//What is the year today?
console.log(todayDate.getFullYear())
//What is the month today as a number?
console.log(todayDate.getMonth()+1) //proper number
//What is the date today?
console.log(todayDate.getDate())
//What is the day today as a number?
console.log(todayDate.getDay())
//What is the hours now?
console.log(todayDate.getHours())
//What is the minutes now?
console.log(todayDate.getMinutes())
//Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(todayDate.getTime())
