console.log('Exercise - level 3')


//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let lovePattern = /love/gi
let loveSen = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(loveSen.match(lovePattern)) // returns a list

//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let bcPattern = /because/gi
let bcSen = 'You cannot end a sentence with because because because is a conjunction'
console.log(bcSen.match(bcPattern)) // returns a list


//Clean the following text and find the most frequent word (hint, use replace and regular expressions).

let cleanSen = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is \
no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re \
interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'


cleanSen = cleanSen.replace(/%/g, '')
cleanSen = cleanSen.replace(/@/g, '')
cleanSen = cleanSen.replace('$', '')
cleanSen = cleanSen.replace('$', '')
cleanSen = cleanSen.replace('$', '')
cleanSen = cleanSen.replace('$', '')
cleanSen = cleanSen.replace(/;/g, '')
cleanSen = cleanSen.replace(/&/g, '')
cleanSen = cleanSen.replace(/#/g, '')

console.log(cleanSen)



//Calculate the total annual income of the person 
//by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let salaryTxt = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let annualSal = salaryTxt.match(/\d+/g)
let sal = Number(annualSal[0])*12 + Number(annualSal[1]) + Number(annualSal[2])*12
console.log(`His annual salary is therefore ${sal}`)
