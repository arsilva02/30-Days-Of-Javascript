console.log('Day 18 - Exercises 1')
//Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesAPI = 'https://restcountries.com/v2/all'
const countryFetch = async() =>{
    try{
        const response = await fetch (countriesAPI)
        const countries = await response.json()
        countries.forEach(c => {
            console.log(c.name, c.capital, c.languages,c.population,c.area)
        });
    } catch(e){
        console.error(e)
    }
}
console.log('===== async and await')
countryFetch()