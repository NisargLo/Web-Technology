const mongoose = require('mongoose');
const schema = mongoose.Schema({
     ID: {
          type: Number,
          required: true
     },
     Name: String,
     Class: String,
     Roll_No: Number
});
module.exports = mongoose.model('Students', schema);