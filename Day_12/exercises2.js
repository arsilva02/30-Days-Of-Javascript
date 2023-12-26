console.log('Day 12 - Exercises 2')
//Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
function tenMostFrequentWords(paragraph, length = paragraph.length){
    const frq = []
    const spacePattern = /[^ .]+/g
    const match = paragraph.match(spacePattern)
    
    for (word of match){
        const wordsFound = []
        for (item of frq){
            wordsFound.push(item.word)
        }
        if(!wordsFound.includes(word)){
            frq.push({word:word, count:1})
        } else{
            for (item of frq){
                if(item.word === word){item.count = 1 + item.count}
            } }
    }
    
    frq.sort((a,b)=>{
        if(a.count > b.count) return -1
        if(a.count < b.count) return 1
        return 0
    })
    return(frq.slice(0,length))
}

console.log(tenMostFrequentWords(paragraph))
console.log(tenMostFrequentWords(paragraph,10))