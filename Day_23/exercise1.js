console.log('day 23 - level 1')

//isPrime function
isPrime = (num) => {
    if(num < 2) return false
    for (let i = 2; i < num; i++) {
        if (num % i === 0 && num > 1) {
            return false
                } 
    } return true
 }

isNumber = (num) =>{
    const regex = new RegExp(/[^0-9]/, 'g')
    if(num.match(regex)) return false
    return true
}

generateNum = (numCount) =>{
    divWrap.innerHTML = ''

    for(let i = 0;i<=numCount;i++){
        let num = document.createElement('button')
        num.className = 'title'
        num.style.fontSize =  '24px'
        num.textContent = i
        if(i%2===0){
            num.style.background = 'green'
        } else{
            num.style.background = 'yellow'
        }
        if(isPrime(i)) {num.style.background = 'red'}
        if(i%6===0){
            let para = document.createElement('p')
            divWrap.appendChild(para)
        }
        divWrap.appendChild(num)
    }
}

//grab elements
const generate = document.querySelector('#generate')
const numInput = document.querySelector('#num')
const divWrap = document.querySelector('.wrapper')
const blurP = document.querySelector('#blurpara')


//default
let defaultCount = 101
generateNum(defaultCount)

//html element
generate.addEventListener('click', e=> {
    let userNumber = numInput.value
    if(userNumber === ''){
        blurP.textContent = 'Field is required'
        blurP.style.color = 'red'
    } else{
       if(!isNumber(userNumber)){
        blurP.textContent = 'Must be a number'
        blurP.style.color = 'red'
       } else{
        userNumber = Number(userNumber)
        generateNum(userNumber)
       }
    }
})