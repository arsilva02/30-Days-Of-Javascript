console.log('Day 19 - Closures')

//Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. 
//It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. 
//Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
const aaa = {

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

function personAccount(){
    firstName = 'Arden'
    lastName = 'Silva'
    incomes = [{barista: 1000}, {TA : 120},{research: 200}]
    expenses = [{school: 400}, {coffee: 30}]

    function totalIncome(){
        let sum = 0
        for (item of incomes){
            for(val in item){
                sum += item[val]
            }
        }
        return sum
    }
    function totalExpense(){
        let sum = 0
        for (item of expenses){
            for(val in item){
                console.log(item[val])
                sum += item[val]
            }
        }
        return sum
    }

    function accountInfo(){
        return (`${firstName} ${lastName}`)
    }
    
    function addIncome(incomeDesc, incomeVal){
        incomes.push({incomeDesc:incomeVal})
        console.log(`${incomeDesc} has been added with value of ${incomeVal}`)
        return incomes

    }
    function addExpense(incomeDesc, incomeVal){
        expenses.push({incomeDesc:incomeVal})
        console.log(`${incomeDesc} has been added with value of ${incomeVal}`)
        return expenses

    }
    function accountBalance() {
        return totalIncome() - totalExpense()
    }

    return {
        totalIncome:totalIncome(),
        totalExpense:totalExpense(),
        accountInfo:accountInfo(),
        addIncome: addIncome('passive',300),
        addExpense: addExpense('passive',40),
        accountBalance: accountBalance()

    }

}

const personAccountOut = personAccount()
console.log(personAccountOut.totalIncome)
console.log(personAccountOut.totalExpense)
console.log(personAccountOut.accountInfo)
personAccountOut.addIncome
console.log(personAccountOut.totalExpense)
console.log(personAccountOut.accountBalance)



