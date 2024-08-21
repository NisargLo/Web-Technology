const mongoose = require('mongoose');
const schema = mongoose.Schema({
     ID: {
          type: Number,
          required: true
     },
     Name: String,
     Category: String,
     Expiry_Date: Date  //('2024-08-20')
});
module.exports = mongoose.model('Products', schema);