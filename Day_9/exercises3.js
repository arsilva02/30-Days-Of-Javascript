console.log('Day 9 - Exercises 3')


//Use the countries information, in the data folder. Sort countries by name, 
countriesData.sort((a,b)=>{
    if(a.name < b.name) return -1
    if(a.name > b.name) return 1
    return 0
})

//by capital, 
countriesData.sort((a,b)=>{
    if(a.capital < b.capital) return -1
    if(a.capital > b.capital) return 1
    return 0
})

//by population
countriesData.sort((a,b)=>{
    if(a.population < b.population) return -1
    if(a.population > b.population) return 1
    return 0
}) 
console.log(countriesData)

//*** Find the 10 most spoken languages:
function mostSpokenLanguages(countries,num){
    const copyCountries = countries.slice()
    copyCountries.sort((a,b)=>{
        if(a.languages.length > b.languages.length ) return -1
        if(a.languages.length  < b.languages.length ) return 1
        return 0
    }) 
    return (copyCountries.slice(0,num))
}
console.log(mostSpokenLanguages(countriesData,19))


//*** Use countries_data.js file create a function which create the ten most populated countries
function mostPopulated(countries,num){
    const copyCountries = countries.slice()
    copyCountries.sort((a,b)=>{
        if(a.population > b.population ) return -1
        if(a.population  < b.population ) return 1
        return 0
    }) 
    return (copyCountries.slice(0,num))
}
console.log(mostPopulated(countriesData,10))

//*** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability
//(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. 
//You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.