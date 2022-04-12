const express = require("express")
const { port, env } = require("./config")


const videos = require("./routes/videos")
const authors = require("./routes/authors")


const app = express()
app.use(express.json())

videos(app) 
authors(app) 


app.get("/",(req,res)=>{
    return res.json({hola:"mundo"})
})


app.listen(port)
console.log("Modo: ",env)
console.log("port:", port)
console.log("Listening..... 8002")
