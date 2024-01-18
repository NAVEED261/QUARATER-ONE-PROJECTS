import inquirer from 'inquirer';
import chalk from 'chalk';

interface Customer {
  id: number;
  name: string;
  balance: number;
}

class Bank {
  private customers: Customer[];

  constructor() {
    this.customers = [];
  }

  start(): void {
    this.showMainMenu();
  }

  private showMainMenu(): void {
    inquirer
      .prompt({
        type: 'list',
        name: 'action',
        message: 'Select an action:',
        choices: ['Create Customer', 'View Customer Details', 'Debit Amount', 'Credit Amount', 'Exit'],
      })
      .then((answer) => {
        switch (answer.action) {
          case 'Create Customer':
            this.createCustomer();
            break;
          case 'View Customer Details':
            this.viewCustomerDetails();
            break;
          case 'Debit Amount':
            this.debitAmount();
            break;
          case 'Credit Amount':
            this.creditAmount();
            break;
          case 'Exit':
            console.log('Exiting the bank application. Goodbye!');
            process.exit();
            break;
        }
      });
  }

  private createCustomer(): void {
    const customer: Customer = {
      id: this.customers.length + 1,
      name: 'Naveed', // Set the name to 'Naveed'
      balance: 10000, // Initial balance of 10,000 PKR
    };

    this.customers.push(customer);

    console.log(chalk.green(`Customer ${customer.name} created with ID: ${customer.id}`));
    console.log(chalk.green(`Bank: MCB Bank`)); // Show the bank name
    console.log(chalk.green(`Initial Balance: ${customer.balance} PKR`)); 
    this.showMainMenu();
  }

  private viewCustomerDetails(): void {
    inquirer
      .prompt({
        type: 'list',
        name: 'customerId',
        message: 'Select a customer:',
        choices: this.customers.map((customer) => ({
          name: customer.name,
          value: customer.id,
        })),
      })
      .then((answer) => {
        const selectedCustomer = this.customers.find((customer) => customer.id === answer.customerId);

        if (selectedCustomer) {
          console.log(chalk.blue(`Customer Details:`));
          console.log(`Name: ${selectedCustomer.name}`);
          console.log(`Balance: $${selectedCustomer.balance}`);
        } else {
          console.log(chalk.red('Customer not found.'));
        }

        this.showMainMenu();
      });
  }

  private debitAmount(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'customerId',
          message: 'Select a customer to debit amount:',
          choices: this.customers.map((customer) => ({
            name: customer.name,
            value: customer.id,
          })),
        },
        {
          type: 'number',
          name: 'amount',
          message: 'Enter the debit amount:',
        },
      ])
      .then((answer) => {
        const selectedCustomer = this.customers.find((customer) => customer.id === answer.customerId);

        if (selectedCustomer) {
          if (selectedCustomer.balance >= answer.amount) {
            selectedCustomer.balance -= answer.amount;
            console.log(chalk.green(`$${answer.amount} debited successfully.`));
            console.log(`New balance for ${selectedCustomer.name}: $${selectedCustomer.balance}`);
          } else {
            console.log(chalk.red('Insufficient funds.'));
          }
        } else {
          console.log(chalk.red('Customer not found.'));
        }

        this.showMainMenu();
      });
  }

  private creditAmount(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'customerId',
          message: 'Select a customer to credit amount:',
          choices: this.customers.map((customer) => ({
            name: customer.name,
            value: customer.id,
          })),
        },
        {
          type: 'number',
          name: 'amount',
          message: 'Enter the credit amount:',
        },
      ])
      .then((answer) => {
        const selectedCustomer = this.customers.find((customer) => customer.id === answer.customerId);

        if (selectedCustomer) {
          selectedCustomer.balance += answer.amount;
          console.log(chalk.green(`$${answer.amount} credited successfully.`));
          console.log(`New balance for ${selectedCustomer.name}: $${selectedCustomer.balance}`);
        } else {
          console.log(chalk.red('Customer not found.'));
        }

        this.showMainMenu();
      });
  }
}

const bank = new Bank();
bank.start();
