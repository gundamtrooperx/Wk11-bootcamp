var express = require ("express");
var app = express ();
var port = 3000 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

var routes = require("./routes/index")
app.use(routes)



app.listen(port, function(){
    console.log("app.listen.port", port)
})