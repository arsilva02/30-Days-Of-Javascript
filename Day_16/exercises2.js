console.log('Day 16 - Exercises 2')
//Stringify the students object with only firstName, lastName and skills properties
const studentsFilTxt = JSON.stringify(student,['firstName', 'lastName', 'skills'],4)
console.log(studentsFilTxt)