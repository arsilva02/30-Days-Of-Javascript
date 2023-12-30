console.log('Day 21 - Exercises 1')
//Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
const firstPara = document.querySelector('p')
console.log(firstPara)

//Get each of the the paragraph using document.querySelector('#id') and by their id
const onePara = document.querySelector('#first-para')
const twoPara = document.querySelector('#second-para')
const threePara = document.querySelector('#third-para')
const fourPara = document.querySelector('#fourth-para')
console.log(onePara,twoPara,threePara,fourPara)

//Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const allPara = document.querySelectorAll('p')
console.log(allPara)
//Loop through the nodeList and get the text content of each paragraph
for(let i =0; i < allPara.length;i++){
    console.log(allPara[i].textContent)
}

//Set a text content to paragraph the fourth paragraph,Fourth Paragraph
allPara[3].textContent = 'Fourth Paragraph'

//Set id and class attribute for all the paragraphs using different attribute setting methods
allPara[2].id = 'third-title'
allPara[2].setAttribute('class', 'para')

allPara[1].classList.add('title', 'second-title')

//all the others already have atrributes
console.log(allPara)