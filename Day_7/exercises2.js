console.log('Day 7 - Exercises 2')

//Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(x=0,a=0,b=1,c=0){
    let eq = ((a * x) - c)/b
    return eq
}
console.log(solveLinEquation(4,15,2,2))

//Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a = 0,b=0,c=0){
    if(a === 0 && b === 0 && c ===0){
        console.log(0)
    } else{
    var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)
    var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)
    console.log (result, result2)}

}
solveQuadEquation(1,7,12)
solveQuadEquation()

//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr){
    for(let item of arr){
        console.log(item)
    }
}
printArray([4,43,5,6,4,3])

//Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime(){
    let time = new Date()
    let tYear = time.getFullYear()
    let tMonth = time.getMonth()+1
    let tDate = time.getDate()
    let tHour = time.getHours()
    let tMinute = time.getMinutes()
    
    let tHourSingle = tHour < 10
    let tMinuteSingle = tMinute < 10
    
    tHourSingle
        ? tMinuteSingle
            ? console.log(`${tMonth}-${tDate}-${tYear} 0${tHour}:0${tMinute}`)
            : console.log(`${tMonth}-${tDate}-${tYear} 0${tHour}:${tMinute}`)
        : tMinuteSingle
            ? console.log(`${tMonth}-${tDate}-${tYear} ${tHour}:0${tMinute}`)
            : console.log(`${tMonth}-${tDate}-${tYear} ${tHour}:${tMinute}`)   

}
showDateTime()

//Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x,y){
    let a = x
    let b = y

    console.log(b,a)
}

let sX = 3
let sY = 4
console.log(sX,sY)
swapValues(sX,sY)

//Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr){
    const newArr = new Array()
    for (item of arr){
        newArr.unshift(item)
    }
    return newArr
}


const rArr =  ['Banana', 'Orange','Mango','Apple']
console.log(rArr)
console.log(reverseArray(rArr))

//Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr){
    const newArr = new Array()
    for (item of arr){
        newItem = item.toUpperCase()
        newArr.push(newItem)
    }
    return newArr
}
console.log(rArr)
console.log(capitalizeArray(rArr))

//Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(newItem, arr){
    const newArr = new Array()
    for (item of arr){
        newArr.push(item)
    }
    newArr.push(newItem)
    return newArr
}
console.log(rArr)
console.log(addItem('Strawberry',rArr))

//Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(itemIndex, arr){
    const newArr = new Array()
    for (item of arr){
        if(arr.indexOf(item) === itemIndex){
            continue
        }else {
        newArr.push(item)}
    }
    return newArr
}
console.log(rArr)
console.log(removeItem(1,rArr))

//Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(){
    sum = 0
    for (item of arguments){
        sum += item
    } 
    return sum
}
console.log(sumOfNumbers(3,4,5,6))
console.log(sumOfNumbers(4,3,2,5,12,34,5))

//Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(){
    sum = 0
    for (item of arguments){
        if(item %2 !== 0){
        sum += item}
    } 
    return sum
}
console.log(sumOfOdds(3,4,5,6))
console.log(sumOfOdds(4,3,2,5,12,34,5))

//Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(){
    sum = 0
    for (item of arguments){
        if(item %2 === 0){
        sum += item}
    } 
    return sum
}
console.log(sumOfEven(3,4,5,6))
console.log(sumOfEven(4,3,2,5,12,34,5))

//Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(num){
    evenSum = 0
    oddSum = 0
    for (let i = 0; i <= num; i++){
        if(i %2 === 0){
            evenSum += 1} else {oddSum += 1}
    } 
    return(`The number of odds are ${oddSum}.\nThe number of evens are ${evenSum}`)
}
console.log(evensAndOdds(100))
console.log(evensAndOdds(75))

//Write a function which takes any number of arguments and return the sum of the arguments
//already did

//Writ a function which generates a randomUserIp.
function generateIP (){
    let first = Math.floor(Math.random() * 255);
    let second = Math.floor(Math.random() * 255);
    let third = Math.floor(Math.random() * 255);
    let fourth = Math.floor(Math.random() * 255);
    return(`${first}:${second}:${third}:${fourth}`)
}
console.log(generateIP())

//Write a function which generates a randomMacAddress
function randomMacAddress(){
    const hexDigits = "0123456789ABCDEF"
    var macAddress =''
    for (var i = 0; i < 6; i++){
        macAddress+=hexDigits.charAt(Math.round(Math.random() * 15))
        macAddress+=hexDigits.charAt(Math.round(Math.random() * 15))
        if (i != 5) { macAddress += ":"}
    }
    return macAddress
}
console.log(randomMacAddress())

//Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
function randomHexaNumberGenerator(){
    const hexRef = '0123456789abcdef'
    const hexGen = Array()
    for(i=0;i<6;i++){
        hexGen[i] = hexRef.charAt(Math.floor(Math.random() * hexRef.length))
    }
    hexCode = '#'+ hexGen.toString()
    hexCode = hexCode.replace(/,/gi,"")
    return hexCode
}
console.log(randomHexaNumberGenerator())

//Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator(){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const uniqueID = Array ()
    for(i=0;i<7;i++){
        uniqueID[i] = characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return(uniqueID.join(""))
}
console.log(userIdGenerator())


