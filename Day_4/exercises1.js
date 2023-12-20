console.log('Exercises - 1')

//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:
//'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let userAge = Number(prompt('Enter your age: '))

if (userAge < 18)
{
    console.log('You are left with', 18-userAge,'years to drive.')
}
else{
    console.log('You are old enough to drive.')
}

//Compare the values of myAge and yourAge using if … else.
// Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
myAge = 21

if(userAge > myAge){
    console.log('You are',userAge-myAge,'years older than me.')
} else if (userAge < myAge) {
    console.log('I am',myAge-userAge,'years older than you.')
} else{
    console.log('We are the same age.')
}

//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
let a = Number(prompt('Enter var a: '))
let b = Number(prompt('Enter var b: '))

let aGreater = a > b

if(aGreater){console.log('a is greater than b')}
else{console.log('b is greater than/equal to a')}

aGreater
    ? console.log('a is greater than b')
    : console.log('b is greater than/equal to a')

//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let evenNum = Number(prompt('Enter a number: '))

let isEven = (evenNum%2) == 0
isEven
    ? console.log(`${evenNum}is an even number`)
    : console.log(`${evenNum} is an odd number`)