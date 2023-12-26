console.log('Day 13 - notes')
//console object methods

//console.log shows output
console.log('30 Days of JavaScript')

//use substiution
console.log('%d %s of JavaScript',30,'Days')
//30 Days of JavaScript

//we can also use css
console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
    '%c30 Days%c %cOf%c %cJavaScript%c',
    'color:green',
    '',
    'color:red',
    '',
    'color:yellow'
  ) // log output green red and yellow text

  //console.warn
  console.warn('This is a warning')

  //error
  console.error('This is an error message')
  
  //table
  const namesTable = ['Asabeneh', 'Brook', 'David', 'John']
  console.table(namesTable)

  //we can do the same for object
  const userTable = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  }
  console.table(userTable)

  const countriesNotes = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  console.table(countriesNotes)
  console.time('Regular for loop')
  for (let i = 0; i < countriesNotes.length; i++) {
    console.log(countriesNotes[i][0], countriesNotes[i][1])
  }
  console.timeEnd('Regular for loop')

  //info
  console.info('30 Days Of JavaScript challenge is trending on Github')

//assert
console.assert(4>3,'4 is greater than 3') //no result
console.assert(4<3,'3 is not greater than 4') // Assertion failed: 3 is not greater than 4, error logging

//console.group()
console.group('Names')
console.log(namesTable)
console.groupEnd()

//console.count, prints how many times console.count was called
function func()  {
    console.count('Function has been called')
}
func()
func()
func()

//clear the console
//console.clear() //Console was cleared