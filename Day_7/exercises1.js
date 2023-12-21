console.log('Day 7 - Exercises 1')

//Declare a function fullName and it print out your full name.
function fullName (){
    console.log('Arden Silva')
}
fullName()

//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function paramFullName (firstName, lastName){
    return(`${firstName} ${lastName}`)
}


console.log(paramFullName('Arden','Silva'))

//Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers (numOne, numTwo){
    sum = numOne + numTwo
    return(sum)
}
console.log(addNumbers(2,5))

//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle (length, width){
    return (length*width)
}
console.log(areaOfRectangle(10,10))

//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle (length, width){
    return (2* (length+width))
}
console.log(perimeterOfRectangle(10,10))

//A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism (length, width, height){
    return (length*width*height)
}
console.log(volumeOfRectPrism(10,10,10))

//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle (r){
    area = Math.PI * r * r 
    return (area)
}
console.log(areaOfCircle(10))

//Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle (r){
    area = Math.PI * r * 2
    return (area)
}
console.log(circumOfCircle(10))

//Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density (mass, volume){
    return (mass/volume)
}
console.log(density(20,10))

//Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving 
//object, speed.
function speed (distance, time){
    return (distance/time)
}
console.log(speed(200,10))

//Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight (mass){
    totalWeight = mass * 9.81
    return (totalWeight)
}
console.log(weight(20))

//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit (oC){
    oF = (oC * (9/5)) + 32
    return (oF)
}
console.log(convertCelsiusToFahrenheit(20))

//Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. 
//BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese 
//based the information given below.

function bmi (weight,height){
    bmiCalc = weight / (height*height)
    return bmiCalc
}
function checkBMI(bmiCalc){
    if(bmiCalc < 18.5){
        return ('Underweight')
    } else if(bmiCalc < 24.9){
        return ('Normal weight')
    } else if (bmiCalc < 29.9){
        return('Overweight')
    } else {return('Obese')}
}

let bmiHeight = 3.5
let bmiWeight = 250
let bmiIndex = bmi(bmiWeight, bmiHeight)
console.log(`A person with a height of ${bmiHeight} and a weight of ${bmiWeight} has a BMI of ${bmiIndex}. According to the BMI index, they are ${checkBMI(bmiIndex)}`)

//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason (month){
    month = month.toLowerCase()
    if(month == 'september' || month == 'october' || month == 'november' )
    {
        return('Autumn')
    } else if(month == 'december' || month == 'january' || month == 'february' )
    {
        return('Winter')
    } else if(month == 'march' || month == 'april' || month == 'may' )
    {
        return('Spring')
    } else{
        return('Summer')
    }
}
let month = 'May'
console.log(`The month ${month} is in the season ${checkSeason(month)}`)

//Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(numOne, numTwo, numThree){
    let max  = numOne
    if(max < numTwo){
        max = numTwo
    }
    if(max<numThree){
        max = numThree
    }
    return max
}

let maxX = 2435
let maxY = 2345
let maxZ = 24345
console.log(`The max of ${maxX}, ${maxY}, and ${maxZ} is ${findMax(maxX,maxY,maxZ)}`)
