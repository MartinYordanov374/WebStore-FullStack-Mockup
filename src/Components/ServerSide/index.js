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
app.post('/login', (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    db.query('SELECT * FROM users WHERE username=?', username, (err,res)=>{
        if(err)
        {
            res.send({err: err})
        }
        if(res.length>0)
        {
           res.send({message: 'successfully logged in'})
        }
        else{
            res.send({message: 'wrong username, try again.'})
        }
    })
})
app.listen(3307, ()=>{
    console.log('Running server')
})