console.log('Day 8 - Objects')
//local and global level
//refer scope.js

// /A variable declared as local can be accessed only in certain block code.

//Now, you have an understanding of scope. A variable declared with var only scoped to function but 
//variable declared with let or const is block scope(function block, if block, loop block, etc). Block in JavaScript is a code in between two curly brackets ({}).

//creating empty object
const person = {}
//or one with values
const rectangle = {length:20,width:20,getArea: function(){return this.length*this.width}} //use this for this object
//accessing values
console.log(rectangle.width)
//we can also reference methods
console.log(rectangle.getArea())

//objects are mutable so we can store new keys

rectangle.color = 'Blue'
console.log(rectangle.color)

//object methods
//assign: copy an object without modifying
const copyRectangle = Object.assign({}, rectangle)
console.log(copyRectangle)
// /Object.keys: To get the keys or properties of an object as an array
const rectKeys = Object.keys(copyRectangle)
console.log(rectKeys)
//Object.values:To get values of an object as an array
const rectValues = Object.values(copyRectangle)
console.log(rectValues)
//Object.entries:To get the keys and values in an array
const rectEntries = Object.entries(copyRectangle)
console.log(rectEntries)
//hasOwnProperty: To check if a specific key or property exist in an object
console.log(copyRectangle.hasOwnProperty('color'))
console.log(copyRectangle.hasOwnProperty('perimeter'))

