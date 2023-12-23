console.log('Exercises 2 - Day 10')
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

let A = new Set(a)
let B = new Set(b)


//Find a union b
let union = [...a,...b]
let unionSet = new Set(union)
console.log(unionSet)

//Find a intersection b
let intersection = a.filter((num)=> B.has(num))
let intSet = new Set(intersection)
console.log(intSet)

//find difference
let diff = a.filter((num)=> !B.has(num))
let diffSet = new Set(diff)
console.log(diffSet)