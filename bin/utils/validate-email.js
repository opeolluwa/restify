"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const email_validation = require("nodejs-email-validation"); // validate mail
const validate_email = (email) => email_validation.validate(email);
module.export = validate_email;
