const express = require('express')
const app = express()
app.get('/product/:id', (req, res) => {
    const id = req.params.id
    res.send(`productid : ${id}`)
})
app.listen(3000, () => {
    console.log("working");

})

//http://localhost:3000/product/101