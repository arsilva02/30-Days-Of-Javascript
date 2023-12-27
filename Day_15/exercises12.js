console.log('Day 15 - Exercises 1 and 2')
//Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name, age, color, legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    getAnimalInfo(){
        return(`This animal's name is ${this.name} that is ${this.age} years old, with ${this.color} coloring and ${this.legs} legs`)
    }
}

//Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal{
    typeAnimal(){
        return('I am a dog!')
    }
    getAnimalInfo(){
        return(`This animal's name is ${this.name} that is ${this.age} years old, with ${this.color} coloring and ${this.legs} legs. This animal is a dog.`)
    }
}

class Cat extends Animal{
    typeAnimal(){
        return('I am a cat!')
    }
    //overiding
    getAnimalInfo(){
        return(`This animal's name is ${this.name} that is ${this.age} years old, with ${this.color} coloring and ${this.legs} legs. This animal is a cat.`)
    }
}

const testAnimal = new Animal('Arepa',5,'Tabby',4)
console.log(testAnimal.getAnimalInfo())

const testCat = new Cat('Arepa',5,'Tabby',4)
console.log(testCat.typeAnimal())
//Override the method you create in Animal class
console.log(testCat.getAnimalInfo())


const testDog = new Dog('Arepa',5,'Tabby',4)
console.log(testCat.typeAnimal())
