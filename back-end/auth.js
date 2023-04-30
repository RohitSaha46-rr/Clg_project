const jwt=require('jsonwebtoken');
const TOKEN_KEY='ANKANKARMAKAR';
module.exports=async function(req,res,next){
   try{
    let header=req.headers.authorization.split(' ')[1];
    if(header){
        let verify=await jwt.verify(header,TOKEN_KEY);
        if(verify){
            next();
        }else{
            res.status(401).json({message:"auth faild"})
        }
    }else{
        res.status(401).json({message:"auth faild"})
    }

   }catch(e){
    res.status(401).json({message:"auth faild"})
   }
    


}

