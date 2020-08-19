var router = require("express").Router()
var path = require("path")
var fs = require("fs")
var db = require("../db/db.json");

router.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"../public/index.html"))
})

router.get("/notes", function(req,res){
    console.log("router.get")
    res.sendFile(path.join(__dirname,"../public/notes.html"))
})

router.get("/api/notes", function(req, res){
    
    db = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"))
    console.log("get Route", db)
    res.json(db)
})

router.post("/api/notes", function(req, res){
    let recall = {
        id: Math.floor(Math.random() * 100), 
        title: req.body.title, 
        text: req.body.text
    }
    db.push(recall)
    console.log("db")
    fs.writeFileSync("./db/db.json",JSON.stringify(db), function(){
        
        console.log("post Route", db)
        res.json(db)
    })
    
})

router.delete("/api/notes", function(req, res){
    var deletenotes = []
    for(let i = 0; i < db.length; i ++ ){
        if(db[i].id != req.params.id){
            deletenotes.push(db[i])
        }
    }
    db = deletenotes
    fs.writeFileSync("./db/db.json",JSON.stringify(db), function(){
        
        console.log("delete Route", db)
        res.json(db)
    })
    
})


module.exports = router