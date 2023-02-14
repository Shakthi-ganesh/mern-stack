const express = require('express');
const app = express();
const port = process.env.PORT || 5010;

app.get("/", function(req, res){
	//res.send("Iam shakthi");
	res.sendFile(__dirname+"/index.html")
});
app.get("/resume", function(req, res){
	res.sendFile(__dirname+"/resume.html")
});

app.listen(port, function(){
	console.log("Server running on http://localhost:"+port);
	console.log(`Server running on http://localhost:${port}`);
});
