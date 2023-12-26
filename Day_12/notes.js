console.log('Day 12 - Notes')

//we want to find patterns, which we can create in two ways


//regexp parameters, one is the required search pattern and an optional flag

//pattern
//flags - global (g), i (case insensitive), m (multiline)

let lovePattern = 'love'
let globalFlag = 'gi' //global and case insensitive

let loveRegEx = new RegExp(lovePattern, globalFlag) // new pattern

//we can also do it without constructor

let loveregularexp = /love/gi

//object methods

//test
console.log(loveRegEx.test('I Love JavaScript')) //true
console.log(loveRegEx.test('I like JavaScript')) //false

//match
console.log('I love JavaScript'.match(loveRegEx)) //returns array of where it was found
console.log('I like JavaScript'.match(loveRegEx)) //returns null
console.log('I love JavaScript'.match(/love/)) //['love', index: 2, input: 'I love JavaScript', groups: undefined], there is no global here

//search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
console.log('I love JavaScript'.search(loveRegEx)) //returns index of where it was found, -1 if it fails

//replace(): Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
console.log('I love Python'.replace(/Python|python/,'JavaScript'))
console.log('I love python'.replace(/Python|python/,'JavaScript'))
console.log('I love python'.replace(/Python/,'JavaScript'))

//square bracket
const applePattern = /[Aa]pple|[Bb]anana/g //either A or a, banana
const appleTxt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
console.log(appleTxt.match(applePattern))

//Escape character(\) in RegExp
const digitPattern =/\d/g //\d means digits
const digitTxt = 'This regular expression example was made in December 26th,  2023.'
console.log(digitTxt.match(digitPattern)) //(6) ['2', '6', '2', '0', '2', '3']
console.log(digitTxt.match(/\d+/g)) // (2) ['26', '2023']

//period
console.log('Apple and banana are fruits'.match(/[aA]./g)) //(6) ['Ap', 'an', 'an', 'an', 'a ', 'ar']

//* Zero or many times. The pattern may not occur or it can occur many times.
console.log('Apple and banana are fruits'.match(/[a].*/g)) 
//['and banana are fruits']

// ? Zero or one times. The pattern may not occur or it may occur once.
console.log('I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'.match(/[Ee]-?mail/g))

//quantifiers
console.log('This regular expression example was made in December 6,  2019.'.match( /\b[a-zA-Z]{4}\b/g)) //exactly four character words without nums

//carat ^ starts with
console.log('This regular expression example was made in December 6,  2019.'.match(/^This/))

console.log('This regular expression example was made in December 6,  2019.'.match(/[^A-Za-z,. ]+/g)) // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
//(2) ['6', '2019']

//exact match
//It should have ^ starting and $ which is an end.
console.log('Arden'.match( /^[A-Z][a-z]{3,13}$/))