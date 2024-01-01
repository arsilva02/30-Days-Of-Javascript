console.log('exercise 2')

document.body.addEventListener('keypress',e=>{
    let keyPress = e.key
    keyPressedHTML = document.querySelector('.wrapper')
    keyPressedHTML.textContent = 'You pressed ' + keyPress
    let keyVal = e.keyCode
    valButton = document.querySelector('button')
    valButton.textContent = keyVal 
})

