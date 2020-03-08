const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const Joi=require('joi')
const registerSchema=mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true        
    },
    dob:{
        type:Date,
        require:true
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        minlength:5,
        require:true
    },
    is_admin:{
        type:Boolean,
        default:false
    },
    is_active:{
        type:Boolean,
        default:true
    },
    created_date:{
        type:Date,
        default:Date.now
    }
})
registerSchema.methods.genrate= function (){
    return jwt.sign({_id:this._id,full_name:this.full_name,email:this.email, is_admin:this.is_admin },'jwtPrivateKey')
}
const register=mongoose.model('Register',registerSchema)

const valiadtorRegister=function(user){
    const registerUser={
        username:Joi.string().required(),
        dob:Joi.string().required(),
        email:Joi.string().required().email(),
        password:Joi.string().required().min(5),
        is_admin:Joi.boolean()
    }
    return Joi.validate(user,registerUser)
}

module.exports.register=register;
module.exports.validate=valiadtorRegister;