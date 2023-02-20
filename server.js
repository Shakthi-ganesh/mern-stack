require('dotenv').config();
const userLib = require("./backend/lib/userLib");
const todoLib = require("./backend/lib/todoLib");
const mongoose = require("mongoose");
const express = require('express');
const app = express();
const port = process.env.PORT || 3010;
const options = { extensions:['html','htm','css','js','ico','jpg','jpeg','png','svg'],index:['card.html']}

app.use(express.static(__dirname));

app.use(express.static("public",options));

app.get("/card", function(req, result){
	result.sendFile(__dirname+"/card.html");
});
app.get("/name", function(req, result){
	result.sendFile(__dirname+"/name.html");
});

app.get("api/todos",function(req,res){
	todoLib.getAllTodos(function(err,todos){
		if(err) {
			res.json({status : "error",data:null});
		}
		else {
			res.json({status : "success",data : todos});
		}
	});
});


app.get("/resume", function(req, result){
	result.sendFile(__dirname+"/resume.html");
});
app.get("/weather", function(req, result){ 
	result.sendFile(__dirname+"/weather.html");
});
mongoose.set('strictQuery',true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING,{},function(err){
	if(err)
	{
		console.error(err);
	}
	else
	{
		console.log("DB Connected");


		// userLib.createFirstUser(function(err,result)
		// {
		// 	if(err)
		// 	{
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });
		// userLib.createUser({userName : "shakthi" , yearOfGraduation : 2024},function(err,result){
		// 	if(err)
		// 	{
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });
		// userLib.updateUser("sahkthi", {yearOfGraduation: 2000}, function(err,result)
		// {
		// 	if(err)
		// 	{
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });
		// userLib.deleteUser("shakthiganesh",function(err,result)
		// {
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });
		// userLib.getUsersbyFilter({yearOfGraduation : 2000}, function(err,result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });
		// userLib.getAllUsers(function(err,result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });

		app.listen(port, function(){
			console.log("Server running on http://localhost:"+port);
			console.log(`Server running on http://localhost:${port}`);
		});
	}
});