const mongoose = require('mongoose');

// Importing model
const Customer = require('./models/customerModel');

// creating connection with mongodb
mongoose.set('strictQuery', true);
const connection = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(
      'mongodb://localhost:27017/bankingapp',
      connectionParams
    );
    // console.log('Application is connected to database');
  } catch (error) {
    console.log('Database connection failed', error);
  }
};
connection();

// Create Account
const createAccount = async (customer) => {
  try {
    const account = await new Customer(customer).save();
    console.log(`${account.name}'s account created successfully`);
  } catch (error) {
    console.log(error);
  }
  //   connection.close();
};

// Deposit Amount
const depositAmmount = async ({accountNumber, amount}) => {
  try {
    await Customer.updateOne({accountNumber}, {$inc: {balance: amount}});
    console.log(`${amount} Rupees deposit successfully`);
  } catch (error) {
    console.log(error);
  }
};

// Withdraw amount
const withdrawAmount = async ({accountNumber, amount}) => {
  try {
    const account = await Customer.findOne({accountNumber});
    if (account.balance >= amount) {
      account.balance -= amount;
      account.save();
      console.log(`${amount} Rupees withdraw successfully`);
    } else {
      console.log(
        `You don't have inough balance \n your balance is ${account.balance}`
      );
    }
  } catch (error) {
    console.log(error);
  }
};

// Show balance
const showBalance = async ({accountNumber}) => {
  try {
    const account = await Customer.findOne({accountNumber});
    console.log(account.balance);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {createAccount, depositAmmount, withdrawAmount, showBalance};
