console.log('Dau 19 - Closures'
)

//Create a closure which has one inner function
function outside() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outside()

console.log(innerFunc()) //1