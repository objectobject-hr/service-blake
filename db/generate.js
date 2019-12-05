const mongoose = require('mongoose')
const faker = require('faker')
const Product = require('./models/Product')
const Review = require('./models/Review')

mongoose.connect('mongodb://localhost/fec', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const products = []

for (i = 0; i < 100; i++) {
  const data = {}
  data.id = i + 1
  data.identifier = `${rand(1, 999)}.${rand(1, 999)}.${rand(1, 999)}`
  data.description = description(5, 8)
  data.length = rand(1, 99)
  data.width = rand(1, 99)
  data.height = rand(1, 99)
  data.care = description(1, 4)
  data.environment = description(1, 4)
  data.materials = faker.lorem.sentence()
  data.packages = 1
  data.name = faker.lorem.word()
  data.productType = faker.lorem.word()
  data.weight = rand(1, 200)
  products.push(data)
}

const reviews = []

for (i = 0; i < 1000; i++) {
  const data = {}
  data.id = i + 1
  data.valueForMoney = Math.round(Math.random() * 5)
  data.productQuality = Math.round(Math.random() * 5)
  data.Appearance = Math.round(Math.random() * 5)
  data.easeOfAssembly = Math.round(Math.random() * 5)
  data.worksAsExpected = Math.round(Math.random() * 5)
  data.username = faker.internet.userName()
  data.date = faker.date.past()
  data.title = faker.lorem.words()
  data.text = faker.lorem.sentences()
  data.notHelpful = Math.round(Math.random() * 10)
  data.helpful = Math.round(Math.random() * 20)
  data.productId = Math.round(Math.random() * 100)
  data.recommend = faker.random.boolean()
  reviews.push(data)
}

Product.remove({}, err => {
  if (err) console.error(err)
  else {
    console.log('removed products')
    Product.collection.insertMany(products, (err, data) => {
      if (err) console.error(err)
      else {
        console.log('generated products')
        Review.remove({}, err => {
          if (err) console.error(err)
          else {
            console.log('removed reviews')
            Review.collection.insertMany(reviews, (err, data) => {
              if (err) console.error(err)
              else console.log('generated reviews')
              mongoose.connection.close()
            })
          }
        })
      }
    })
  }
})

function description(min, max) {
  const sentences = rand(min, max)
  let description = ''
  for (let i = 0; i < sentences; i++) {
    description += faker.lorem.sentence()
  }
  return description
}

function rand(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
