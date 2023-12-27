console.log('Day 15 - Exercises 3')
//Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
class Statistics{
    constructor(sample){
        this.sample = sample
    }

    count(){
        return this.sample.length
    }
    sum(){
        return this.sample.reduce((acc,curr)=> acc+ curr, 0)
    }
    min(){
        return this.sample.reduce((min, curr)=>{ 
            min = min < curr ? min : curr
        return min})
    }
    max(){
        return this.sample.reduce((max, curr)=> {max = max < curr? curr:max
        return max})
    }
    range(){
        return(Math.abs(this.min()-this.max()))
    }
    mean(){
        return this.sum()/this.sample.length
        }
    median(){
        const sortedSample = this.sample.sort((x,y)=>x-y)
        let len = sortedSample.length
        if(len%2===0){ 
            return (sortedSample[parseInt(len/2)] +sortedSample[parseInt(len/2)-1])
        } else{
            return (sortedSample[parseInt(len/2)])        }
    }
    mode(){
        return Object.entries(this.sample.reduce((most, curr)=>{
            most[curr] = (most[curr]|| 0) + 1
            return most
        }, {})).sort((a, b) => a[1] - b[1]).pop()
    }
    var() {
        return (this.sample.reduce((v, curr) => 
           v + (curr-this.mean())*(curr-this.mean()) , 0)) / (this.sample.length)
      }
    std(){
        return Math.sqrt(this.var())
    }
}

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const statistics = new Statistics(ages)
console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 29.76
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2


