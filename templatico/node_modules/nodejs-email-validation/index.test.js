/**
 *! How to run tests:
 *! $ npm install
 *! $ npm test
 */
const assert = require('assert')
const validator = require('./index')

describe('Array', function () {
  describe('validate email', function () {
    it('should return false for empty string', function () {
      let email = ''
      assert.ok(!validator.validate(email))
    })
    it('should return true for `johna.doe@gmail.com`', function () {
      let email = 'johna.doe@gmail.com'
      assert.ok(validator.validate(email))
    })
    it('should return true for `JOHNA.DOE@GMAIL.COM`', function () {
      let email = 'JOHNA.DOE@GMAIL.COM'
      assert.ok(validator.validate(email))
    })
    it('should return false for `johna.doegmail.com`', function () {
      let email = 'johna.doegmail.com'
      assert.ok(!validator.validate(email), 'works even if there is no `@`')
    })
    it('should return false for `johna doe@gmail com`', function () {
      let email = 'johna doe@gmail com'
      assert.ok(!validator.validate(email), 'works on spaces')
    })
    it("should return false for `';johna.doe@gmail.com--` (SQLI)", function () {
      let email = "';johna.doe@gmail.com--"
      assert.ok(!validator.validate(email), 'works on spaces')
    })
  })
})
