console.log('Day 12 - Exercises1')

//Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const incomeTxt =  'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const incomePattern = /\d+/g
let incomeCalc = incomeTxt.match(incomePattern)
let income = Number(incomeCalc[0])*12 + Number(incomeCalc[1]) + Number(incomeCalc[2])*12
console.log(income)

//Write a pattern which identify if a string is a valid JavaScript variable
function is_valid_variable(str) {
    const pattern = /^\d|[,.!@#%^&*()-]/g
    ///[,.!@#%^&*()-=+ ]/g
    let match = str.match(pattern)
    if(match == null){
        return true
    }
    return false
}
console.log(is_valid_variable('first_name'))//true
console.log(is_valid_variable('first-name'))//false
console.log(is_valid_variable('1first_name')) //false
console.log(is_valid_variable('firstname1')) //true
is_valid_variable('firstname') //True
