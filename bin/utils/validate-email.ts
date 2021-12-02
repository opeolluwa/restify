import * as email_validation from "nodejs-email-validation";  // validate mail

const validate_email = (email: string): boolean => email_validation.validate(email)

module.export = validate_email

