const express = require('express')
const app = express()
app.set('view engine' , 'ejs')
app.get('/', function(req,res){
    res.render('betu.ejs', {babe:'axxu'})
})
app.listen(3000, () => {
   console.log("our server is listening at 3000")
})