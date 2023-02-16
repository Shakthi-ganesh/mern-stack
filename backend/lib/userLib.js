const userModel = require("../models/userModel");

module.exports.createFirstUser = async function(callback) {
    try {
        var user = {
            userName: "shakthiganesh",
            yearOfGraduation: 2024,
        };
        var newUser = new userModel(user);
        var result = await newUser.save();
        callback(null, result);
    } catch (err) {
        callback(err, null);
    }
}

module.exports.createUser = async function(user, callback) {
    try {
        var newUser = new userModel(user);
        var result = await newUser.save();
        callback(null, result);
    } catch (err) {
        callback(err, null);
    }
}


module.exports.getAllUsers = async function(callback) {
    try {
        var users = await userModel.find({});
        callback(null, users);
    } catch (err) {
        callback(err, null);
    }
}

module.exports.getUserByUserName = async function(userName, callback) {
    try {
        var query = { userName: userName };
        var user = await userModel.find(query);
        callback(null, user);
    } catch (err) {
        callback(err, null);
    }
}

module.exports.updateUserByUserName = async function(userName, newValues, callback) {
    try {
        var query = { userName: userName };
        var updatedUser = await userModel.findOneAndUpdate(query, newValues, { new: true });
        callback(null, updatedUser);
    } catch (err) {
        callback(err, null);
    }
}

module.exports.deleteUserByUserName = async function(userName, callback) {
    try {
        var query = { userName: userName };
        var deletedUser = await userModel.findOneAndDelete(query);
        callback(null, deletedUser);
    } catch (err) {
        callback(err, null);
    }
}