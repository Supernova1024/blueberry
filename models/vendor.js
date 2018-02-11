const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vendorSchema = new Schema({
  tin: { type: String, required: true },      // tin = taxpayer id # EIN or SS#
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  paymentInfo: [{
  	year: {type: String},
  	amount: {type: String}
}]

 });

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;