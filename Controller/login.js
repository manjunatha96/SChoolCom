const express=require('express')
const router=express.Router()
const {register} =require('../Model/register')
const bcrypt=require('bcryptjs')
const Joi=require('joi')
const auth=require('../Middleware/logins')
router.get('/logins',[auth], async(req,res)=>{
    const result=await register.find()
    await res.send(result)
})

router.post('/posting', async(req,res)=>{

    const {error}= validate(req.body)
    if(error) res.status(400).send(error.details[0].message)


    const valid= await register.findOne({username:req.body.username})
    if(!valid) res.status(401).send('Invalid user name...')

    const pass=await bcrypt.compare(req.body.password,valid.password)
    if(!pass) res.status(401).send('Invalid password..')
    const token= valid.genrate()
   
    res.send({token})
})

router.put('/userUpadte/:id',[auth],async(req,res)=>{
    console.log(req.params.id);
    const result=await register.findByIdAndUpdate({_id:req.params.id},
    {is_admin:req.body.is_admin},{new:true})
    
    res.send(result)
})

router.delete('/deleteUser/:id',[auth],async(req,res)=>{
    const result= await register.fin
})

const validate=function(users){
    const loginValiadtion={
        username:Joi.string().required(),
        password:Joi.string().required().min(5)
    }
    return Joi.validate(users,loginValiadtion)
}

module.exports=router;