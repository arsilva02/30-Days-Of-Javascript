console.log('Day 13 - Exercises 1')
//Display the countries array as a table
console.table(countries)

//Display the countries object as a table
for (country of countries){
    console.table(country)
}

//Use console.group() to group logs
console.group('Countries')
console.table(countries)
for (country of countries){
    console.table(country)
}
console.groupEnd()