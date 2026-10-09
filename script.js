console.log("Welcome to Money Management System");

let monthlyBudget = 15000;
const currency = "LKR";
console.log(monthlyBudget);
console.log(currency);

let income = 15000;
let expense = 430;
let description = "Monthly salary";
let isIncome = true;
let transactionDate = null;

function calculateBalance(income, expense){
    let result = income - expense;
    return result;
}

let currentBalance = calculateBalance(income, expense);
console.log(currentBalance);

const transactions = [

    {
        id: 1,
        type: "Income",
        category: "Salary",
        description: "Monthly salary",
        amount: 15000,
        date: "2026-10-01"
    },

    {
        id: 2,
        type: "Expense",
        category: "Food",
        description: "Lunch",
        amount: 430,
        date: "2026-10-02"
    }

];

const pageTitle = document.getElementById("page-title");
console.log(pageTitle);
pageTitle.textContent = "Money Management System";

const balanceDisplay = document.getElementById("current-balance");
balanceDisplay.textContent = "Rs. 14,570.00";


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

    console.log("Income Amount:", amount);
    console.log("Income Source:", source);
    console.log("Income Date:", date);
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

    console.log("Expense Amount:", amount);
    console.log("Expense Category:", category);
    console.log("Expense Description:", description);
    console.log("Expense Date:", date);
});

