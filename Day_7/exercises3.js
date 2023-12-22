console.log('Day 7 - Exercises 2')


//Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt().
// One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function userIdGeneratedByUser(){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let numOfChars = Number(prompt('Enter number of chars to generate'))
    let numOfIds = Number(prompt('Enter number of IDs to genearte'))
    const allIDs = Array()
    for(i=0;i<numOfIds;i++){
        const uniqueID = Array ()
        for(j=0;j<numOfChars;j++){
            uniqueID[j] = characters.charAt(Math.floor(Math.random() * characters.length))
        }
        allIDs[i] = uniqueID.join("")
    }
   
    return(allIDs)
}

//console.log(userIdGeneratedByUser())

//Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator(){
    const rbg = Array()

    for(i=0;i<3;i++){
        rbg[i] = (Math.floor(Math.random() * 255))
    }
    console.log('rgb(',rbg.join(","),')')
}
rgbColorGenerator()

//Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(){
    let chars = "0123456789abcdef"
    let hex = []
    for (let k = 0; k < 5; k++) {
        hex[k] = "#";
        for (let i = 0; i < 6; i++) {
            hex[k] += chars[Math.floor(Math.random() * chars.length)]
        }
    }
    console.log(hex)
}
arrayOfHexaColors()
//Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(){
    const rgbArr = Array()
    for (j = 0; j< 5;j++){
        const rbg = Array()
        for(i=0;i<3;i++){
            rbg[i] = (Math.floor(Math.random() * 255))
        }
        
        arr = 'rgb('+rbg.join(",")+')'
        rgbArr.push(arr)
    }
        console.log(rgbArr)
}
arrayOfRgbColors()

//Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(rgb){
    let hex = '#' 
    for (letter of rgb){
        let hexLet = letter.toString(16)
        if (hexLet.length == 1){hexLet = 0 + hexLet}
        hex += hexLet
    } return hex
}
console.log(convertHexaToRgb([3,40,40]))

//Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function convertRgbToHexa(hexa){
    let r = parseInt(hexa.slice(0, 2), 16);
    let g = parseInt(hexa.slice(2, 4), 16);
    let b = parseInt(hexa.slice(4, 6), 16); 
    return { r, g, b };
}
console.log(convertRgbToHexa('032828'))


//Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(type, arrLength){
    let chars = "0123456789abcdef"
    let colors = []
    if(type =='rgb'){
        for (k = 0;k<arrLength;k++)
        {
            const rbg = Array()
            for(i=0;i<3;i++){
                rbg[i] = (Math.floor(Math.random() * 255))
                }
                
            arr = 'rgb('+rbg.join(",")+')'
            colors.push(arr)
            }
    } else{

        for (let k = 0; k < arrLength; k++) {
            const hex = Array()
            
            for (let i = 0; i < 6; i++) {
                hex[i] = chars[Math.floor(Math.random() * chars.length)]
            }
            hex.unshift('#')
            newHex = hex.join('')
            colors.push(newHex)}

}    return(colors)

}

console.log(generateColors('rgb',5))
console.log(generateColors('hex',5))

//Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(arr){
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let rand = Math.floor(Math.random() * arr.length - 1)
        if (arr.indexOf(rand) !== -1 && !newArr.includes(arr[rand])) {
            newArr.push(arr[rand])
        }
    }
    return newArr
}
console.log(shuffleArray([1,2,3,4]))

//Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
factorial = (num) => {
    let factorial = 1
    for (let i = num; i > 0; i--) {
        factorial *= i
    }
    return factorial
}
console.log(factorial(4))

//Call your function isEmpty, it takes a parameter and it checks if it is empty or not
isEmpty = (val) => {
    if (val === undefined) {
        return `String is empty`
    } else {
        return `String is not empty`
    }
}
console.log(isEmpty())
console.log(isEmpty('hi'))

//Call your function sum, it takes any number of arguments and it returns the sum.
function sumNums(){
    let sum = 0
    for(const item in arguments){
        sum = sum + Number(item)
    }
    return sum
}
console.log(sumNums(1,2,3,4,5))

//Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
sumOfArrayItems = (arr) => {
    let sum = 0
    for (const item of arr) {
        if (typeof item === "number") {
            sum += item
        } else {
            sum = `Please enter a non string`
        }
    }
    return sum;
}

console.log(sumOfArrayItems([4,5,6]))

//Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
average = (arr) => {
    let sum = 0
    for (const item of arr) {
        if (typeof item === "number") {
            sum += item
        } else {
            sum = `Please enter a non string`
        }
    }
    sum = sum / arr.length 
    return sum
}
console.log(average([4,5,6]))

//Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
modifyArray = (arr) => {
    if (arr.length >= 6) {
        for (let i = 0; i < arr.length; i++) {
            if (i = 5) {
                arr[4] = arr[4].toUpperCase()
            }
        }
        return arr
    } else {
        return `Item not found`
    }
}
console.log(modifyArray([1, 2, 3]))
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']))
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']))


//Write a function called isPrime, which checks if a number is prime number.
isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0 && num > 1) {
            return `${num} is a prime number`
        } else {
            return `${num} is not a prime number`
        }
    }
    return `${num} is not a prime number`
}
console.log(isPrime(4))
console.log(isPrime(5))
console.log(isPrime(1))

//Write a functions which checks if all items are unique in the array.

//Write a function which checks if all the items of the array are the same data type.

//JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

//Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

//Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array


