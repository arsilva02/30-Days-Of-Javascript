//show countries
const returnAny = (searchString) => {
    let result = []
    let normalizedSearchString = searchString.toUpperCase()
    if(searchString != ''){
        for (country of countries){
            if(country.toUpperCase().includes(normalizedSearchString)) result.push(country)}
            searchTotal.textContent = `Countries that contain "${searchString}" are ${result.length}`
    } else {
        result = countries
        searchTotal.innerHTML = ''
    }
    return result

}

const returnStarting = (searchString) => {
    let result = []
    let normalizedSearchString = searchString.toUpperCase()
    if(searchString != ''){
        for (country of countries){
            if(country.toUpperCase().startsWith(normalizedSearchString)) result.push(country)}
            searchTotal.textContent = `Countries that start with "${searchString}" are ${result.length}`
    } else {
        result = countries
        searchTotal.innerHTML = ''
    }
    return result
}

const generateCountries = (result) => {
    wrapperDiv.innerHTML = ''
    for(country of result){
        const countryElement = document.createElement('div')
        countryElement.classList.add('country-component')
        countryElement.textContent = country
        wrapperDiv.appendChild(countryElement)
    }
}

//setup subtitle
const subtitle = document.querySelector('.subtitle')
subtitle.textContent = 'Total Number of Countries: ' + countries.length


//grab elements
const searchBar = document.querySelector('.text-search')
const wrapperDiv = document.querySelector('.selected-countries')
const searchTotal = document.querySelector('.search-total')
const filters = document.querySelectorAll('.filter')

//populate default
generateCountries(countries)

//shows what is being searched
searchBar.addEventListener('keyup',(e) => {
    searchQuery = document.querySelector('.query')
    let searchString = e.target.value
    let filteredCountries = []
    
    if(filters[0].checked) filteredCountries = returnStarting(searchString)
    else filteredCountries = returnAny(searchString)

    if(filters[2].checked) filteredCountries.reverse()

    generateCountries(filteredCountries)
})

