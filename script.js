//income form
const incomeAmountInput = document.getElementById("income_amount");
console.log(incomeAmountInput.value);

const incomeForm = document.getElementById("income-form");

incomeForm.addEventListener("submit",function(event){
    event.preventDefault();

    const amount = Number(incomeAmountInput.value);

    if(amount <= 0){
        console.log("Please enter a valid amount!");
        return;
    }

    const source = document.getElementById("income_source").value;
    const date = document.getElementById("income_date").value;

    if(source.trim() === ""){
        console.log("Please enter an income source!");
        return;
    }

    if(date ===""){
        console.log("Please select an income date!");
        return;
    }

    const transaction = {
        id: transactions.length +1,
        type: "Income",
        category: source.trim(),
        description: source.trim(),
        amount: amount,
        date: date
    };
    transactions.push(transaction);
    updateDashboard();
    renderTransactions();
    incomeForm.reset();
});


//expenses form
const expenseForm = document.getElementById("expense-form");

expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const amount = Number(document.getElementById("expense_amount").value);

    if(amount <= 0){
        console.log("Please enter a valid expense amount!");
        return;
    }

    const category = document.getElementById("expense_category").value;

    if(category.trim()===""){
        console.log("Please enter an expense category!");
        return;
    }

    const description = document.getElementById("expense_description").value;

    if(description.trim()===""){
        console.log("Please enter an expense description!")
        return;
    }

    const date = document.getElementById("expense_date").value;

    if(date===""){
        console.log("Please enter an expense date");
        return;
    }

    const transaction ={
        id: transactions.length +1,
        type: "Expense",
        category: category.trim(),
        description: description.trim(),
        amount: amount,
        date: date
    };
    transactions.push(transaction);
    updateDashboard();
    renderTransactions();
    expenseForm.reset();
});


//transactions store
const transactions = [];

const transactionList = document.getElementById("transaction-list");

function renderTransactions(){
    transactionList.innerHTML = "";

    if(transactions.length === 0){
        transactionList.innerHTML = `<tr>
                                         <td colspan="6"> No transactions found.</td> 
                                     </tr>`;
        return;
    }

    transactions.forEach(function(transaction){
        const row = document.createElement("tr");

        row.innerHTML = `<td>${transaction.id}</td>
                         <td>${transaction.type}</td>
                         <td>${transaction.category}</td>
                         <td>${transaction.description}</td>
                         <td>${transaction.amount}</td>
                         <td>${transaction.date}</td>`;
        
        transactionList.appendChild(row);
    });
}


//calculate total Income
function calculateTotalIncome(){
    return transactions.reduce(function(total, transaction){
        if(transaction.type === "Income"){
            return total + transaction.amount;
        }
        return total;
    },0);
}


//calculate total Expense
function calculateTotalExpense(){
    return transactions.reduce(function(total, transaction){
        if(transaction.type === "Expense"){
            return total + transaction.amount;
        }
        return total;
    },0);
}


//calculate Balance
function calculateBalance(){
    return calculateTotalIncome() - calculateTotalExpense();
}


//calculate remaining Budget
function calculateRemainingBudget(monthlyBudget){
    return monthlyBudget - calculateTotalExpense();
}


//select card
const currentBalanceElement = document.getElementById("current-balance");
const totalIncomeElement = document.getElementById("total-income");
const totalExpenseElement = document.getElementById("total-expense");
const remainingBudgetElement = document.getElementById("remaining-budget");


//dashboard Update
function updateDashboard(){
    const totalIncome = calculateTotalIncome();
    const totalExpenses = calculateTotalExpense();
    const balance = calculateBalance();

    const monthlyBudget = Number(
        monthlyBudgetElement.textContent.replace("Rs.","").trim()
    );
    const remainingBudget = calculateRemainingBudget(monthlyBudget);
    
    monthlyBudgetElement.textContent = "Rs. " + monthlyBudget.toFixed(2);
    currentBalanceElement.textContent = "Rs. " + balance.toFixed(2);
    totalIncomeElement.textContent = "Rs. " + totalIncome.toFixed(2);
    totalExpenseElement.textContent = "Rs. " + totalExpenses.toFixed(2);
    remainingBudgetElement.textContent = "Rs. " + remainingBudget.toFixed(2);
    budgetTotalExpensesElement.textContent = "Rs. " + totalExpenses.toFixed(2);
    budgetRemainingElement.textContent = "Rs. " + remainingBudget.toFixed(2);
} 


//select budget card 
const monthlyBudgetElement = document.getElementById("monthly-budget");
const budgetTotalExpensesElement = document.getElementById("budget-total-expenses");
const budgetRemainingElement = document.getElementById("budget-remaining");

updateDashboard();