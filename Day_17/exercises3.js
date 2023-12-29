console.log('Day 17 - Exercise 3')
localStorage.clear()

//Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,
//addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
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

