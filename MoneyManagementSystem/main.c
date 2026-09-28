#include <stdio.h>
#include <stdlib.h>

struct Transaction{
    int id;
    char type[20];
    char category[30];
    char description[150];
    double amount;
    char date[20];
};

struct Transaction transactions[100];
int transactionsCount = 0;
void displayMenu();

int main(){

    int choice;

    do{
        displayMenu();

        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch(choice){

            case 1:
               printf("Add Income\n");
               break;

            case 2:
               printf("Add Expense\n");
               break;

            case 3:
                printf("View Transactions\n");
                break;

            case 4:
                printf("View Balance\n");
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