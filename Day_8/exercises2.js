console.log('Day 8 - Exercises 2')
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}


let maxSkills = 0
let winner = users.Alex

for (const property in users){
    if (users[property].skills.length > maxSkills){
        maxSkills = users[property].skills.length
        winner = property
    }
}
console.log(winner)
console.log(maxSkills)

//Count logged in users, count users having greater than equal to 50 points from the following object.
let loggedIn = 0
let over50 = 0
for (const property in users){
    if (users[property].isLoggedIn){
        loggedIn+= 1
    }
    if (users[property].points >= 50){
        over50+= 1
    }
}

console.log(loggedIn)
console.log(over50)

//Find people who are MERN stack developer from the users object
const MERN = ['MongoDB','Express','React','Node']
const mernDevs = new Array()

for (const property in users){
    if (users[property].skills.includes(MERN[0]) 
    && users[property].skills.includes(MERN[1]) 
&& users[property].skills.includes(MERN[2]) 
&& users[property].skills.includes(MERN[3]) 
    ){
        mernDevs.push(property)
    }

}
console.log(mernDevs)

//Set your name in the users object without modifying the original users object
users.Arden = {
    email: 'arsilva@utexas.edu',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Python', 'C'],
    age: 21,
    isLoggedIn: true,
    points: 50
}
console.log(users)

//Get all keys or properties of users object
const userKeys = Object.keys(users)
console.log(userKeys)

//Get all the values of users object
const userValues = Object.values(users)
console.log(userValues)

//Use the countries object to print a country name, capital, populations and languages.
for (const property of countries){
    let cName = property.name
    let cCapital = property.capital
    let cPopulations = property.population
    let cLangauges = property.languages
    console.log(`Name: ${cName}\tCapital: ${cCapital}\tPopulation: ${cPopulations}\tLanguages: ${cLangauges}`)
}
