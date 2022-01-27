const express = require('express');
const { subscribe, unsubscribe, confirmSubscription } = require('../controllers/newsletter');
const router = express.Router();


router.post("/subscribe", subscribe);
router.post("/unsubscribe", unsubscribe)
router.post("/confirm-email", confirmSubscription)

module.exports = router