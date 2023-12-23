console.log('Exercises 3 - Day 10')

//How many languages are there in the countries object file.
const languages = new Array()
for (const item in countriesData){
    const cLang = countriesData[item].languages
    for(let lang of cLang){
        languages.push(lang)
    }
}

const langSet = new Set(languages)
console.log(langSet) ///112 langs

//*** Use the countries data to find the 10 most spoken languages:
//already did this on day 9