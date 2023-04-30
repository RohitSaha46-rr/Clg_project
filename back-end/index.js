const express=require('express');
const app=express();
require('./db')
app.use(express.json());
const cors=require('cors');
app.use(cors());
const PORT=process.env.PORT||5000;
const login=require('./login')
app.use('/v1',login)
const auth=require('./auth')
const userData=require('./userModel')
const mongoose=require('mongoose')

app.get('/v1/valid_user/:id',auth,async(req,res)=>{
   try{
    let userId=req.params.id.toString();
   
     let data=await userData.find({_id:new mongoose.Types.ObjectId(userId)},{name:1});

     if(data.length>0){
      res.status(200).send(data[0]);
     }else{
        res.status(400).json({message:"no user"});
     }

  
   }catch(e){
    res.status(400).json({message:"error"});
   }
})




app.listen(PORT,()=>{
    console.log('we are listening..')
})