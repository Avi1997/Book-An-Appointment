const { Router, query } = require('express');
const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcrypt');
const app = express.Router();
const auth = require('./auth.controller')
const sql = require('../config/mysql')

app.get("/login", auth, async (req, res) => {
    //console.log(Buffer.from(b64Encoded, 'base64').toString());
    const query = "select * from user where username ='"+req.body;
    return res.end("{hello:'USER'}")
})
app.post('/signup', async (req, res) => {
    try {
        const token = jwt.sign({ _id: req.body.user_id.toString() }, 'avinash');
        const password = await bcrypt.hash(req.body.password, 8);
        const user = {
            user_id: req.body.user_id,
            name: req.body.name,
            email: req.body.email,
            password: password
        }

        const doctor ={
            ...user,
            appointment_slot_time : req.body.appointment_slot_time, 
            day_start : req.body.day_start,
            day_end : req.body.day_end
        }
       
        var sqlQuery = "INSERT into user (user_id,name,email,password,token) values('"+user.user_id+"','"+user.name+"','"+user.email+"','"+user.password+"','"+token+"')";

         await sql.query(sqlQuery, (err, resu) => {
            if (err) { throw err }
        });

         sqlQuery = "INSERT into doctor (user_id,name,email,appointment_slot_time,day_start,day_end) values('"+doctor.user_id+"','"+doctor.name+"','"+doctor.email+"','"+doctor.appointment_slot_time+"','"+doctor.day_start+"','"+doctor.day_end+"')";
        await sql.query(sqlQuery, (err, resu) => {
           if (err) { throw err }
           res.status(201).send({ user, token })
       });

    } catch (e) {
        console.log(e);
        res.status(400).send(e)
    }
})

module.exports = app;