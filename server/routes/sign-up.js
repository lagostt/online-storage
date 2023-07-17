const express = require('express')
const router = express.Router()
const db = require('../db/sql-con')

router.post('/',(req,res)=>{
  let addUserQuery = 'insert into user(user_name,user_email,user_password,user_is_online) values(?,?,?,?)'
  let findUserNameQuery = 'select user_email from user where user_name=?'
  let reqData = req.body
  let data = [reqData.user_name,reqData.user_email,reqData.user_password,0]
  db.query(findUserNameQuery,[reqData.user_name],(err,rows)=>{
    // if an error accured during excuting the query the server will send 500 status code 
    if (err) return res.status(500).send('find user query error')
    if (rows.length==0) db.query(addUserQuery,data,(err,result)=>{
     if (err) return res.status(500).send('insert user error')
     return res.status(201).send('user added successfully')
    })
    else return res.status(409).send('username already exist')
  })
})

module.exports = router