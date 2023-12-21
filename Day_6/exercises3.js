console.log('Day 6 - Exercises 3')

//Copy countries array(Avoid mutation)
const newCntry = Array()
for (const item of countries){
    newCntry.push(item)
} console.log(newCntry)

//Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const sortedCountries = newCntry
sortedCountries.sort()

console.log(sortedCountries)

//Sort the webTechs array and mernStack array
console.log(webTechs.sort())
console.log(mernStack.sort())
//Extract all the countries contain the word 'land' from the countries array and print it as array
//already did this in 2...


//Find the country containing the hightest number of characters in the countries array
let longestCntryLen = 0
for (const cIndex of countries){

    if(cIndex.length >= countries[longestCntryLen].length){
        longestCntryLen = countries.indexOf(cIndex)
}
}
console.log(countries[longestCntryLen])
//Extract all the countries contain the word 'land' from the countries array and print it as array
//already did this

//Extract all the countries containing only four characters from the countries array and print it as array
const fourArr = Array ()

for (const cntryIndex of countries){
    if(cntryIndex.length===4){
        fourArr.push(cntryIndex)
}
}console.log(fourArr) 

//Extract all the countries containing two or more words from the countries array and print it as array
const twoWordArr = Array ()

for (const cntryIndex of countries){
    if(cntryIndex.includes(' ')){
        twoWordArr.push(cntryIndex)
}
}console.log(twoWordArr) 


//Reverse the countries array and capitalize each country and stored it as an array
const newcntryArr = Array()

for (const cntryIndex of countries){
   newcntryArr.push(cntryIndex.toUpperCase())
} console.log(newcntryArr)