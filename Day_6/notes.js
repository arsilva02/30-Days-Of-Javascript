console.log('Day Six - Notes')


//lets see how counting works
for (let i = 0; i <= 5; i++){
    console.log(i)
}

// 0 1 2 3 4 5
//as we can see, it increments by 1 and is inclusive

for (i = 5; i >= 0; i--)
{
    console.log(i)
}

for (let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}

const notesCountries =  ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newNotesArr = []
for(i = 0; i<notesCountries.length;i++) //note here that there is no equal to length since length is +1 of the last index
{
    newNotesArr.push(notesCountries[i].toUpperCase())
}
console.log(newNotesArr)

const notesNumbers = [1,2,3,4,5]
let notesSum = 0
for(i =0; i<notesNumbers.length;i++)
{
    notesSum += notesNumbers[i]
}
console.log(notesSum) //15

console.log('while loops')
//while loops
i = 0
while(i<=5){
    console.log(i)
    i++ //note here that we need to decalre inside while loops
}


console.log('do while loops')
//we can also do a do while loops!
i = 0
do{
    console.log(i)
    i++
} while(i<=5) //keeps while and do clean

//for of
console.log('for of loops')
//we use this for arrays!
for (const numNotes of notesNumbers){
    console.log(numNotes)
}
for (const countriesNotes of notesCountries){
    console.log(countriesNotes)
}


console.log('breaks')
//breaks are used to interrupt a loop
for(i=0;i<= 5;i++){
    if(i ==3){
        break
    }
    console.log(i)
} //only 0 1 2 were printed..

//continue just skips that one iteration instead of all after!
console.log('continue')
for(i=0;i<= 5;i++){
    if(i ==3){
        continue
    }
    console.log(i)
} //0 1 2 4 5