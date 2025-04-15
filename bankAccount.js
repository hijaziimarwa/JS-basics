class BankAccount{
    constructor(ownerName,initialBalance){
        this.ownerName = ownerName;
        this.balance = initialBalance;
    }

    deposit(amount){
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}`);
    }

    withdraw(amount){
        if (amount > this.balance) {
            console.log(`Insufficient funds. Cannot withdraw ${amount}`);
        } else {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance is ${this.balance}`);
        }
    }

    transfer(amount, targetAccount){
        if (amount > this.balance) {
            console.log(`Insufficient funds. Cannot transfer ${amount}`);
        } else {
            this.balance -= amount;
            targetAccount.deposit(amount);
            console.log(`Transferred ${amount} to ${targetAccount.ownerName}. New balance is ${this.balance}`);
        }
    }
    getSummary(){
        return `Account owner: ${this.ownerName}, Balance: ${this.balance}`;

    }


}

const account1 = new BankAccount('Alice', 1000);
const account2 = new BankAccount('Bob', 500);
console.log(account1.getSummary());
console.log(account2.getSummary());
account1.deposit(200);
account1.withdraw(100);
account1.transfer(300, account2);
console.log(account1.getSummary());
console.log(account2.getSummary());