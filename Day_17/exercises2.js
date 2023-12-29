console.log('Day 17 - Exercises 2')
localStorage.clear()

// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
const student = {
    firstName: 'Arden',
    lastName: 'Silva',
    age: 21,
    skills : ['Python','Java','C#','SQL','JavaScript','HTML','CSS'],
    country: 'USA',
    enrolled: true
}

const studentJSON = JSON.stringify(student,undefined, 4)
localStorage.setItem('student',studentJSON)
console.log(localStorage)