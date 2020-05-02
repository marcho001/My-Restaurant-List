const express = require('express')
const port = 3000
const app = express()
const exphbs = require('express-handlebars')
const list = require('./restaurant.json')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))

app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { list: list.results })
})

app.get('/restaurant/:list_id', (req, res) => {
  let targetList = list.results.find(item => item.id.toString() === req.params.list_id)
  res.render('show', { list: targetList })
})

app.get('/search', (req, res) => {
  const keywords = list.results.filter((item) => {
    return item.name.toUpperCase().includes(req.query.keywords.toUpperCase())
  })
  res.render('index', { list: keywords })
})

app.listen(port, () => {
  console.log('yoyo now is working')
})