console.log('Exercises - 2')

//Write a code which can give grades to students according to theirs scores:

let grades = Number(prompt('Enter your grades:'))

switch(true)
{
    case grades >= 80:
        console.log('Your grade is an A.')
        break

    case grades >= 70:
        console.log('Your grade is a B')
        break

    case grades >= 60 :
        console.log('Your grade is a C')
        break

    case grades >= 50 :
        console.log('Your grade is a D')
        break
    
    default:
        console.log('Your grade is an F')
        break

}

//Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
let month = prompt('Enter the name of the month')

month = month.toLowerCase()

if(month == 'september' || month == 'october' || month == 'november' )
{
    console.log('It is Autumn.')
} else if(month == 'december' || month == 'january' || month == 'february' )
{
    console.log('It is Winter.')
} else if(month == 'march' || month == 'april' || month == 'may' )
{
    console.log('It is Spring.')
} else{
    console.log('It is Summer.')
}

//Check if a day is weekend day or a working day. Your script will take day as an input.
let day  = prompt('What is the day today?')
day = day.toLowerCase()
dayNormalized = day.charAt(0).toUpperCase() + day.slice(1) //capitalizes the first letter

if(day == 'saturday' || day == 'sunday')
{
    console.log(`${dayNormalized} is a weekend.`)
}
else {
    console.log(`${dayNormalized} is a working day.`)

}