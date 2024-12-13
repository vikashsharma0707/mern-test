const express = require("express");
const app = express()

const bodyparser = require("body-parser");
const cors = require("cors")
const mongoose = require("mongoose");

require("dotenv").config()
const emproute = require('./Route/route')
mongoose.connect(process.env.DBCONNECTION).then((
    console.log("server is running")
))

const port = process.env.PORT || 3000
app.use(cors())

app.get("/",(req,res)=>{
    res.send("i am working")
})

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/employee",emproute);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})