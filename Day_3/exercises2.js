console.log('Exercises - 2')

//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

let base = prompt('Enter base:')
let height = prompt('Enter height:')
console.log('The area of the triangle is',base * height * .5)

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

let a = Number(prompt('Enter side a:'))
let b = Number(prompt('Enter side b:'))
let c = Number(prompt('Enter side c:'))
console.log('The perimeter of the triangle  is',a+b+c)


//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = Number(prompt('Enter length of rectangle'))
let width = Number(prompt('Enter width of rectangle'))
console.log('The area of the rectangle  is',length * width, '\nThe perimeter is',2*(length+width))

//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

 let radi = Number(prompt('Enter circle radius'))
 console.log('The area of the circle  is',radi * radi * 3.14, '\nThe circumference  is',2*3.14*radi)



 //Calculate the slope, x-intercept and y-intercept of y = 2x -2
 let slope = 2
 let yInt = (2*0) - 2
 let xInt = 0 + 2

 //Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let mSlope = (10-2)/(6-2)

//Compare the slope of above two questions.

let compSlope = (slope >= mSlope)
compSlope
    ? console.log(`${slope} is greater than or equal to ${mSlope}`)
    :console.log(`${slope} is less than ${mSlope}`)

//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let quadX = -3 //i forgot about foil and this was my first try, im so happy
console.log(quadX**2 +6*quadX + 9)

//Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hoursWorked = Number(prompt('Enter hours:'))
let ratePerHour = Number(prompt('Enter rate per hour:'))
console.log(`Your weekly earning is`, hoursWorked*ratePerHour)

//If the length of your name is greater than 7 say, your name is long else say your name is short.
let myName = 'Arden'
let nameLength = myName.length > 7
nameLength
    ?console.log('Your name is long.')
    :console.log('Your name is short.')

//Compare your first name length and your family name length and you should get this output.
let myLastName = 'Silva'
let nameComp = myLastName >= myName
nameLength
    ?console.log(`Your first name, ${myName} is shorter or equal in length than your family name, ${myLastName}`)
    :console.log(`Your first name, ${myName} is longer in length than your family name, ${myLastName}`)
//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 21
let yourAge = 20
let ageComp = yourAge >= myAge
nameLength
    ?console.log(`You are older or the same age as me!`)
    :console.log(`I am`, myAge-yourAge,'years older than you.')


//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let birthyear = Number(prompt('Enter birth year:'))
let rightNow = new Date()

let thisYear = rightNow.getFullYear()
let is18 = birthyear <= thisYear-18
is18
    ?console.log('You are',thisYear-birthyear,'. You are old enough to drive.')
    :console.log('You are',thisYear-birthyear,'. You will be allowed to drive after',18-(thisYear-birthyear),'years')

//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let yearsLived = Number(prompt('Enter number of years you live:'))
console.log(`You lived`, yearsLived*365*24*60*60,'seconds.')


//Create a human readable time format using the Date time object
let yearNow = rightNow.getFullYear()
let monthNow = rightNow.getMonth()+1
let dateNow = rightNow.getDate()
let hourNow = rightNow.getHours()
let minuteNow = rightNow.getMinutes()

console.log(`${yearNow}-${monthNow}-${dateNow} ${hourNow}:${minuteNow}`)
console.log(`${dateNow}-${monthNow}-${yearNow} ${hourNow}:${minuteNow}`)
console.log(`${dateNow}/${monthNow}/${yearNow} ${hourNow}:${minuteNow}`)