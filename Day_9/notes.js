console.log('Day 9 - Notes')

//Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

//callback - a function that can be passed as a parameter to other function:
const callbackNotes = (n) =>{
    return n**2
}

//function that takes callback
function cubeNote(callbackNotes,n){
    return callbackNotes(n)*(n)
}

console.log(cubeNote(callbackNotes,3))

//returning
// /Higher order functions return function as a value​
//for each uses callback
const numbersNote = [1,2,3,4,5]
const sumArrNote = arr => {
    let sum = 0
    arr.forEach(function(element){
        sum+= element
    })
    return sum
} 
console.log(sumArrNote(numbersNote)) //15


//setting time
    //setInterval
    //setTimeout

function sayHelloNotes() {
    console.log('Hello')
    }
//setInterval(sayHelloNotes, 1000) //prints hellow every second, 1000ms is 1s

//In JavaScript, we use setTimeout higher order function to execute some action at
// some time in the future. The setTimeout global method take a callback function and a duration as a parameter. 
//The duration is in milliseconds and the callback wait for that amount of time.

setTimeout(sayHelloNotes, 2000) // it prints hello after it waits for 2 seconds.

//foreach: iterates an arrays elements, only use with arrays
//already used above

//map: iterate array elements and modify

const namesNotes = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesNotesToUpperCase = namesNotes.map((name) => name.toUpperCase())
console.log(namesNotesToUpperCase)

//fitler: filter out items which fulfill conditions and return new array
const countriesNotes = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]

  //if they contain land
  const countriesContainingLandNotes = countriesNotes.filter((country) =>
    country.includes('land')
  )
  console.log(countriesContainingLandNotes)

  //reduce
  const sumReduceNots = numbersNote.reduce((acc,curr) => acc + curr,0)
  //notes:
  //accumulate (set to 0)
  //current (current index of arr)
  //accumulate + current
  console.log(sumReduceNots)

  //every
  //check if the elements are similar in one aspect
  const areAllStrNotes = namesNotes.every((name) => typeof name ==='string')
  console.log(areAllStrNotes) //true!

  //find: Return the first element which satisfies the condition
const agesNotes = [31,23,54,64,13,43]
const ageNotes = agesNotes.find((ageNotes)=> ageNotes < 20)
console.log(ageNotes) //first is 13

//findIndex
const ageIndexNotes = agesNotes.findIndex((age)=> age < 20)
console.log(ageIndexNotes) //index 4

//some: Check if some of the elements are similar in one aspect. It returns boolean
const areSomeTrueNotes = namesNotes.some((x) => typeof x ==='string')
console.log(areSomeTrueNotes)

//sort we have used
//if numbers are stored as stirngs it gives the wrong result
//sort modifies the original array, best to make a copy
//for sorting users in a raay, use the object key

const usersNotes =  [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
  ]
usersNotes.sort((a,b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
})
console.log(usersNotes) //sorted ages ascending
