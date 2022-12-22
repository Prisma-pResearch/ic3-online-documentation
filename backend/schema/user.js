const joi = require('joi')


const username = joi.string().pattern(/^\w{3,}$/).min(3).max(20).required()

const password = joi
  .string()
  .min(6)
  .required()


exports.reg_login_schema = {

  body: {
    username,
    password,
  },
}
