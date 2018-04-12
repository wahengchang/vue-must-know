var express = require('express')
var app = express()

const port = process.env.PORT || parseInt(process.env.opePORT, 10) || 3000

app.use(express.static('public'))

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})