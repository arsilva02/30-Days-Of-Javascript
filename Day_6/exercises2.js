console.log('Day 6 - Exercises 2')

//Develop a small script which generate any number of characters random id:

let numOfChars = Math.floor(Math.random() * 25)
const ranUniqueID = Array ()
for(i=0;i<numOfChars;i++){
    ranUniqueID[i] = characters.charAt(Math.floor(Math.random() * characters.length))
}
console.log(ranUniqueID.join(""))

//Write a script which generates a random hexadecimal number.
const hexRef = '0123456789abcdef'
const hexGen = Array()
for(i=0;i<6;i++){
    hexGen[i] = hexRef.charAt(Math.floor(Math.random() * hexRef.length))
}
console.log('#',hexGen.join(""))

//Write a script which generates a random rgb color number.
const rbg = Array()

for(i=0;i<3;i++){
    rbg[i] = (Math.floor(Math.random() * 255))
}
console.log('rgb(',rbg.join(","),')')

//Using the above countries array, create an array for countries length'.
const cntryLen = Array ()

for (i = 0; i<countries.length;i++){
    cntryLen[i] = countries[i].length
}
console.log(cntryLen)

//Use the countries array to create the following array of arrays:

const arrysOfCntry = Array()

for (i = 0; i<countries.length;i++){
    let cntryName = countries[i]
    let cntryCode = cntryName.slice(0,3).toUpperCase()
    arrysOfCntry[i] = [cntryName, cntryCode, cntryLen[i]]
}

for (const cntryIndex of arrysOfCntry){
    console.log(cntryIndex)
}
//In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array.
// If there is no country containing the word 'land', print 'All these countries are without land'.

const landArr = Array ()
i = 0
for (const cntryIndex of arrysOfCntry){
    if(cntryIndex[0].includes('land')!=0){
        landArr[i] = cntryIndex[0]
        i++

}
}
if(landArr.length!== 0){
console.log(landArr)} else {console.log( 'All these countries are without land')}

//In above countries array, check if there is a country or countries end with a substring 'ia'. 
//If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

const iaArr = Array ()
const iaSearch = Array ()
i = 0
for (const cntryIndex of arrysOfCntry){
    if(cntryIndex[0].endsWith('ia')!=0){
        iaArr[i] = cntryIndex[0]
        iaSearch[i] = cntryIndex
        i++
}
}
if(iaArr.length!== 0){
console.log(iaArr)} else {console.log( 'These are countries ends without ia')}


//Using the above countries array, find the country containing the biggest number of characters.
let biggestNum = iaSearch[0][2]
let biggestCountry = iaSearch[0][0]
for (const iaIndex of iaSearch){
    if(iaIndex[2]>= biggestNum){
        biggestNum = iaIndex[2]
        biggestCountry = iaIndex[0]
}
}
console.log(biggestCountry)

//Using the above countries array, find the country containing only 5 characters.
i = 0
const fiveArr = Array ()

for (const cntryIndex of arrysOfCntry){
    if(cntryIndex[0].length===5){
        fiveArr[i] = cntryIndex[0]
        i++
}
}console.log(fiveArr)


//Find the longest word in the webTechs array
let longestWTArr = 0
for (const wtIndex of webTechs){

    if(wtIndex.length >= webTechs[longestWTArr].length){
        longestWTArr = webTechs.indexOf(wtIndex)
}
}
console.log(webTechs[longestWTArr])

//Use the webTechs array to create the following array of arrays:

const arrysWT = Array()

for (i = 0; i<webTechs.length;i++){
    let wtName = webTechs[i]
    let wtLen = webTechs[i].length
    arrysWT[i] = [wtName, wtLen]
}

for (const wtIndx of arrysWT){
    console.log(wtIndx)
}

//An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

let mernAcro = ''
for (const item of mernStack){
    mernAcro += item[0]
}
console.log(mernAcro)

//Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for (const item of webTechs){
    console.log(item)
}

//This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruits = ['banana', 'orange', 'mango', 'lemon'] 
const newFruits = Array ()
for (i = fruits.length-1; i >= 0; i--){
    newFruits.push(fruits[i])
}

for (i = 0; i < fruits.length; i++){
    fruits[i] = (newFruits[i])
}

console.log(fruits)
 //Print all the elements of array as shown below.

 const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

let fullStackStr =''
for (const item of fullStack){
    for(const program of item){
        fullStackStr += (program+'\n')
    }
}    console.log(fullStackStr)
