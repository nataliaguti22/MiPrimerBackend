const express = require('express')
const app = express()
const port = 3000

const productRoutes=require('./routes/pruduct.routes')
const userRoutes=require('./routes/user.routes')

app.get('/node', (req, res) => {
  res.send('Holaaa, estoy programando con Node.js!')
})

app.use("/products",productRoutes)
app.use("/user",userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
