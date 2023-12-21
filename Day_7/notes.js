console.log('Day 7 - Functions')

//we can make a declaratiion function, expression function, anonymous function, arrwo function

//function without parameter
function notesAddTwoNumbers(){
    let num1 = 10
    let num2 = 20
    let sum = num1 + num2
    console.log(sum)
}

//return a value
function notesAddTwoNumbersReturn(){
    let num1 = 10
    let num2 = 20
    let sum = num1 + num2
    return sum
}

notesAddTwoNumbers()
console.log(notesAddTwoNumbersReturn())

//with a parameter
function notesAreaOfCircle(r){
    let area = Math.PI * r * r
    return area
}

console.log(notesAreaOfCircle(5))

//multiple params

function notesSumTwoNumbers(numOne, numTwo){
    return (numOne+numTwo)
}
console.log(notesSumTwoNumbers(2,4))

//undetermined num of params
function notesSumAllNums() { //note how there is no parameters
    let sum = 0
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i] // stored in arguments array
    }
    return sum
}
console.log(notesSumAllNums(1,2,3,4,5))
console.log(notesSumAllNums(13,53,364,634,234))

//how about in an arrow function?
const arrSumAllNums = (...args) =>{
    //we have to use the spread operator which is ...
    console.log(args)
    let sum = 0
    for (const element of args){
        sum+= element 
    }
    return sum
}

console.log(arrSumAllNums(1,2,3,4))

//Anonymous Function
const arrAnonymousFun = function(){
    console.log('I am an anonymous function and my value is stored in arrAnonymousFun')
}
arrAnonymousFun()
//function without a name

//Expression Function
//they are anonymous funs, except they return
const notesSquare = function(n){
    return n *n
} 
console.log(notesSquare(6))

//Self Invoking Functions
//anonymous funcs which do not need to be called to return a value
let notesSquaredNum = (function(n){
    return n*n
})(10)

console.log(notesSquaredNum) //note how we did not need to use parentheses

//we saw an arrow function earlier
const arrSquareArrow = n => n * n  // if its just one line we can write it like this
console.log(arrSquareArrow(6))


//default params
function notesGreetings(name = 'Arden'){
    console.log(`${name}, welcome back to 30 days of JavaScript!`)
}
notesGreetings()
notesGreetings('Peter')

//Let us see how we write the above functions with arrow functions
const notesArrowGreentings = (name = 'Arden') => console.log(`${name}, welcome back to 30 days of JavaScript!`)
notesArrowGreentings()
notesArrowGreentings('Peter')
