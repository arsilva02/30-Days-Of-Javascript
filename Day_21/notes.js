console.log('Day 21 - Notes')

//html is a js object
//we can select an html object

//lets select something from index
const docTitle = document.getElementsByTagName('h1')
console.log(docTitle) //html collection list, 4 items
console.log(docTitle.length)
for (let i = 0; i < docTitle.length; i++) {
    console.log(docTitle[i]) // prints each elements in the HTMLCollection
  }

//we can get from classname
const className = document.getElementsByClassName('title')
console.log(className)

//by id
const firstTitle = document.getElementById('first-title')
console.log(firstTitle)

//we can use querySelector
let querySelect1 = document.querySelector('h1')//selects first available h1 element
let querySelect2 = document.querySelector('#first-title')//selects ids with first title
let querySelect3 = document.querySelector('.title') //select the first available element with class title

//querySelectorAll: can be used to select html elements by its tag name or class. 
//It returns a nodeList which is an array like object which supports array methods. We can use for loop or forEach to loop through each nodeList elements.
const allQueries = document.querySelectorAll('h1') //grabs all h1
console.log(allQueries.length)
for (let i = 0; i < allQueries.length; i++) {
    console.log(allQueries[i])
  }
allQueries.forEach(title => console.log(title))

//adding attribute
allQueries[3].id = 'fourth-title'
//or we can set
allQueries[3].setAttribute('class','title')
//classlist
//does not override the original class
allQueries[3].classList.add('title', 'header-title')
//remove
allQueries[3].classList.remove('title', 'header-title')

//adding text
allQueries[3].textContent = 'Fourth Title'

//innerhtml replaces or creatres new childrent content to a parent element
const jsLists = `
    <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>`
const ul = document.querySelector('ul')
ul.innerHTML = jsLists

//remove
ul.innerHTML = ''

//adding style
allQueries.forEach((title,i)=>{
    title.style.fontSize = '24px' //change font to 24
    if(i%2===0){
        title.style.color = 'green'
        title.style.backgroundColor = 'white'
        title.style.fontSize = '20px'

    } else{title.style.color='red'
    title.style.backgroundColor = 'black'
    title.style.fontSize = '30px'

}
    
})