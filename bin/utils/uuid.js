"use strict";
//to generate a unique identity
const { v4: uuidv4 } = require('uuid');
//instatiate module
const uuid = uuidv4();
//export  module
module.exports = uuid;
