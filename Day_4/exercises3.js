console.log('Exercises - 3')

//Write a program which tells the number of days in a month.
let userMonth = prompt('Enter a month:')
userMonth = userMonth.toLowerCase()
monthNormalized = userMonth.charAt(0).toUpperCase() + userMonth.slice(1) //capitalizes the first letter

let days = 31

if(userMonth == 'feburary'){
    days = 28
    let usrAnswer = prompt('Is it a leap year? Type yes or no:')
    usrAnswer = usrAnswer.toLowerCase()
    if (usrAnswer == 'yes')
    {
        days += 1
    } 
} 

if(
    userMonth == 'april' || userMonth == 'june' || userMonth == 'september' || userMonth == 'november'
){
    days = 30
}

console.log(`${monthNormalized} has ${days} days.`)
