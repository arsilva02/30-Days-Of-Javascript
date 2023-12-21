console.log('Day 5 - Exercises 1')



//Declare an empty array;
const emptArray = Array()


//Declare an array with more than 5 number of elements
const fiveArray = [21,21.5,'Twenty One',7,3,1]
//Find the length of your array
console.log(fiveArray.length)
//Get the first item, the middle item and the last item of the array
console.log(fiveArray[0])
console.log(fiveArray[fiveArray.length-1])
console.log(fiveArray[Math.floor((fiveArray.length-1)/2)])
//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
//we can just use the fiveArray

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon']
//Print the array using console.log()
console.log(itCompanies)
//Print the number of companies in the array
let numOfCompanies = itCompanies.length
console.log(`There are ${numOfCompanies} IT companies in the array.`)
//Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[numOfCompanies-1])
console.log(itCompanies[Math.floor((numOfCompanies-1)/2)])
// /Print out each company
console.log(itCompanies.slice())
//Change each company name to uppercase one by one and print them out
itCompanies[0] = itCompanies[0].toUpperCase()
console.log(itCompanies[0])
itCompanies[1] = itCompanies[1].toUpperCase()
console.log(itCompanies[1])
itCompanies[2] = itCompanies[2].toUpperCase()
console.log(itCompanies[2])
itCompanies[3] = itCompanies[3].toUpperCase()
console.log(itCompanies[3])
itCompanies[4] = itCompanies[4].toUpperCase()
console.log(itCompanies[4])
itCompanies[5] = itCompanies[5].toUpperCase()
console.log(itCompanies[5])
itCompanies[6] = itCompanies[6].toUpperCase()
console.log(itCompanies[6])

itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon']

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.slice(0,numOfCompanies-1).join(', '),'and',itCompanies[numOfCompanies-1], 'are big IT companies') 

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let compSearch = 'Netflix'
let compExists = itCompanies.includes(compSearch)
compExists
  ? console.log(`${compSearch} exists in the IT company array.`)
  : console.log(`${compSearch} is not found in the IT company array.`)

//Filter out companies which have more than one 'o' without the filter method
const newComp = itCompanies.slice(3,numOfCompanies)
console.log(newComp)

//Sort the array using sort() method
itCompanies.sort()
console.log(itCompanies)
//Reverse the array using reverse() method
itCompanies.reverse()
console.log(itCompanies)

//Slice out the first 3 companies from the array
const firstThree = itCompanies.slice(0,3)
console.log(firstThree)
//Slice out the last 3 companies from the array
const lastThree = itCompanies.slice(numOfCompanies-3,numOfCompanies)
console.log(lastThree)

//Slice out the middle IT company or companies from the array
const middleCompany = itCompanies.slice(3,4)
console.log(middleCompany)

//Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies)
//Remove the middle IT company or companies from the array
itCompanies.splice(2,4)
console.log(itCompanies)
//remove last
itCompanies.pop()
console.log(itCompanies)
//Remove all IT companies
itCompanies.splice(0,1)
console.log(itCompanies)
