//load in dependencies
const database = require("../config/config.database");

//user profile information to send when they are logged in
function profile_information(req, res, next) {
    /*get user object from decode_jwt middleware,
    * the fields returned are
    * {firststname, lastname, email}
    * get all required fields and then send them back to user
    */
    const { email: user_email } = req.user
    database.promise()
        .query("SELECT * FROM user_information WHERE LOWER(email) = ?", [user_email])
        .then(([rows, fields]) => {
            //get user information and send
            const { firstname, lastname, user_id, email, phone, profile_picture_url, username } = rows[0];
            const user = {
                firstname, lastname, user_id, email, phone, profile_picture_url, username
            }
            return res.send({ user })

        })
}

function update_profile_information(params) {
    /*get user object from decode_jwt middleware,
   * the fields returned are
   * {firststname, lastname, email}
   * 
   * get fields to be updated from update user_infor middleware
   * update the user profile information and 
   * send them back to user
   */
}


module.exports = { profile_information, update_profile_information }