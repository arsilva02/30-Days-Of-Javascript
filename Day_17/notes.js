console.log('Web Storages Notes')

//html web storage is more secure than cookies without affecting website performance 
//two web storage objects
//sessionstorage and localstorage
console.log(localStorage)
//lets set an item
localStorage.setItem('firstName','Arden')
console.log(localStorage)
//number
localStorage.setItem('age',21)
console.log(localStorage)

//we can also store arrays
const skills = ['HTML', 'CSS', 'JS', 'React']
//now stringify
const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)

let skillsObj = [
    { tech: 'HTML', level: 10 },
    { tech: 'CSS', level: 9 },
    { tech: 'JS', level: 8 },
    { tech: 'React', level: 9 },
    { tech: 'Redux', level: 10 },
    { tech: 'Node', level: 8 },
    { tech: 'MongoDB', level: 8 }
  ]

let skillsObjJSON = JSON.stringify(skillsObj)
localStorage.setItem('skills Object', skillsObjJSON)
console.log(localStorage)

console.log(localStorage.getItem('firstName'))

localStorage.clear()
console.log(localStorage)
