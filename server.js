require("dotenv").config();
//make sure env file that becomes 
const mongoose=require("mongoose");
const express = require('express');
const app = express();
const port = process.env.PORT || 5010;

app.get("/", function(req, res){
	//res.send("Iam shakthi");
	res.sendFile(__dirname+"/index.html")
});
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING,{},function (err){
	if(err)
	{
		console.error(err);
		
	}
	else
	{
		console.log("DB CONNECTED");
		app.listen(port, function(){
			console.log("Server running on http://localhost:"+port);
			console.log(`Server running on http://localhost:${port}`);
		});
		
	}
});
app.get("/resume", function(req, res){
	//res.send("Iam shakthi");
	res.sendFile(__dirname+"/resume.html")
});