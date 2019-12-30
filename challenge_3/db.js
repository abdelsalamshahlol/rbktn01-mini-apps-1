const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/xyzStore', { useNewUrlParser: true }).once('open', () => {
  console.log('connected to db')
})

const orderSchema = new Mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address1: { type: String, required: true },
  address2: { type: String },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: Number, required: true },
  cc_number: { type: Number, required: true },
  expiry: { type: Date, required: true },
  cvv: { type: Number, required: true },
  billing_zip: { type: Number, required: true },
  created_at: { type: Date, default: Date.now }
});


// module.exports