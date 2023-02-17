const userModel = require("../models/userModel");

module.exports.getAllUsers = async function(callBack) {
    try{
        var users = await userModel.find({isDeleted : false});
        callBack(null,users);
    }
    catch(err){
        callBack(err , null);
    }
}

module.exports.creatFirstUser = async function(callBack) {
    try{
        var user = {
            userName : "shakthiganesh",
            yearOfGraduation : 2024

        };
        var newUser = new userModel(user);
        var result = await newUser.save();
        callBack(null,result);
    }
    catch(err){
        callBack(err , null);
    }
}

module.exports.creatUser = async function(user,callBack) {
    try{
       
        var newUser = new userModel(user);
        var result = await newUser.save();
        callBack(null,result);
    }
    catch(err){
        callBack(err , null);
    }
}

module.exports.updateUser = async function(userName,data,callBack) {
    try {
        var query = {
            userName : "shakthiiiii"
        };

        var result = await userModel.updateOne(query, data);
        callBack(null,result);
    }
    catch(err){
        callBack(err,null);
    }
}

module.exports.deleteUser = async function(userName,callBack) {
    try {
        var query = {
            userName : userName
        };
         var result = await userModel.updateOne(query,{ isDeleted : true});
        callBack(null,result);
    }
    catch(err){
        callBack(err,null);
    }
}

module.exports.getUserByFilter = async function(filter,callBack){
    try{
        var user = await userModel.findOne(filter);  
        callBack(null,user);
    }catch(err) {
        callBack(err,null); 
 }
}