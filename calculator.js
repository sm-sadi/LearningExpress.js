const express= require("express"); // npm install express

//  body parser //  it takes a form's input and stores it as a javascript object accessible through
const bodyParser = require("body-parser");

const app = express();
// let the app use body parser  
app.use(bodyParser.urlencoded({extended :true}));
// creating route for /
app.get("/", function(req , res){
 res.sendFile(__dirname + "/index.html")
})

// handleing post after posting by user 
app.post("/", function(req ,res){

        let num1 = parseInt(req.body.num1) ;
        let num2 =  parseInt(req.body.num1) ;
        total = num1 +num2
    res.send("thanks for posting.the result is - " + total)
})


// listening to port 300
app.listen(3000,function(){
    console.log("server starting at port 3000");
});