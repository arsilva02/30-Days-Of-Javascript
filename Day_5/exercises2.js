console.log('Day 5 - Exercises 2')
//Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
//i will just store them here
console.log(countries)
console.log(webTechs)

//First remove all the punctuations and change the string to array and count the number of words in the array

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(' ')
console.log(words)
console.log(words.length)

//In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.splice(shoppingCart.indexOf('Honey'), shoppingCart.indexOf('Honey'))

//add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
    shoppingCart.splice(shoppingCart.indexOf('Honey'), shoppingCart.indexOf('Honey')) //note that you need to tab
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
console.log(shoppingCart)

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let eExists = countries.indexOf('Ethiopia')
if (eExists !== -1){
    console.log('ETHIOPIA')
} else{
    countries.push('Ethiopia')
}

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
let sExists = webTechs.indexOf('Sass')
if (sExists !== -1){
    console.log('Sass is a CSS preprocess')
} else{
    webTechs.push('Sass')
    console.log(webTechs)
}

//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
