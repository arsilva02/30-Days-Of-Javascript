console.log('Day 13 - Exercise 3')
//Check the speed difference among the following loops: while, for, for of, forEach

console.time('While loop')
let i = countries.legnth
while (i >= 0) {
    console.log(countries[i])
    i--
  }
console.timeEnd('While loop')

console.time('Regular for loop')
for ( i = 0; i < countries.length; i++) {
    console.log(countries[i])
  }
console.timeEnd('Regular for loop')

console.time('For of loop')
for (const item of countries) {
    console.log(item)
  }
console.timeEnd('For of loop')

console.time('forEach loop')
countries.forEach((item) => {
  console.log(item)
})
console.timeEnd('forEach loop')