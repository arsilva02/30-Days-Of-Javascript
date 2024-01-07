const titleString = '30 Days of JavaScript Challenge 2023 By Asabeneh Yetayeh'
const titleArray = titleString.split('')

function randomHexaNumberGenerator(){
    const hexRef = '0123456789abcdef'
    const hexGen = Array()
    for(i=0;i<6;i++){
        hexGen[i] = hexRef.charAt(Math.floor(Math.random() * hexRef.length))
    }
    hexCode = '#'+ hexGen.toString()
    hexCode = hexCode.replace(/,/gi,"")
    return hexCode
}



setInterval(()=>{
    const title = document.querySelector('div')
    const heading = document.createElement('h1')
    title.innerHTML = ''
    

    for(character of titleArray){
        const spanElement = document.createElement('span')
        spanElement.style.color = randomHexaNumberGenerator()
        spanElement.textContent = character
        heading.appendChild(spanElement)
    }

    title.style.backgroundColor = randomHexaNumberGenerator()


    title.append(heading)


},3000)