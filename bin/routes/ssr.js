const express = require('express')
const router = express.Router()
const cors = require('cors')

router.use(cors())


const SSRender = require('../lib/classes/ssrr.js') //import  utils

const user = new SSRender("users")
const render = user.render() 

console.log(render) 