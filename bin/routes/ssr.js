const express = require('express')
const router = express.Router()
const cors = require('cors')
const SSRender = require('../lib/classes/ssr.js')

router.use(cors())
const user = new SSRender("users")
const render = user.render()
//  router.get("/ssr", render)

//  module.exports = router

console.log(render)