console.log('Day 11 - Exercises 2')
//Iterate through the users array and get all the keys of the object using destructuring
//Find the persons who have less than two skills
const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]

const lessThan2 = new Array()
for (const user of users){
    for (const {name,scores,skills, age} of users){
        console.log(name,scores,skills,age)
    }
    if (user.skills.length <2){
        lessThan2.push(user)
    }
}
console.log(lessThan2)