const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bcrypt = require('bcrypt')

const nodemailer = require('nodemailer')

app = express()
app.use(express.json())
app.use(cors())


//data removed for security reasons
db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'loginsystem'
})
app.post('/register', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const saltRounds = 10;
    db.query('SELECT 1 FROM users WHERE email=? OR username=?', [email, username], (err, result)=>{
        if(result.length>0)
        {
           res.send({message: 'user already registered'})
        }
        else{
            bcrypt.hash(password, saltRounds, (err,hash)=>
            {
                if(err)
                {
                    console.log(err)
                } 
                db.query('INSERT INTO users (username, password, email) VALUES (?,?,?)', [username, hash, email], (err,res)=>{
                    console.log(res)
            })
            });
            res.send({message: 'user successfully registered'})

        }
    
    })  
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'email',
            pass: 'password'
        }
    });
    var mailOptions = {
        from: 'email',
        to: email.toString(),
        subject: 'Успешна регистрация в Neon',
        html: `<div className='emailHolder'><h3>Добре дошли, ${username}, вие успешно завършихте регистрацията си в Neon</h3><hr></hr><h4>Вече можете да изпълнявате поръчки, чрез Neon!</h4></div>`
      };  
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
})
app.post('/check', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    
})
app.post('/login', (req,res)=>{
    const username = req.body.usernameLogin;
    const password = req.body.passwordLogin;
    db.query('SELECT * FROM users WHERE username=? OR email=?', [username, username], (err,result)=>{
        if(err)
        {
            res.send({err: err})
        }
        if(result.length>0)
        {
           bcrypt.compare(password, result[0].password, (err, response)=>{
               if(response)
               {
                   res.send(result);
               }
               else{
                   res.send({message: 'Wrong username/password combo'})
               }
           })
        }
        else{
            res.send({message: 'User doesnt exist', messageTwo: result})

        }
    })
})
app.post('/delete', (req,res)=>{
    const username=req.body.username;
    db.query('DELETE FROM users WHERE username=?', username, (err, result)=>{
        if(err){
            res.send({err: err})
        }
        else{
            res.send({message: 'successfully deleted user'})
        }
    })
})
app.post('/changePass', (req,res)=>{
    const username =req.body.username;
    const password = req.body.password;
    bcrypt.hash(password, 10, (err,hash)=>{
        db.query('UPDATE users SET password=? WHERE username=?', [hash, username], (err,result)=>{
            if(err){
                res.send({err: err})
            }
            else{
                res.send({message: 'Password was changed succesfully !'})
            }
        })
    })
    })
app.post('/finishOrder', (req,res)=>{
    const username = req.body.username;
    const name = req.body.name;
    const phone = req.body.phone;
    const address = req.body.address;
    const products = req.body.products;
    const quantity = req.body.quantity;
    const price = req.body.price;
    const orderStatus = 'Направена поръчка'
     db.query('INSERT INTO orders (username, name, phone, address, products, quantity, price, orderStatus) VALUES(?,?,?,?,?,?,?,?)', [username, name, phone, address, products, quantity,price, orderStatus], (err,result)=>{
         if(err){
             res.send({err: err})
         }
         else{
             res.send({message: 'successfully made an order'})
            
         }
    })
    
})
app.post('/orderHistory', (req,res)=>{
    const username = req.body.username;

     db.query('SELECT username, COUNT(*) AS occurences FROM orders WHERE username=?', username, (err, result)=>{
         if(err){
             res.send({err: err})
         }
         else{
             res.send({message: result})
         }
     })
})
app.post('/getEmail', (req,res)=>{
    const username = req.body.username;

    db.query('SELECT email FROM users WHERE username=?', username, (err,result)=>{
        if(err){
            res.send({err: err})
        }
        else{
            res.send({messageTwo: result})
        }
        const email = result;
        console.log("email is", email)

    })
})
app.post('/seeOrders', (req,res)=>{
    const username = req.body.username;
    db.query('SELECT * FROM orders WHERE username=?', username, (err, result)=>{
        if(err){
            res.send({err: err})
        }
        else{
            res.send({message: result})
        }
    })
})
app.post('/sendEmail', (req,res)=>{
    const email = req.body.email;
    const username = req.body.username;
     var transporter = nodemailer.createTransport({
             service: 'gmail',
             auth: {
                 user: 'email',
                 pass: 'password'
             }
         });
         var mailOptions = {
          from: 'neonofficial77@gmail.com',
          to: email.toString(),
          subject: 'Направена поръчка в Neon',
          html: `<div className='emailHolder'><h3>${username}, успешно направихте поръчката си в Neon</h3><hr></hr>`
        };  
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Order email sent: ' + info.response);
          }
    });
})
app.listen(3307, ()=>{
    console.log('Running server')
})