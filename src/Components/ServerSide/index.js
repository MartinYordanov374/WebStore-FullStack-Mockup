const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

app = express()
app.use(express.json())
app.use(cors())

db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'loginsystem'
})

app.post('/register', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    db.query('INSERT INTO users (username, password) VALUES (?,?)', [username, password], (err,res)=>{
        console.log(err)
    })
})

app.listen(3307, ()=>{
    console.log('Running server')
})