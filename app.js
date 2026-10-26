const express = require('express')
const app = express()
app.get('/product', (req, res) => {
    const category = req.query.category
    res.send(`CATEGORY : ${category}`)
})
app.listen(3000, () => {
    console.log("working");

})