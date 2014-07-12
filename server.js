var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
mongoose.connect('mongodb://localhost/restaurant')

var app = express()
app.use(bodyParser())
app.use(express.static('.'))

var Restaurant = mongoose.model('Restaurant', {
  name: String,
  address: String
})

app.get('/restaurants', function (req, res) {
  Restaurant.find(function (err, restaurants) {
    res.json(restaurants)
  })
})

app.post('/restaurants', function (req, res, next) {
  var r = new Restaurant({
    name: req.body.name,
    address: req.body.address
  })
  r.save(function (err) {
    if (err) { next(err) }
    res.json(r)
  })
})

app.listen(3000)
