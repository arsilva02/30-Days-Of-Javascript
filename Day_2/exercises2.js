console.log('Exercise - level 2')

//Using console.log() print out the following statement:

let newTxt = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(newTxt)

//Using console.log() print out the following quote by Mother Teresa:
let newTxt2 = `"Love is not patronizing and charity isn't about pity, it is about love. \
Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
console.log(newTxt2)


//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let numCompare = 10
let strCompare = '10'
console.log((typeof numCompare) == (typeof strCompare))          // false
strCompare = Number(strCompare)
console.log((typeof numCompare) == (typeof strCompare))          // true


//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

console.log((numCompare) == ( parseFloat('9.8') ))          // false
let floatCompare = parseInt(Math.round(parseFloat('9.8')))
console.log((numCompare) == ( floatCompare))          // true

//Check if 'on' is found in both python and jargon
let includeStr = 'on'
console.log('python'.includes(includeStr))     // true
console.log('jargon'.includes(includeStr))     // true

//I hope this course is not full of jargon. Check if jargon is in the sentence.

console.log('I hope this course is not full of jargon. '.includes('jargon'))     // true

//Generate a random number between 0 and 100 inclusively.
const firstRandom = Math.floor(Math.random () * 101) 
console.log(firstRandom)
//Generate a random number between 50 and 100 inclusively.
const secondRandom = Math.floor(Math.random() * 51) + 50
console.log(secondRandom)
//Generate a random number between 0 and 255 inclusively.
const thirdRandom = Math.floor(Math.random () * 256) 
console.log(thirdRandom)


//Access the 'JavaScript' string characters using a random number.
let java = 'JavaScript'
let javaLen = java.length //10
const javaRandom = Math.floor(Math.random () * javaLen) 
console.log(java[javaRandom]) 


//Use console.log() and escape characters to print the following pattern.
let para = '1 1 1 1 1 \n\
2 1 2 4 8 \n\
3 1 3 9 27 \n\
4 1 4 16 64\n\
5 1 5 25 125'
console.log(para)

//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sen = 'You cannot end a sentence with because because because is a conjunction'
let because = 'because'
let firstBecause = sen.indexOf(because)
let lastBecause = sen.lastIndexOf(because)
console.log(sen.substring(firstBecause,lastBecause+because.length))