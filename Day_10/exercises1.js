console.log('Exercises 1 - Day 10')

// create an empty set
const emptySet = new Set()
console.log(emptySet)

//Create a set containing 0 to 10 using loop
const tenSet = new Set()
for(i = 0; i<=10;i++){
    tenSet.add(i)
}
console.log(tenSet)

//Remove an element from a set
tenSet.delete(0)
console.log(tenSet)

//Clear a set
tenSet.clear()
console.log(tenSet)

//Create a set of 5 string elements from array
const strArray = ['One','Two','Three','Four','Five']
const stringSet = new Set(strArray)
console.log(stringSet)
//Create a map of countries and number of characters of a country
const countries = [['Finland','Finland'.length], ['Sweden','Sweden'.length], ['Norway','Norway'.length]]
const countryMap = new Map(countries)
console.log(countryMap)
