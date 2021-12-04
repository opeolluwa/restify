const Analytics = require("./../lib/classes/analytics"); //analytics constructor

//instatiate analytics
function nethbooks(req, res) {
    const nethbooks = new Analytics("https://nethbooks.com.ng")
    res.send(nethbooks)
}


module.exports = { nethbooks }