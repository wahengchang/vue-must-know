var express = require('express')
var app = express()
const Mustache = require('mustache')
const {filesInDirectory} = require('./lib/fs')

const port = process.env.PORT || parseInt(process.env.opePORT, 10) || 3000

app.get('/', (req, res)=>{
  const filesInPublic = filesInDirectory('./public')

  const partial = (dirObj, rootUrl = '') => {
    let returnString = '<ul>'
    dirObj.forEach(item => {
      const pathUrl = rootUrl+item.name
      if(item.dir){
        returnString += partial(item.dir, pathUrl+'/')
      } else {
        returnString+=`<li><a href="/${pathUrl}">/${pathUrl}</a></li>`
      }
    })
    returnString += '</url>'

    return returnString
  }
  res.send(partial(filesInPublic))
})

app.use(express.static('public'))

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})