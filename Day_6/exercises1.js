console.log('Day 6 - Exercises 1')

//lets initalize!
let i = 0
const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

 
  //Iterate 0 to 10 using for loop, do the same using while and do while loop
console.log('for loop')
  for (i = 0; i <= 10; i++){
    console.log(i)
}

console.log('while loop')
i = 0
while (i <= 10 ){
    console.log(i)
    i++
}

console.log('do while loop')
i = 0
do{
    console.log(i)
    i++
}while (i <= 10 )

//Iterate 10 to 0 using for loop, do the same using while and do while loop

console.log('for loop')
  for (i = 10; i >= 0; i--){
    console.log(i)
}

console.log('while loop')
i = 10
while (i >= 0){
    console.log(i)
    i--
}

console.log('do while loop')
i = 10
do{
    console.log(i)
    i--
}while (i >= 0 )

console.log('Iterate 0 to n using for loop')
//Iterate 0 to n using for loop
let n = 5
for(i = 0; i <= n;i++){
    console.log(i)
}

//Write a loop that makes the following pattern using console.log():
console.log('for loop')
  for (i = 1; i <= 7; i++){
    console.log('#'.repeat(i))
}
//Use loop to print the following pattern:
for ( i = 0; i <= 10; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}

//Using loop print the following pattern

console.log(`i\ti^2\ti^3`)
for ( i = 0; i <= 10; i++){
    console.log(`${i}\t${i*i}\t${i * i*i}`)
}

//Use for loop to iterate from 0 to 100 and print only even numbers
for ( i = 0; i <= 100; i++){
    if(i%2 !== 0){
        continue
    }
    console.log(i)
}

//Use for loop to iterate from 0 to 100 and print only odd numbers
for ( i = 0; i <= 100; i++){
    if(i%2 === 0){
        continue
    }
    console.log(i)
}


let prime = []; //put prime out here so it does not reassign
for( i = 3; i < 100; i++)
{

    let isPrime = true; 
    for(let j = 2; j < i; j++) //start j at 2
    {
        let p = i % j;
        if(p == 0)
        {
            isPrime = false;
            break;
        }
    }
    if(isPrime) prime.push(i); 
}
console.log(prime)

//Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0
for ( i = 0; i <= 100; i++){
    sum+= i
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`)

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let evenSum = 0
let oddSum = 0
for ( i = 0; i <= 100; i++){
    if(i%2 === 0){
        evenSum+= i
    } else {oddSum+= i}
}
console.log(`The sume of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}.`)

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let sumArr = [0,0]
for ( i = 0; i <= 100; i++){
    if(i%2 === 0){
        sumArr[0]+= i
    } else {sumArr[1]+= i}
}
console.log(`The sume of all evens from 0 to 100 is ${sumArr[0]}. And the sum of all odds from 0 to 100 is ${sumArr[1]}.`)
console.log(sumArr)

//Develop a small script which generate array of 5 random numbers
let ranArr = Array()
for ( i = 0; i <= 5; i++){
    ranArr[i] =  Math.floor(Math.random () * 10) 
}

console.log(ranArr)
//Develop a small script which generate array of 5 random numbers and the numbers must be unique
let uniqueRanArray = Array()
for ( i = 0; i <= 5; i++){
    let isUnique = false

    while(!isUnique){
        let ranNum =  Math.floor(Math.random () * 10) 

        if (uniqueRanArray.includes(ranNum)){
        continue} else {isUnique = true
            uniqueRanArray[i] = ranNum
}
    }

}

console.log(uniqueRanArray)

//Develop a small script which generate a six characters random id:
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const uniqueID = Array ()
for(i=0;i<5;i++){
    uniqueID[i] = characters.charAt(Math.floor(Math.random() * characters.length))
}
console.log(uniqueID.join(""))
