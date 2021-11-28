/* generate uniquer id*/
const { v4: uuidv4 } = require('uuid');
const unique_id: String = uuidv4();

module.exports = unique_id