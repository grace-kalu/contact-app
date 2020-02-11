const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let contactSchema = new Schema(
  {
    name: {
      type: String
    },
    phoneNumber: {
      type: Number
    },
    email: {
      type: String
    },
    address: {
      type: String
    }
  },
  {
    collection: "contacts"
  }
);

module.exports = mongoose.model("Contact", contactSchema);
