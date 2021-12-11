const SSRender = require("../lib/classes/ssr");


function ssr_user(req, res) {


    const user = new SSRender("users")
    const render = user.render()
    render.then(data => res.send(data)).catch(err => err)

}


function ssr_contacts(req, res) {


    const user = new SSRender("contacts")
    const render = user.render()
    render.then(data => res.send(data)).catch(err => err)

}



module.exports = { ssr_user, ssr_contacts }