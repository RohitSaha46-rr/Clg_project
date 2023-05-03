const express = require('express');
const route = express.Router();
const user = require('./userModel')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const TOKEN_KEY='ANKANKARMAKAR'

route.post('/user/signup', async (req, res) => {
    try {
        const { name, email, mobile, password } = req.body;
        
       
        let userData = await user.find({
            $or: [{ email }, { mobile }]
        })
         console.log(userData,"user")
       

        if (userData?.length == 0) {
            let encryptedPassword = await bcrypt.hash(password, 10);
            if (encryptedPassword) {
                let userAdd = new user({
                    name, email, mobile, password: encryptedPassword
                })
                let resData = await userAdd.save();
                if (resData) {
                    res.status(200).send("user registed")
                } else {
                    res.status(400).json({message:"error"})
                }
            }

        } else {
            res.status(400).json({message:"user already registed"})
        }



    } catch (e) {

        res.status(400).json({message:"error"})
    }
})


route.post('/user/signin', async (req, res) => {

    try {
        const { email, mobile, password } = req.body;

        let userData = await user.find({
            $or: [{ email }, { mobile }]
        })
        if (userData?.length > 0) {
           let matching=await bcrypt.compare(password, userData[0].password)
            if (matching) {
              
                const token = jwt.sign(
                    { user_id: userData[0]._id, email,mobile },
                    TOKEN_KEY,
                    {
                      expiresIn: "2h",
                    }
                  );
                  
                 
                  if(token){
                    res.status(200).json({userId:userData[0]._id,userName:userData[0].name
                        ,access_token:token})
                  }else{
                    res.status(400).json({message:"Error"})
                  }
                


            } else {
                res.status(400).json({message:"Error"})
            }



        } else {
            res.status(400).json({message:"Error"})
        }



    } catch (e) {

        res.status(400).send();
    }
})






module.exports = route;

