function validate_payload(req, res, next) {
    //fetch pqyload
    const { contact_email, contact_name, contact_phone } = req.body

    //contain errors
    const errors = []

    //validate data
    if (!contact_phone) errors.push("please provide a valid phone number")
    if (!contact_name) errors.push("name cannot be empty")
    //TODO: use a package to validate email
    if (!contact_email) errors.push("please provide a valid email address")
    next();

    //send back error to handler
    return res.send({ errors })
}


module.exports = validate_payload