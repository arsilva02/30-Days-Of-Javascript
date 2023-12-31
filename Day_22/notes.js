console.log('day 22 - notes')

//To create an HTML element we use tag name. Creating an HTML element using JavaScript is very simple and straight forward. We use the method document.createElement(). The method takes an HTML element tag name as a string parameter.
let titleEle = document.createElement('h1')
titleEle.className = 'title'
titleEle.style.fontSize='24px'
titleEle.textContent = 'Creating HTML element DOM Day 2'
console.log(titleEle)

//you could also do this in a loop


//appending child to parent
document.body.appendChild(titleEle) //this adds it to the html document

//we can also remove
document.body.removeChild(titleEle)
//inner html is better to elimante all inner html elements