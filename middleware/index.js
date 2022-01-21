// TODO: add token validation

//checks if user add token to header and validate token
validate_auth_token: (req, res, next) => {

    try {
        //get payload headers
        const auth_headers = req.headers["authorization"] || req.headers["Authorization"];
        //check if not undefined
        if (typeof auth_headers !== 'undefined') {
            const jwt = auth_headers.split(" ")[1]
            //pass it to next controller or middleware
            req.token = { jwt };
            // return res.send(jwt)
            next();
        }
    } catch (error) {
        //if no auth headers is found send forbidden
        res.status(403).send({ message: _.capitalize("forbidden!") })

    }
},
    //verify token
    decode_jwt: (req, res, next) => {

        try {
            //get token from validate_auth_oken middleware
            const { jwt: token } = req.token;

            //send un athorized error if token not found
            if (!jwt.verify(token)) {
                res.status(403).send({ message: _.capitalize("forbidden!") })
            }