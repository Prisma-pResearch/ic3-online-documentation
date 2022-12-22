const express = require('express')
const router = express.Router()
const routerHandler = require('../router_handler/user')

// data format
const expressJoi = require('@escook/express-joi')
const {reg_login_schema} = require('../schema/user')

// Register new user
router.post('/register', expressJoi(reg_login_schema),routerHandler.register)

// // Login in
router.post('/login', expressJoi(reg_login_schema), routerHandler.login)


router.get('/get', routerHandler.test)




module.exports = router;