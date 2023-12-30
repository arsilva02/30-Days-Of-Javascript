console.log('day 21 - mini project - exercise 3')

//The year color is changing every 1 second
//The date and time background color is changing every on seconds
const randomHex =() => {
    const hexRef = '0123456789abcdef'
    const hexGen = Array()
    for(i=0;i<6;i++){
        hexGen[i] = hexRef.charAt(Math.floor(Math.random() * hexRef.length))
    }
    hexCode = '#'+ hexGen.toString()
    hexCode = hexCode.replace(/,/gi,"")
    return hexCode
}



const h1 = document.querySelector('h1')
h1.innerHTML = `Asabeneh Yetayeh challenges in <span id="year">2020<span>`
const yearElement = document.querySelector("#year")

function setColor (){
    yearElement.style.color = randomHex()
}

setInterval(setColor,1000)

//The date and time background color is changing every on seconds'
const p = document.querySelector("p")
p.textContent = Date();
function setDateTime (){
    p.style.background = randomHex()
}
setInterval(setDateTime,1000)


//Completed challenge has background green
//Ongoing challenge has background yellow
//Coming challenges have background red

const allLists = document.querySelectorAll('li')
for (let i = 0;i<allLists.length;i++){
    let text = allLists[i].textContent
    let background = 'yellow'
    if(text.includes('Done')){
        background = 'green'
    } 
    if(text.includes('Coming')) {
        background = 'red'}
    
    allLists[i].style.background = background
    
}
