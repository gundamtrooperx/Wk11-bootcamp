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

module.exports = router