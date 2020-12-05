const express=require("express");
const myParser=require("body-parser");
const app=express();
app.use(myParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var num1=Number(req.body.num1);
  var num2=Number(req.body.num2);
  var result=num1+num2;
  res.send("<h1>The Addition of the two numbers is :</h1> "+result);
});

app.listen(3000,function(){
  console.log("App is running on port 3000");
});
