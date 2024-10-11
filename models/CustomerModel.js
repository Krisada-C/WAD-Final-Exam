const mongoose = require('mongoose');

// Create Customer Schema
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  memberNumber: {
    type: String,
    required: true,
    unique: true,
  },
  interests: {
    type: [String],  // Array of strings to store multiple interests
    required: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

// Create Customer Model
const Customer = mongoose.models.Customer || mongoose.model('Customer', customerSchema);

module.exports = Customer;
