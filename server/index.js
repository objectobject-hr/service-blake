const express = require('express')

const app = express()

console.log(__dirname + '/../client/distdist')

app.use(express.static(__dirname + '/../client/dist'))

app.listen(3000, () => console.log('app listening'))
