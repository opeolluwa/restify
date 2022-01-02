const express = require('express')
const router = express.Router()
const cors = require('cors')
const { search, add } = require('../controllers/search')
const { validate_search_query, validate_search_add_files } = require('../middleware')

router.use(cors())
router.post('/search', validate_search_query, search)
router.post('/add', validate_search_add_files, add)
module.exports = router
