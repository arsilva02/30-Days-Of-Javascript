//Day 2 - data types
//Two types: primitive and non primitive or OBJECTS

//Primitive:
//numbers, strings, bools, null, undefined, symbol (a unique value that can be generated by Symbol constructor)
//non: objects and arrays


//once a primitve data type is created we cannot modify it
let word = 'Javascript'
console.log(word)
word[0] = 'Y'
console.log(word)

//Strings are immutable


//how about numbers?
let numOne = 3
let numTwo = 3
console.log(numOne == numTwo)      // true
numTwo = 4
console.log(numOne == numTwo)      // false
//the number changed!


//lets move onto non primitive data types like arrays
let nums = [1,2,3]
console.log(nums)
nums[0] = 10
console.log(nums)
//it changed!
//it doesnt show it changing on the console though

let numbers = [10, 2, 3]
console.log(nums == numbers) // false, lets not compare arrays
//this is because they are references to a location in memory
//they are only equivalent if they refer to the same place

let newNumbers = nums
console.log(nums == newNumbers) // this is true!

//MATH OBJECT

//we can use math for a lot of methods

const PI = Math.PI
console.log(PI)

//lets do some rounding
console.log(Math.round(PI))                // 3 to round values to the nearest number

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 rounding down

console.log(Math.ceil(PI))                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)


// Let us  create random number between 0 to 10

const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10, 11 is excluded
console.log(num)

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)


//Strings
//lets conncatanate
let space = ' '           // an empty space string
let firstName = 'Arden'
let lastName = 'Silva'
let fullName = firstName + space + lastName // concatenation, merging two string together.
console.log(fullName);

//we can mix vars and strings

fullName = firstName +' ' + lastName + '... Again!'
console.log(fullName);



//how about a paragraph?
const paragraph = "My name is Arden Silva. I live in Austin, Texas. \
I am a student at the University of Texas at Austin, class of 2024" //the above backslash is to breakup to lines
console.log(paragraph)


console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises') //tabs
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')


//template strings
let a = 2
let b = 3
console.log(`The sume of ${a} and ${b} is ${a+b}`)
//like fstrings in python
//note that you need to use backtics

//String methods
let js = 'JavaScript'
console.log(js.length)//10

console.log(js[4]) //accessing the S
console.log(js.toUpperCase())
console.log(js.toLowerCase())

//string slicing:
console.log(js.substring(0,4)) //note that the last number is exclusive while first is inclusive

let string = '30 Days Of JavaScript'

console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]
console.log(string) //the original string is not changed though


let trailingString = '   30 Days Of JavaScript   '
console.log(trailingString)
console.log(trailingString.trim(' '))

//see if a string contains

console.log(string.includes('Days'))     // true
console.log(string.includes('days'))     // false - it is case sensitive!

//replacing
console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python

//charAt(): Takes index and it returns the value at that index
console.log(string.charAt(3))  

//charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index
console.log(string.charCodeAt(3))        // D ASCII number is 68

//indexOf shows where a substring exists
//if does not exist it return -1
console.log(string.indexOf('Days'))       // 3
console.log(string.indexOf('Python'))     // -1


//lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1
console.log(string.lastIndexOf('a'))

//concatanating
let cityState = 'Austin'
console.log(cityState.concat(", Texas"))//can take multiple strings seperated by commas

//startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
console.log(string.startsWith('Love'))   // true
console.log(string.startsWith('30'))   // true
console.log(string.startsWith('30 d'))   // false, case sensitive

//ends with
console.log(string.endsWith('JavaScript')) //true
console.log(string.endsWith('Javascript')) //false, case sensitive

//search: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.
console.log(string.search('3'))
console.log(string.search(/javascript/gi))  // g-means to search in the whole text, i - case insensitive

//matching
let patternOne = /javascript/     // with out any flag
let patternTwo = /javascript/gi   // g-means to search in the whole text, i - case insensitive
console.log(string.match(patternOne)) //returns null
console.log(string.match(patternTwo)) // returns a list
console.log(string.match(' ')) // returns a list


let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/
// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere
console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

//repeating
console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove



//data types!
//casting
let newNum = '10'
let numInt = parseInt(newNum)
console.log(numInt) // 10

numNumber = Number(num)
console.log(numInt) // 10

newNumInt = +newNum

console.log(newNumInt)

//string to float
let floatNum = '9.81'
let numFloat = parseFloat(floatNum)
console.log(numFloat) // 9.81

numFloat = Number(floatNum)
console.log(numFloat) // 9.81

numFloat = +floatNum
console.log(numFloat) // 9.81

//float to int
let floatIntNum = 9.81
let intNum = parseInt(floatIntNum)

console.log(intNum) // 9