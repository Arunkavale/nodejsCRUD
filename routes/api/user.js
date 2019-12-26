const router = require('express').Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const tryCatch = require('./../../middleware/tryCatch');
const {ObjectID} = require('mongodb');
const _ = require('lodash');




const createUser = async (req,res) =>{
    let user = await new User({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        deepartmet :req.body.deepartmet
    }).save();
    if(user) return res.send({'message':'user added successfully'});
    else return res.send({'message':'Something went wrong'});
}


const readUser = async (req,res)=>{
    let users = await User.find();
    res.status(200).send(users)
}


const updateUser = async (req,res)=>{
    if (!ObjectID.isValid(req.params.userId)) {
        return res.status(400).send({'message':'User ID is not valid'});
    }
    let users = await User.findOneAndUpdate({_id:req.params.userId },{$set:{
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        deepartmet :req.body.deepartmet 
    }});
    if(users){
        res.status(200).send({message:'user updated successfully'})
    }else{
        res.status(200).send({message:'user not found'})
    }
}


const deleteUser = async (req,res)=>{
    if (!ObjectID.isValid(req.params.userId)) {
        return res.status(400).send({'message':'User ID is not valid'});
    }
    let users = await User.findOneAndRemove({_id:req.params.userId});
    if(users){
        res.status(200).send({message:'User removed successfully'})
    }else{
        res.status(200).send({message:'User not found'})
    }
}

router.post("/create",tryCatch(createUser));
router.get("/read",tryCatch(readUser));
router.put("/update/:userId",tryCatch(updateUser));
router.delete("/delete/:userId",tryCatch(deleteUser));
module.exports = router;