var faker = require('faker')
const fs = require('fs')

const reviews = []

for (i = 0; i < 100; i++) {
  const data = {}
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

fs.writeFileSync('reviews.json', JSON.stringify(reviews))
