console.log('Day 18 - Exercises 3')
//Read the cats api and find the average weight of cat in metric unit.
fetch(catsAPI)
.then(response => response.json())
.then(data => {
    const catData = []
    let result = 0

    data.map(object => {
        object.weight.metric.split(' ').forEach(weight=> {
            const num = Number(weight)
            if(!num) return
            if(catData.includes(weight)) return
            catData.push(num)
        })

    const sum = catData.reduce((acc, curr)=> acc+curr, 0)
    result = (sum/catData.length)
    })

    console.log(result)
})
.catch(error => console.log(error)) //4.708955223880597

//Read the countries api and find out the 10 largest countries
fetch(countriesAPI)
    .then(response =>response.json())
    .then(data =>{
        const largestCountries= data.sort((a,b)=>{
            if(a.area>b.area) return -1
            if(a.area<b.area) return 1
            return 0
        }).slice(0,10)
        console.log(largestCountries)
    }).catch(error => console.log(error))
    
//Read the countries api and count total number of languages in the world used as officials.
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        const uniqueLangauges = new Set()
        for (item in data){
            for (lang of data[item].languages){
                uniqueLangauges.add(lang.name)
            }
        }
        let langCount = uniqueLangauges.size
        console.log(`There are ${langCount} offical country langauges:`,uniqueLangauges)
    }
    ).catch(error => console.log(error)) //123