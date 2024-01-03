//functions for most populated and most languages
const mostPopulated = () =>{
    const topTen = Object.keys(countries_data).map(key => { //we map name and population
        const country = countries_data[key]
        return{
            name: country.name,
            population: country.population
        }
    }).sort((a,b)=>{ //sort desc
        if(a.population > b.population) return -1
        if(a.population < b.population) return 1
        return 0
    }).splice(0,10) //take top 10

    const worldPop = countries_data.reduce((acc, curr) => acc += curr.population, 0)
    topTen.unshift({name:'World',population:worldPop})
    graphTitle.innerHTML = '10 Most Populated Countries'

    return topTen

}

const mostLangauges = () => {
    //create a set
    const languageSet = new Set()
    Object.keys(countries_data).forEach(key => {
        countries_data[key].languages.forEach(lang => languageSet.add(lang))
      })

    //create an array for all languages
    const allLangs = Array.from(languageSet).reduce((acc,curr)=>{
        acc[curr] = {
            name: curr,
            count: 0 
        }
        return acc
    },{})

    //get counts for each language
    for(country of countries_data){
        for(lang of country.languages){
            if(allLangs[lang].name === lang) allLangs[lang].count+= 1
        }
    }

    const topTen = Object.keys(allLangs).map(key => allLangs[key]).sort((a,b)=>{ //sort desc
        if(a.count > b.count) return -1
        if(a.count < b.count) return 1
        return 0
    }).splice(0,10) //take top 10

    graphTitle.innerHTML = '10 Most Spoken Languages'
    return topTen

}

//function for generating eleents
const updateStats = (topStats) =>{
    //clears html
    wrapperDiv.innerHTML = ''

    //grab max
    let maxVal = topStats[0].count
    if('population' in topStats[0]) maxVal = topStats[0].population

    //for each country generate html element
    for(country of topStats){
        const countryElement = document.createElement('div')
        countryElement.classList.add('component')

        let countryVar = 0
        let name = country.name

        //gets population or language
        if('population' in country) countryVar = country.population
        else countryVar = country.count

        countryElement.innerHTML = `
        <p class="description">${name}</p>
        <progress min="0" max="${maxVal}" value="${countryVar}"></progress>
      <p class="count">${countryVar}</p>
      `
      wrapperDiv.appendChild(countryElement)

    }

}

//setup subtitle
const subtitle = document.querySelector('.subtitle')
subtitle.textContent = 'Currently we have ' + countries_data.length + ' countries'

//elements
const wrapperDiv = document.querySelector("#stat")
const generatePop = document.querySelector('.population')
const generateLang = document.querySelector('.languages')
const graphTitle = document.querySelector('h4')

//check params
generatePop.addEventListener('click',e=>{
    updateStats(mostPopulated())
})
generateLang.addEventListener('click',e=>{
    updateStats(mostLangauges())
})
