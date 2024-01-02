//functions

generateWeight = (weight, planet) =>{
    //clear html
    wrapperDiv.innerHTML = ''
    //find planet and properties, default to neptune
    if(planet ==='none') planet = 'neptune'
    const planetProperties= planetData[planet]
    //get new weight
    const newWeight = parseFloat(weight*planetProperties.surfaceGravity).toFixed(2)
    wrapperDiv.innerHTML = `
    <p class="result glass-bg g-place-center">The weight of the object on <b>${planet.toUpperCase()}</b>
        <span class="rounded g-place-center">${newWeight} N</span>
    </p>
    <img src="./images/${planet.toLowerCase()}.png" alt="${planet.toLowerCase()}">`
}

//isnum
isNumber = (num) =>{
    const regex = new RegExp(/[^0-9]/, 'g')
    if(num.match(regex)) return false
    return true
}

//elements

const generate = document.querySelector('button')
const wrapperDiv = document.querySelector(".wrapper")

//check params
generate.addEventListener('click',e=>{
    const userWeight =  document.querySelector('#mass').value
    const planetInput = document.querySelector('select').value
    
    if(userWeight ==='') wrapperDiv.innerHTML =  '<p class="result glass-bg g-place-center">Please enter a value.</p>' 
    else{
        if(!isNumber(userWeight)) wrapperDiv.innerHTML = '<p class="result glass-bg g-place-center">Please enter a number.</p>'
        else(generateWeight(userWeight,planetInput))
    }
})