const mongoose = require('mongoose');

// Custmer Schema
const customerSchema = mongoose.Schema({
  name: {type: String, required: true, uppercase: true},
  accountNumber: {type: String, required: true, uppercase: true},
  balance: {type: Number, default: 0},
});

// Creating model and export
module.exports = mongoose.model('Customer', customerSchema);
