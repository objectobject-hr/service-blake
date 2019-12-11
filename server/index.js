const express = require('express')
const mongoose = require('mongoose')
const Product = require('../db/models/Product')
const Review = require('../db/models/Review')

const app = express()

mongoose.connect('mongodb://localhost/fec', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.static(__dirname + '/../client/dist'))

app.get('/test', (req, res) => {
  console.log('hi')
  const id = rand(1, 100)
  Product.findOne({ id: id }, (err, product) => {
    if (err) console.error(err)
    else {
      Review.find({ productId: id }, (err, reviews) => {
        if (err) console.error(err)
        else {
          res.send({ product, reviews })
        }
      })
    }
  })
})

app.listen(3003, () => console.log('app listening on port 3003'))

function rand(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
