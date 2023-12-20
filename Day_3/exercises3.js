console.log('Exercises - 3')

let time = new Date()
let tYear = time.getFullYear()
let tMonth = time.getMonth()+1
let tDate = time.getDate()
let tHour = time.getHours()
let tMinute = time.getMinutes()

let tHourSingle = tHour < 10
let tMinuteSingle = tMinute < 10

tHourSingle
    ? tMinuteSingle
        ? console.log(`${tYear}-${tMonth}-${tDate} 0${tHour}:0${tMinute}`)
        : console.log(`${tYear}-${tMonth}-${tDate} 0${tHour}:${tMinute}`)
    : tMinuteSingle
        ? console.log(`${tYear}-${tMonth}-${tDate} ${tHour}:0${tMinute}`)
        : console.log(`${tYear}-${tMonth}-${tDate} ${tHour}:${tMinute}`)

