const express = require('express')
const app = express()
const port = 3000
var path = require('path');

app.set('view engine','ejs')

app.use(express.static(path.join(__dirname,'public')))
app.get('/', (req, res) => {
  res.render('index',{test:'hi'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})