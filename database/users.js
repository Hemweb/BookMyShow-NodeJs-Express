const mongoose = require("mongoose");

//create movie schema
const UserSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;