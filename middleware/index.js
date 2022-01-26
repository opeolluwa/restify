const jwt = require("../lib/jwt")

module.exports = {
    //checks if user add token to header and validate token
    validate_auth_token: (req, res, next) => {

        try {
            //get payload headers
            const auth_headers = req.headers["authorization"] || req.headers["Authorization"];
            //check if not undefined
            if (typeof auth_headers !== 'undefined') {
                const access_token = auth_headers.split(" ")[1]
                //pass it to next controller or middleware
                req.token = { access_token };
                // return res.send(access_token)
                next();
            }
            else {
                throw error
            }
        } catch (error) {
            //if no auth headers is found send forbidden
            res.status(403).send({ message: "forbidden!" })

        }
    },
    //verify token
    decode_jwt: (req, res, next) => {
        //get token from validate_auth_token middleware
        const { access_token } = req.token;
        //   return  res.send(access_token)
        try {

            //send unauthorized error if token not found
            if (!jwt.verify(access_token)) {
                res.status(403).send({ message: "forbidden!" })

            }
            //else pass the object to next handler
            const user = jwt.verify(access_token);
            req.user = { user }
            next();
        } catch (error) {
            res.status(403)

        }
    }
}