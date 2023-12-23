console.log('Day 10 - Notes')
//Set is a collection of elements. Set can only contains unique elements. Let us see how to create a set in the section below.

const langNotes = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  const setOfLanguagesNotes = new Set(langNotes)
  console.log(setOfLanguagesNotes)//Set(4) {"English", "Finnish", "French", "Spanish"}

//add

setOfLanguagesNotes.add('Japanese')
console.log(setOfLanguagesNotes)
console.log(setOfLanguagesNotes.delete('French'))
console.log(setOfLanguagesNotes.size)
console.log(setOfLanguagesNotes.has('Japanese')) // true
setOfLanguagesNotes.clear()
console.log(setOfLanguagesNotes)

//union
const langNotes2 = new Set(['Korean','Mandarin'])
const newLang = [...langNotes,...langNotes2]
console.log(newLang)

//intersection
langNotes2.add('Japanese')
console.log(langNotes2)

const langInter = new Set(
    langNotes.filter((lang)=> langNotes2.has(lang))
)

console.log(langInter)