const regexp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const validate = (email) => {
  let emailParts = email.split('@')

  if (emailParts.length !== 2) return false

  let [account, address] = emailParts

  if (account.length > 64) return false
  if (address.length > 255) return false

  let domainParts = address.split('.')

  if (domainParts.some((part) => part.length > 63)) return false

  if (!regexp.test(email)) return false

  return true
}

module.exports = {
  validate,
}
