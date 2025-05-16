const express = require('express')
const mongoose= require('mongoose')
const app = express()
const port = 3000
require("dotenv").config()

const productRoutes=require('./routes/pruduct.routes')
const userRoutes=require('./routes/user.routes')
mongoose.connect(process.env.DB_URL).then( (db)=>console.log("base de datos conectada!!!"))

app.get('/node', (req, res) => {
  res.send('Holaaa, estoy programando con Node.js!')
})

app.use("/products",productRoutes)
app.use("/user",userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
