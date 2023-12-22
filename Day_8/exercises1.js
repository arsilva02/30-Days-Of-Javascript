console.log('Day 8 - Objects')
//Create an empty object called dog
const dog = {}
//Print the the dog object on the console
console.log(dog)
//Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Nucita'
dog.legs = 4
dog.color = 'Lemon'
dog.age = 6
dog.bark = function() {return 'wood woof'}

//Get name, legs, color, age and bark value from the dog object
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())

//Set new properties the dog object: breed, getDogInfo
dog.breed = 'Bassett Hound'
dog.getDogInfo = function() {
    return `${this.name} is ${this.age} years old, and a ${this.breed}.`
}
console.log(dog.getDogInfo())


