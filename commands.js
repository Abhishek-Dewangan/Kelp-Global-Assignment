// h
const program = require('commander');
// const {prompt} = require('inquirer');
const {
  createAccount,
  depositAmmount,
  withdrawAmount,
  showBalance,
} = require('./index');

program
  .command('CREATE <accountNumber> <name>')
  //   .alias('c')
  .description('Create an account')
  .action((accountNumber, name) => {
    createAccount({name, accountNumber});
  });

program
  .command('DEPOSIT <accountNumber> <amount>')
  //   .alias('d')
  .description('Deposit an amount')
  .action((accountNumber, amount) => {
    depositAmmount({accountNumber, amount});
  });

program
  .command('WITHDRAW <accountNumber> <amount>')
  //   .alias('w')
  .description('Withdraw an amount')
  .action((accountNumber, amount) => {
    withdrawAmount({accountNumber, amount});
  });

program
  .command('BALANCE <accountNumber')
  //   .alias('b')
  .description('Check account balance')
  .action((accountNumber) => {
    showBalance({accountNumber});
  });

program.parse(process.argv);
