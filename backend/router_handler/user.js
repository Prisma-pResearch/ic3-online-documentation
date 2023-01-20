const db = require('../database/users_db')

//  import bcryptjs
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')



exports.register = (req, res) => {
    const userinfo = req.body
    console.log(req.body)

    const sqlStr = 'select * from users where username = ?'
    db.query(sqlStr, [userinfo.username], (err, results) => {
        
        if (err) {
            return res.cc(err)
        }
        if (results.length > 0) {
            return res.cc('users exists')
        }

        console.log(userinfo.password)
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)
        console.log(userinfo.password)
        const id = Math.random() * 100
        // add  new user
        const newuser = `insert into users set ?`
        console.log('in query')
        db.query(newuser, { id: id, username: userinfo.username, password: userinfo.password }, function (err, results) {
            // if (err) return res.send({status:1, message: err.message})
            if (err) return res.cc(err)
            // if(results.affectedRows !==1) return res.send({message: 'shibai'})
            if (results.affectedRows !== 1) return res.cc('registering error')
            res.send({ message: 'success register' })
        })
    })

}

exports.login = (req, res) => {
    const userinfo = req.body
    console.log(userinfo)
    const sqlStr = 'select * from users where username = ?'
    db.query(sqlStr, [userinfo.username], (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (results.length !== 1) {
            return res.cc('Query result !== 1, login fails')
        }
        const comparePassword = bcrypt.compareSync(userinfo.password, results[0].password)
        if(!comparePassword) return res.cc('password error')

        const user = { ...results[0], password: '', user_pic: '' }

        const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn})
        console.log(tokenStr)
        return res.send({
            status: 0,
            token: 'Bearer '+tokenStr,
            message: "login ok",
        })

    })



    // console.log(req) 
}


exports.test = (req, res) => { 
    res.send('test OK')
  }