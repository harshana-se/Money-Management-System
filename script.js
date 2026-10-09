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
                                         <td colspan="6"> NO transaction found.</td> 
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

