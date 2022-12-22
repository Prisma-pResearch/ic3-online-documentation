const mysql = require('mysql')

const db = mysql.createPool({
    host:'127.0.0.1',
    user: 'ic3',
    password:'docusaurus',
    database:'docusaurus',
    port:3306,
})

module.exports = db
