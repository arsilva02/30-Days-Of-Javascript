console.log('Day 5 - Exercise 3')

//Sort the array and find the min and max age

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let ageLen = ages.length
ages.sort()
console.log(ages)
let minAge = ages[0]
let maxAge = ages[ageLen-1]
console.log(ages)
console.log(minAge)
console.log(maxAge)

//Find the median age(one middle item or two middle items divided by two)

let evenOrOdd = ageLen % 2
if (evenOrOdd !== 0){
    let medianAge = ages[ageLen/2]
    console.log(medianAge)
} else {
    let midAge = ageLen/2
    let lowerAge = ages[midAge]
    let higherAge = ages[midAge + 1]
    let medianAge = (lowerAge+higherAge)/2
    console.log(medianAge)
}


//Find the average age(all items divided by number of items)
const average = (ages[0]+ages[1]+ages[2]+ages[3]+ages[4]+ages[5]+ages[6]+ages[7]+ages[8]+ages[9])/ageLen;
console.log(average)
//Find the range of the ages(max minus min)
console.log(maxAge-minAge)
//Compare the value of (min - average) and (max - average), use abs() method
console.log(Math.abs(minAge-average))
console.log(Math.abs(maxAge-average))

//1.Slice the first ten countries from the countries array
console.log(countries.slice(0,10))
//Find the middle country(ies) in the countries array
let countryLen = countries.length
evenOrOdd = countryLen % 2
if (evenOrOdd === 0){
    let medianCountry = countries[countryLen/2]
    console.log(medianCountry)
} else {
    let midCon = Math.floor(countryLen/2)
    let lowerCon = countries[midCon]
    let higherCon = countries[midCon + 1]
    console.log(lowerCon,higherCon)
}

//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.


if (evenOrOdd === 0){
    let firstConArray = countries.splice(0,countryLen/2)
    let secondConArray = countries
    console.log(firstConArray)
    console.log(secondConArray)

} else {
    let midCon = Math.ceil(countryLen/2)
    let firstConArray = countries.splice(0,midCon)
    let secondConArray = countries

    console.log(firstConArray)
    console.log(secondConArray)
}

