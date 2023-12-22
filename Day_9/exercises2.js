console.log('Day 9 - Exercises 2')

//Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPrices = products.filter(element => hasValue(element)).reduce((acc,cur)=> acc+ cur.price,0)
console.log(totalPrices)

//Find the sum of price of products using only reduce reduce(callback))
const totalPricesReduce = products.reduce((acc, cur) => 
{ 
    if( cur.price >= 0 && typeof cur.price ==='number') { 
        return acc+ Number(cur.price)}
    return acc }
    , 0)
console.log(totalPricesReduce)

//Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
function categorizeCountries(countries){
    let categorizedCountries = countries.filter(country =>{
        return country.toLowerCase().includes("ia") || country.toLowerCase().includes("island") || country.toLowerCase().includes("land") || country.toLowerCase().includes("stan")
    })

    return categorizedCountries
}
console.log(categorizeCountries(countries))

//Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
const getStartingLetters = arr => {
    const occurences = arr
      .reduce((acc, a) => {
        const startingLetter = a[0]
        acc[startingLetter] = ( acc[startingLetter] || 0 ) + 1
        return acc
      }, {})
    
    return Object
      .keys(occurences)
      .sort()
      .map(letter => ({letter, count: occurences[letter]}))
  }
console.log(getStartingLetters(countries))

//Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirstTenCountries(countries){
    let newArr = new Array()
    newArr = countries.map(country => {
        if (newArr.length <10){
            return country;
        }
    })
    
    return newArr
}
console.log(getFirstTenCountries(countries))

//Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries(countries){
    let newArr = new Array()
    newArr = countries.map(country => {
        if (newArr.length <10){
            return country;
        }
    })
    length = 10
    if(newArr.length<10){
        length = newArr.length
    }
    const lastArr = newArr.reverse().slice(0,length)
    return lastArr
}
console.log(getLastTenCountries(countries))

//Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
const allCountryLetters = (getStartingLetters(countries))
allCountryLetters.sort((a,b)=>{
    if(a.count > b.count) return -1
    if(a.count < b.count) return 1
    return 0
})

console.log(allCountryLetters[0])