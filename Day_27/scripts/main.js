//functions and constants
const technologyText = 'The technology I know: '


const dynamicText = (techIndex, titleIndex) =>{
    //grabbing title at 1 and emoji at 0
    const currentEmoji = titles[titleIndex][0]
    const currentTitle = titles[titleIndex][1]

    //fill title
    authorTitles.innerHTML = `
        <p class="current-main-title">${currentEmoji} ${currentTitle}</p>
    `
    //grabbing tech
    const currentTech = tech[techIndex]
    authorTech.innerHTML = technologyText + currentTech

    techIndex++
    titleIndex++

    if(techIndex === tech.length-1) techIndex=0
    if(titleIndex === titles.length-1) titleIndex=0

    return (techIndex, titleIndex)

}


//grabbing information from user data
const fullName = userData.author.firstName + ' ' + userData.author.lastName
const bio = userData.author.bio
const titles = userData.author.titles
const projects = userData.projects
const tech = userData.tech
//grab elements
const authorName = document.querySelector('.author-name')
const authorTitles = document.querySelector('.titles')
const authorBio = document.querySelector('.about')
const authorProjects = document.querySelector('.projects')
const authorTech = document.querySelector('.tech')

//fill textContent
//these are static
authorName.textContent = fullName
authorBio.textContent = bio

for (project of projects){
    let newProject = document.createElement('div')
    newProject.classList.add('project-component')
    newProject.textContent = project.name
    authorProjects.appendChild(newProject)
}


//dynamic 


//set up first 3 seconds
authorTitles.innerHTML = `
<p class="current-main-title">${ titles[0][0]} ${titles[0][1]}</p>
`
authorTech.innerHTML = technologyText + tech[0]

let currentTechIndex = 1
let currentTitleIndex = 1

setInterval( ()=>{
    const currentEmoji = titles[currentTitleIndex][0]
    const currentTitle = titles[currentTitleIndex][1]

    //fill title
    authorTitles.innerHTML = `
        <p class="current-main-title">${currentEmoji} ${currentTitle}</p>
    `
    //grabbing tech
    const currentTech = tech[currentTechIndex]
    authorTech.innerHTML = technologyText + currentTech

    currentTechIndex++
    currentTitleIndex++

    if(currentTechIndex === tech.length-1) currentTechIndex=0
    if(currentTitleIndex === titles.length-1) currentTitleIndex=0
}
   ,3000)