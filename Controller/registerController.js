const express=require('express')
const router=express.Router()
const bcrypt=require('bcryptjs')
const {register,validate} =require('../Model/register')

router.get('/get',async(req,res)=>{
    let results=await register.find()
    await res.send(results)
})

router.post('/post',async(req,res)=>{

    const {error}= validate(req.body)
    if(error) res.status(400).send(error.details[0].message)

    const valid=await register.findOne({username:req.body.username})
    if(valid) res.status(400).send('User Name already exits..')
    
    const result=new register({
        username:req.body.username,
        dob:req.body.dob,
        email:req.body.email,
        password:req.body.password,
        is_admin:req.body.is_admin
    })
    const salt=await bcrypt.genSalt(10)
    result.password= await bcrypt.hash(result.password,salt)
    result.save()
    const token= result.genrate()
    res.send({token})
})

module.exports=router