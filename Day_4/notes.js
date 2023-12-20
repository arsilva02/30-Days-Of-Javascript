console.log('Day 4 Notes')

//condition execution = only gets executed if a certain expression is true
//repetitve - executed as long as certain express is true
//in java there is if, if else, if else if else, switch, ternary operator

let noteNum = 0
if (noteNum > 0)
{
    console.log(`${noteNum} is a positive number`)
} else if (noteNum < 0) {
    console.log(`${noteNum} is a negative number`)
}
else if (noteNum == 0) {
    console.log(`${noteNum} is zero`)
}
else{    console.log(`${noteNum} is not a number`)
}

//works like all other if/else if/ elses in coding

//how about switch?
let weather = 'cloudy'
switch(weather)
{
    case 'rainy':
        console.log('You need a rain coat.')
        break //break is needed to end code running from this indentation

    case 'cloudy':
        console.log('It might be cold, you need a jacket')
        break

    case 'sunny':
        console.log('Go out freely.')
        break

    default: //default val when does not match cases
        console.log('No need for a rain coat.')
}

//we can also use ternary
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')