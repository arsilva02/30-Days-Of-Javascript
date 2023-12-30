console.log('Day 19 - Closures')

//Create a closure which has three inner functions
function threeFunc(){
    let start = 0
    function plusOne(){
        start ++
        return start
    }
    function minusOne(){
        start --
        return start
    }
    function timesFive(){
        start *= 5
        return start
    }
    return{
        plusOne:plusOne(),
        timesFive:timesFive(),
        minusOne:minusOne()

    }
}

const threeInners = threeFunc()
console.log(threeInners.plusOne)
console.log(threeInners.timesFive)
console.log(threeInners.minusOne)
