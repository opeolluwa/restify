const express = require('express')
const router = express.Router()
const cors = require('cors')
const SSRender = require('../bin/lib/classes/class.ssr')
router.use(cors())

//default get all items
router.get("/all", (req, res) => {
    const project = new SSRender("skills").render()
    res.send(project)
})
module.exports = router