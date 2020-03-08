const jwt=require('jsonwebtoken')

module.exports=function(req,res,next){
    const token=req.header('X1-login');
    if(!token) return resizeBy.status(401).send('Access denied, no token found...')

    try{        
        const decode=jwt.verify(token,'jwtPrivateKey')
        // if(decode.is_admin==true)
        if(decode.is_admin==true){
            console.log(decode.is_admin);
            
            req.user=decode;
            next()
        }        
        else{
            res.status(400).send('User is not a admin..')
        }
    }
    catch(ex){
        res.status(400).send('invalid token..')
    }
}