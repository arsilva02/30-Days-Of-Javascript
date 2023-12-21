console.log('Day 5 - Arrays')

//arrays store multiple values with an index
//they reference a specific spot in memory

//lets create an empty array
//we usually declare with const instead of let
const arr = Array()
console.log(arr)

//we can also use square brackets
const squareArr = []
console.log(squareArr)

//lets make some ones with initial values
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs2 = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries2 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs2)
console.log('Number of web technologies:', webTechs2.length)

console.log('Countries:', countries2)
console.log('Number of countries:', countries2.length)

//we can also have ones of different data types
const diffArr = ['Arden',32, true, {country: 'USA', city :"Austin"}]
console.log(diffArr)

//we can split a string into an array
let js = 'JavaScript'
const charsInJavaScript = js.split("")//splits on nothing, breaks up characters
console.log(charsInJavaScript)

//or into different words!
let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(', ')//removes spaces, no need to trail
console.log(companies)

//using spaces
let txtString = 'I love teaching and empowering people. I teach HTML, CS, JS, React, and Python'

const wordsArr = txtString.split(' ')
console.log(wordsArr)

//how do we access?

let firstFruit = fruits[0]//starts at 0
console.log(firstFruit)
let lastFruit = fruits[fruits.length - 1] //have to access from the index
console.log(lastFruit)

//how do we modify?
//arrays are mutable
console.log(numbers)
numbers[0] = 10
console.log(numbers) //changes to 10!

//what are different ways we cna manipulate an array?
const eightXvalues = Array(8).fill('X') //eight elements with just x
console.log(eightXvalues) //can also do it with nums

//concat
const firstList = [1,2,3]
const secondList = [4,5,6]
const thirdList = firstList.concat(secondList)
console.log(thirdList)

//lets get the index of a few things
console.log(numbers.indexOf(10))
console.log(fruits.indexOf('mango'))

//checking if something exists
let bananaIndex = fruits.indexOf('banana') //0
if (bananaIndex === -1) //when does not exist 
{
    console.log('This fruit does not exist in the array!')
} else{
    console.log('This fruit does exist in the array')
}

//you could use trenary here too
//getting the last element
console.log(numbers.lastIndexOf(10)) //lat time 10 was in the array

//if included
console.log(numbers.includes(10)) //true
console.log(numbers.includes(-10)) //false

//lets see what datatype is in the array
console.log(Array.isArray(numbers)) //it IS numbers!

//converting to string
console.log(numbers.toString()) //includes commas

//when joining, we default to commas but we can do other things
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook


//slicing

console.log(numbers.slice()) // -> it copies all  item
console.log(numbers.slice(0)) // -> it copies all  item
console.log(numbers.slice(0, numbers.length)) // it copies all  item
console.log(numbers.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position


//splicing method
numbers.splice()
console.log(numbers)                // -> remove all items
numbers.splice(0,1)
  console.log(numbers)            // remove the first item
numbers.splice(3, 3, 7, 8, 9)
console.log(numbers.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

//pushing item
const pushArr = ['item1','item2','item3']
pushArr.push('new item')
console.log(pushArr)

//remove the end element using pop
pushArr.pop()
console.log(pushArr)

//remove an elemt from beginning
pushArr.shift()
console.log(pushArr)//just 2 items now

//add element to beginning
pushArr.unshift('item1')
console.log(pushArr)

//reversing order
pushArr.reverse()
console.log(pushArr)

//sorting
console.log(webTechs2)
webTechs2.sort()
console.log(webTechs2)

//arrays of arrays

const arrayOfArray = [firstList,secondList]
console.log(arrayOfArray[0])
console.log(arrayOfArray[1])
console.log(arrayOfArray)