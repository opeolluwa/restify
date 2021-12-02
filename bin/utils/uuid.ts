//to generate a unique identity
const { v4: uuidv4 } = require('uuid');

//instatiate module
const unique_id = uuidv4();

//export  module
module.exports = unique_id