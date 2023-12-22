console.log('Day 8 - Exercises 3')
//Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome,
// addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
    firstName: "Arden",
    lastName: "Silva",
    incomes:{barista: 1000, TA : 120, research: 200},
    expenses:{school: 400, coffee: 30} ,
    totalIncome: function(){
        sum = 0
        let values = Object.values(this.incomes);
        for (let i = 0; i < values.length; i++) {
            sum += values[i]
        }
        return sum
    },
    totalExpense: function(){
        sum = 0
        let values = Object.values(this.expenses)
        for (let i = 0; i < values.length; i++) {
            sum += values[i]
        }
        return sum
    },
    accountInfo: function(){
        return (`${this.firstName} ${this.lastName}`)
    },
    addIncome: function(incomeDesc, incomeVal){
        this.incomes[incomeDesc] = incomeVal
    },
    addExpense: function(incomeDesc, incomeVal){
        this.expenses[incomeDesc] = incomeVal
    },
    accountBalance: function(){
        return (this.totalIncome()-this.totalExpense())
    }
}

console.log(personAccount.accountInfo())
console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())
console.log(personAccount.accountBalance())
personAccount.addExpense('Gas',50)
console.log(personAccount.totalExpense())
console.log(personAccount.accountBalance())


//**** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
const users3 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]


//a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
function signUp(username, email, password){
    for (const user in users3){
        if(users3[user].username == username){
            console.log('This user already exists in this database.')
            break
        } }
            
        let date = new Date()   
        let chars = "abcdefghiklmnopqrstuvwxyz" 
        let id = []; 
        for (let i = 0; i < 6; i++) {
            id.push(chars[Math.floor(Math.random() * chars.length)])
            }
        id = id.join("");
        users3.push({
                _id: id,
                username: username,
                email: email,
                password: password,
                createdAt: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
                isLoggedIn: "false"
            })

    
}

(signUp('Arden','arsilva@utexas.edu','Password123'))

console.log(users3)
//b. Create a function called signIn which allows user to sign in to the application
function signIn(username, password){
    for (user in users3){
        if (users3[user].username === username && users3[user].password === password){
            users3[user].isLoggedIn = true
            return('Log in successful.')
        }
    }
    return('Username and password combo not found.')
}
console.log(signIn('Arden','password123'))
console.log(signIn('Arden','Password123'))

console.log(users3)

//The products array has three elements and each of them has six properties. 
//a. Create a function called rateProduct which rates the product 
function rateProduct(userID, rating, productID){
    products[productID].ratings.push({userId: userID, rate:rating})
}

rateProduct("eefamr",5,0)

//b. Create a function called averageRating which calculate the average rating of a product
function averageRating(productID){
    let numOfRates = 0
    let totalRates = 0
    for (review in products[productID].ratings){
        totalRates += (products[productID].ratings[review].rate)
        numOfRates += 1
    }
    return totalRates/numOfRates
}

console.log(averageRating(0))

//Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

function likeProduct(userID, productID){
    const prod = products[productID]
    let isReviewed = prod.likes.includes(userID)
    if(isReviewed){
        let indexOfUsr = prod.likes.indexOf(userID)
        prod.likes.splice(indexOfUsr)
    } else{
        prod.likes.push(userID)
    }
}

//testing
console.log(products[1].likes)
likeProduct('fg12cy',1)
console.log(products[1].likes)
likeProduct('fg12cy',1)
console.log(products[1].likes)
