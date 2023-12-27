console.log('Day 16 - Exercises 3')
//Parse the txt JSON to object.
const usersObj = JSON.parse(txt,4)
console.log(usersObj)

// Find the user who has many skills from the variable stored in txt.
const mostSkilled = Object.keys(usersObj).map(key => {  
    return {
        name: key,
        skills: usersObj[key].skills
    }
    }).sort((a,b) => {  
        if(a.length > b.length) return -1;
        if(a.length < b.length) return 1;
        return 0
    }).slice(0, 1)
console.log(mostSkilled[0].name)     // Alex