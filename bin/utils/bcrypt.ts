const bcrypt = require('bcrypt');
const salt_round: number = 13;

//take raw password return hash
const hash_password = (raw_password: string): String =>
    bcrypt.hashSync(raw_password, salt_round);

//take raw password and hased password and compare, return boolean true for a match
const compare_hash = (raw_password: string, hashed_passsword: string): boolean => bcrypt.compareSync(raw_password, hashed_passsword);

//export modules
module.exports = { hash_password, compare_hash }