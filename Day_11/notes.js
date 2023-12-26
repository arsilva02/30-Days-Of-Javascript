console.log('Day 11 - Notes')

//Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.
const numArrNotes = [1,2,3]
let [numOneNote, numTwoNote, numThreeNote] = numArrNotes
console.log(numOneNote, numTwoNote, numThreeNote) //  1 2 3

//If we like to skip on of the values in the array we use additional comma. The comma helps to omit the value at that specific index
let[firstNote, , thirdNote] = numArrNotes
console.log(firstNote,thirdNote) // only 1 and 3 were assigned

//We can use default value in case the value of array for that index is undefined:
let[oneNote,, ,, fourthNote = 4] = numArrNotes
console.log(fourthNote) //4
//We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...).
const numTo10Arr =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let[ANOTE,BNOTE,CNOTE,...restNOTE] = numTo10Arr
console.log(ANOTE,BNOTE,CNOTE,restNOTE)

//iteration
const fullStackNote = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  for(const[first,second,third] of fullStackNote){
    console.log(first,second,third)
  }
  //HTML CSS JS
//Node Express MongoDB

//Destructuring Object
const rectNote = {widthNote:20, heightNote:10,areaNote:200}
let {widthNote, heightNote, areaNote, perimeterNote} = rectNote //these should be the same as they key
console.log(widthNote, heightNote, areaNote, perimeterNote) //20 10 200 undefined

//you can also rename during structuring and give default values!
let {widthNote: wN, heightNote: hN, areaNote: aN, perimeterNote: pN = 60} = rectNote
console.log(wN, hN, aN, pN) //20 10 200 60

//Object parameter without destructuring
const calcPerimNote = rectangle =>{
    return 2 *(rectangle.widthNote + rectangle.heightNote)
}

//or with
const calcPerimDesc = ({widthNote, heightNote}) =>{
    return 2*(widthNote + heightNote)
}

console.log(calcPerimNote(rectNote)) //60
console.log(calcPerimDesc(rectNote)) //60, note how it assigns automatically

//destructing object during iteration
const todoListNote = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
    ]
for (const {task,time, completed} of todoListNote) {
    console.log(task, time, completed)
}
//Prepare JS Test 4/1/2020 8:30 true
//Give JS Test 4/1/2020 10:00 false
//Assess Test Result 4/1/2020 1:00 false

//Spread or Rest Operator
//spread copies array that wasnt assigned
//we can also copy objects
const copiedRectNote= {...rectNote,name:'new rectangle'} //add/change properties
console.log(copiedRectNote)