console.log('Day 14- Notes')
/*
JS is a loosely typed language
you can do try catch finally blocks
error has some keys
*/

try{
    let divZero = 10/ zero
} catch(err){
    console.log('Name of error', err.name)
    console.log('Error message', err.message)
} finally {
    console.log('In any case I will be executed')
}

//throw creates a custom error
//throw 42
//throw new Error('Required')

//use this in practice
const throwErrorForNumbers = () => {
    let message
    let x = prompt('Enter a number:')
    try{
        if(x == '') throw 'empty'
        if (isNaN(x)) throw 'not a number'
        x = Number(x)
        if (x < 5) throw 'too low'
        if (x>10) throw 'too high'
    } catch(e){
        console.log(e)
    }
}

throwErrorForNumbers()

//error types:
//referenceError: illegal ref, a variable has not been declared
//console.log(fakeVar) //Uncaught ReferenceError: fakeVar is not defined

//syntax
// let badSquare = 2 x 2 /yntaxError: Unexpected identifier 'x
//console.log(badSquare)

//TypeError: A type error has occurred
let bad10 = 10
console.log(bad10.toLowerCase()) //bad10.toLowerCase is not a function