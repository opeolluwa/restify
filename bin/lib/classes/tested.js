const express = require('express')
const PORT = process.env.PORT || 5000
const app = express()
const cors = require('cors')

const useragent = require('express-useragent');

app.use(useragent.express());

app.get('/ua', function (req, res) {

    const { os, browser, platform, isMobile, isDesktop, isBot } = req.useragent

    res.send({ os, browser, platform, isMobile, isDesktop, isBot });
});
