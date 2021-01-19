const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5500
const UserModel = require('./User')



// mongoose
//   .connect('mongodb://localhost/testapp', {
//     useNewUrlParser: true, useUnifiedTopology: true
//   })
//   .then(() => console.log(`Successfully connected to`))
//   .catch(err => console.log(err)) 

async function connectdb() {
  try {
    let response = await mongoose.connect('mongodb://localhost/testapp', 
    { useNewUrlParser: true, useUnifiedTopology: true})

    console.log(`Successfully connected to mongodb`)
  }
  catch(err) {
    console.log(err)
  }
}

connectdb()









app.listen(PORT, () => console.log(`Server running port on ${PORT}`))