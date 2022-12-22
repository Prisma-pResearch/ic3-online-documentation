const express = require("express")

const app = express()
// console.log("listen at 50000")
const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({extended: false}))

app.use((req, res, next)=>{
    // default status is 1
    res.cc = function (err, status=1){
        res.status(400).send({
            status,
            // if err is instanceof Error : object; otherwise, err is string
            message: err instanceof Error? err.message : err,
        })
    }
    res.notAuth = (err, status =1 )=>{
        res.status(401).send({
            status,
            message: err instanceof Error? err.message : err,
        })
    }
    next()
})


const userRouter = require('./router/user')
// Add uniform prefix
app.use('/user', userRouter)

app.listen(50000, ()=>{
    console.log("listen at 50000")
})
