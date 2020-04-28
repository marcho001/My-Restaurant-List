const express = require('express')
const port = 3000
const app = express()
const exphbs = require('express-handlebars')
const list = require('./restaurant.json')

app.engine('handlebars', exphbs({defaultLayout: 'main'}))

app.set('view engine','handlebars')
app.use(express.static('public'))
app.get('/',(req, res)=>{
  res.render('index',{list : list.results})
})

app.listen(port,()=>{
  console.log('yoyo now is working')
})