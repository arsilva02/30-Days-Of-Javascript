console.log('day 22 - level 1')

let totalCount = 101

const divWrap = document.querySelector('.wrapper')

isPrime = (num) => {
    if(num < 2) return false
    for (let i = 2; i < num; i++) {
        if (num % i === 0 && num > 1) {
            return false
                } 
    } return true
 }

for(let i = 0;i<=totalCount;i++){
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