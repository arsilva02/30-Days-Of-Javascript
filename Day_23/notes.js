console.log('event listeners - notes')
//we use event listeners for input
//like on click
const onClick = document.querySelector('button')
onClick.addEventListener('click', e=> {
    console.log('I clicked!')
    console.log('we can show target:', e.target)
    console.log('and text content:',e.target.textContent)
})

//double click
const doubleClick = document.querySelector('#doubleclick')
doubleClick.addEventListener('dblclick', e=> {
    console.log('I clicked!')
    console.log('we can show target:', e.target)
    console.log('and text content:',e.target.textContent)})

//mouse enter, when mouse hovers over element
const mouseEnter = document.querySelector('#mouseenter')
mouseEnter.addEventListener('mouseenter', e=> {
    console.log('I clicked!')
    console.log('we can show target:', e.target)
    console.log('and text content:',e.target.textContent)})

//you can do this with click, dbleclick, mouseenter, mouseleave,mousemove,mouseover,mouseout, input
//change, blur, keydown,keyup, keypress, onload

//we can get value
const mass = document.querySelector('#mass')
const height = document.querySelector('#height')
const bmiButton = document.querySelector('#bmi')
let bmi
bmiButton.addEventListener('click',()=>{
    bmi = mass.value / height.value ** 2
    alert(`your bmi is ${bmi.toFixed(2)}`)
    console.log(bmi)
})

//how do we get value without clicking button?
const input = document.querySelector('#inputchange')
const p = document.querySelector('#parachange')
input.addEventListener('input', e => {
    p.textContent = e.target.value
  })

//blur
const blurInput = document.querySelector('#blurinput')
const blurP = document.querySelector('#blurpara')

//pnly activates when you click then move away
blurInput.addEventListener('blur', (e) => {
    blurP.textContent = 'Field is required'
    blurP.style.color = 'red'

        })

        
//keypress, keydow and keyup

document.body.addEventListener('keypress',e=>{
    alert(e.keyCode)
})