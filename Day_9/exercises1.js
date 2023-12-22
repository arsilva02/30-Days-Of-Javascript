console.log('Day 9 - Exercises 1')

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//Explain the difference between forEach, map, filter, and reduce.
console.log('For Each: iterates through each element of array')
console.log('map: iterates through each element of array and modifies it')
console.log('filter: iterates through each element of array and returns an array of elements that satisfied conditions')
console.log('reduce: iterates through each element of array and returns a single value based on what the accumulator started out and what the current did')

//Define a callback function before you use it in forEach, map, filter or reduce.
const logCallback = (n) => {
    console.log(n)
}
const upperCallback = (n) => {
    return(n.toUpperCase())
}
const lengthCallback = (n) => {
    return(n.length)
}
const squareCallback = (n) => {
    return(n*n)
}
const getPriceCallback = (n) =>{
    return(n.price)
}
const landCallback = (n) => {
    return(n.toLowerCase().includes('land'))
}
const sixCharCallback = (n) => {
    return(n.length === 6)
}
const sixCharOrMoreCallback = (n) => {
    return(n.length >= 6)
}
const startsWithE = (n) => {
    return(n.startsWith('E'))
}
const hasValue = (n) => {
    return(typeof n.price === 'number')
}
//Use forEach to console.log each country in the countries array.
countries.forEach(element => logCallback(element))
//Use forEach to console.log each name in the names array.
names.forEach(element => logCallback(element))
//Use forEach to console.log each number in the numbers array.
numbers.forEach(element => logCallback(element))

//Use map to create a new array by changing each country to uppercase in the countries array.
const countriesUpper = countries.map(element => upperCallback(element))
console.log(countriesUpper)

//Use map to create an array of countries length from countries array.
const countriesLength = countries.map(element => lengthCallback(element))
console.log(countriesLength)

//Use map to create a new array by changing each number to square in the numbers array
const numbersSqure = numbers.map(element => squareCallback(element))
console.log(numbersSqure)

//Use map to change to each name to uppercase in the names array
const namesUpper = names.map(element => upperCallback(element))
console.log(namesUpper)

//Use map to map the products array to its corresponding prices.
const productPrices = products.map(element => getPriceCallback(element))
console.log(productPrices)

//Use filter to filter out countries containing land.
const countriesLand = countries.filter(element => landCallback(element))
console.log(countriesLand)

//Use filter to filter out countries having six character.
const countriesSix = countries.filter(element => sixCharCallback(element))
console.log(countriesSix)

//Use filter to filter out countries containing six letters and more in the country array.
const countriesSixOrMore = countries.filter(element => sixCharOrMoreCallback(element))
console.log(countriesSixOrMore)

//Use filter to filter out country start with 'E';
const countriesStartWithE = countries.filter(element => startsWithE(element))
console.log(countriesStartWithE)

//Use filter to filter out only prices with values.
const productsWithValue = products.filter(element => hasValue(element))
console.log(productsWithValue)

//Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr){
    const strings = new Array()
    arr.forEach(function(el){
        if(typeof el === 'string'){
            strings.push(el)
        }
    })

    return strings
}

const stringsTest = [3,4,'hi','3',3,true]
console.log(getStringLists(stringsTest))

//Use reduce to sum all the numbers in the numbers array.
const numSum = numbers.reduce((acc, curr)=> acc+curr,0)
console.log(numSum)

//Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const cntrySum = countries.reduce((acc, curr)=> acc+',' + curr) + ' are North European countries'
console.log(cntrySum)

//Explain the difference between some and every
//every is like the and, all has to be true
//some is like or, only some need to be true

//Use some to check if some names' length greater than seven in names array
const someGreaterThanSeven = names.some((n) => n.length > 7)
console.log(someGreaterThanSeven)

//Use every to check if all the countries contain the word land
const countriesAllLand = countries.every((n) => n.toLowerCase().includes('land'))
console.log(countriesAllLand)

//Explain the difference between find and findIndex.
//find returns the value
//find index returns the index of the array
//Use find to find the first country containing only six letters in the countries array
const firstSixCountry = countries.find((n)=> n.length  === 6  )
console.log(firstSixCountry)

//Use findIndex to find the position of the first country containing only six letters in the countries array
const firstSixCountryIndex = countries.findIndex((n)=> n.length  === 6  )
console.log(firstSixCountryIndex)

//Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const findNorway = countries.findIndex((n)=> n === 'Norway'  )
console.log(findNorway)

//Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const findRussia = countries.findIndex((n)=> n === 'Russia'  )
console.log(findRussia)
