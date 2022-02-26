import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  phone: Number,
  mobile: Number,
});

const contact = mongoose.model("contact", schema);

export default contact;
