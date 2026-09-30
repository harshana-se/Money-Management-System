#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Transaction{
    int id;
    char type[20];
    char category[30];
    char description[150];
    double amount;
    char date[20];
};

struct Transaction transactions[100];
void addIncome();
int transactionCount = 0;
void addExpense();
void displayTransactionsDetails();
void displayBalance();
void displayMenu();

int main(){

    int choice;

    do{
        displayMenu();

        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch(choice){

            case 1:
               addIncome();
               break;

            case 2:
               addExpense();
               break;

            case 3:
                displayTransactionsDetails();
                break;

            case 4:
                displayBalance();
                break;

            case 5:
                printf("Set Monthly Budget\n");
                break;

            case 6:
                printf("View Budget\n");
                break;

            case 7:
                printf("Exiting\n");
                break;

            default:
                printf("Invalid Choice!\n");
        }
    } while(choice != 7);

    return 0;
}

//display output
void displayMenu(){
    printf("\n=============================\n");
    printf("   MONEY MANAGEMENT SYSTEM\n");
    printf("=============================\n");
    printf("1. Add Income\n");
    printf("2. Add Expense\n");
    printf("3. View Transactions\n");
    printf("4. View Balance\n");
    printf("5. Set Monthly Budget\n");
    printf("6. View Budget\n");
    printf("7. Exit\n");
    printf("=============================\n");
}

//add income & store transaction data
void addIncome(){

    double amount;
    char source[50];
    char date[20];

    printf("Enter income amount: ");
    scanf("%lf",&amount);
    printf("Enter income source: ");
    scanf(" %49[^\n]",source);
    printf("Enter date: ");
    scanf("%19s",date);

    //create transaction ID
    transactions[transactionCount].id = transactionCount + 1;

    //save data into Transaction
    strcpy(transactions[transactionCount].type, "Income");
    strcpy(transactions[transactionCount].category, source);
    transactions[transactionCount].amount = amount;
    strcpy(transactions[transactionCount].date, date);

    transactionCount++;

    printf("Income added successfully!\n");
}

//add expences & store transaction data
void addExpense(){

    double amount;
    char category[50];
    char description[150];
    char date[20];

    printf("Enter expences amount: ");
    scanf("%lf",&amount);
    printf("Enter expences category: ");
    scanf("%49s",category);
    printf("Enter description: ");
    scanf(" %149[^\n]",description);
    printf("Enter date: ");
    scanf("%19s",date);

    //create transaction ID
    transactions[transactionCount].id = transactionCount + 1;

    //save data into Transaction
    strcpy(transactions[transactionCount].type, "Expense");
    strcpy(transactions[transactionCount].category, category);
    strcpy(transactions[transactionCount].description, description);
    transactions[transactionCount].amount = amount;
    strcpy(transactions[transactionCount].date, date);

    transactionCount++;

    printf("Expense added successfully!\n");
}

//display Transactions
void displayTransactionsDetails(){

    if(transactionCount == 0){
        printf("No transactions found.\n");
        return;
    }         

    printf("\n=============================\n");
    printf("     ALL TRANSACTIONS\n");
    printf("============================\n");

    for(int i=0; i<transactionCount; i++){
        printf("ID: %d\n",transactions[i].id);
        printf("Type: %s\n",transactions[i].type);
        printf("Category: %s\n",transactions[i].category);
    

        if(strcmp(transactions[i].type, "Expense") == 0){
              printf("Description: %s\n",transactions[i].description);
         }

        printf("Amount: %.2f\n",transactions[i].amount);
        printf("Date: %s\n",transactions[i].date);
        printf("---------------------------------\n");
    }
}

//calculate & display Balance
void displayBalance(){

    double amount;
    double totalIncome = 0;
    double totalExpense = 0;
    
    printf("\n=============================\n");
    printf("          BALANCE\n");
    printf("============================\n");

    for(int i=0; i<transactionCount; i++){

        if(strcmp(transactions[i].type, "Income")==0){
            totalIncome += transactions[i].amount;
        }

        if(strcmp(transactions[i].type, "Expense")==0){
            totalExpense += transactions[i].amount;
        }
    }

    double balance = totalIncome - totalExpense;

    printf("Total Income: %.2f\n",totalIncome);
    printf("Total Expense: %.2f\n",totalExpense);
    printf("Current Balance: %.2f\n",balance);
    printf("============================\n");
}