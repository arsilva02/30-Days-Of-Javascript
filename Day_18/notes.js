console.log('Day 18 - Notes')

//promises has three states
//pending, neither fulfilled or rejected
//fulfilled, operation completed
//rejected, operation failed
//Callback
const doSomething = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback('It did not go well', skills)
    }, 2000)
  }
  
  const callback = (err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  }
  
  doSomething(callback) //// after 2 seconds it will print
//It did not go well

//promise
const notePromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const skill =  ['HTML', 'CSS', 'JS']
        if(skill.length>0){
            resolve(skill)
        } else{reject('Something wrong has happened')}
    },2000)
})

//promise takes a call back function and returns resolve or reject
notePromise.then(result=>{console.log(result)}).catch(error=>console.log(error))
//rsult and watch has a callback

//reject
const fullstackPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const skill =  ['HTML', 'CSS', 'JS']
        if(skill.includes('Node')){
            resolve('fullstack developer')
        } else{reject('Something wrong has happened')}
    },2000)
})
fullstackPromise.then(result=>{console.log(result)}).catch(error=>console.log(error)) //Something wrong has happened

//fetch api
const countryUrl = 'https://restcountries.com/v2/all' // countries api
fetch(countryUrl).then(response => response.json()) //access api data as json
    .then(data => {
        console.log(data)
    }) //store/access data
    .catch(error => console.error(error)) //handle error
    //we got the data!

//Async and await is an elegant way to handle promises. It is easy to understand and it clean to write.
const squareAsync = async function (n) {
    return n * n
  }
console.log(squareAsync(2)) //promise fulfilled, result 4

//fetch apis using async
const fetchData = async () => {
    try {
      const response = await fetch(countryUrl)
      const countries = await response.json()
      console.log(countries)
    } catch (err) {
      console.error(err)
    }
  }
  console.log('===== async and await')
  fetchData()