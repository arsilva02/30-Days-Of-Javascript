console.log('Day 15 - Notes')

//classes lets us make many of the same objects
class TestClass {
    constructor(name,number = 0){
        console.log(this)
        this.name = name //intilizes params
        this.number = number
        this.properties = [] //we can set this without a param
    }

    //methods
    //get
    getDivBy5(){
        const divFive = this.number / 5
        return divFive
    }
    get getName(){
        return this.name
    }
    get getProperties(){
        return this.properties
    }

    //set
    set setProperty(property){
        this.properties.push(property)
    }

    //static
    static showDateTime() {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        if (hours < 10) {
          hours = '0' + hours
        }
        if (minutes < 10) {
          minutes = '0' + minutes
        }
    
        let dateMonthYear = date + '.' + month + '.' + year
        let time = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + time
        return fullTime
      }
}
const testClass = new TestClass('number1',10)
console.log(testClass)

const secondTest = new TestClass('number 2', 20)
console.log(secondTest)

const thirdTest = new TestClass('number 3')
console.log(thirdTest) //default num of 0

//call method
console.log(testClass.getDivBy5())
console.log(testClass.getName)
console.log(testClass.getProperties)
//console.log(testClass.setProperty('Blue'))
testClass.setProperty = 'CSS'

console.log(testClass.getProperties)

console.log(TestClass.showDateTime())


//inheretance
class Rectangle extends TestClass {
    getDivBy5(){
        console.log(`You shouldn't divide a rectangle by 5!`)
    }
    saySomething(){
        console.log('I am a child of the test class')
    }
}

const firstRectangle = new Rectangle('Rectangle 1',20)
console.log(firstRectangle)
firstRectangle.saySomething()

//overriding
//if method has the same name, it will use the child over the parent
firstRectangle.getDivBy5()
