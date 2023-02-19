const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    isCompleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    isDeleted: { type: Boolean, default: false },
  
});

module.exports = mongoose.model("user", userSchema);