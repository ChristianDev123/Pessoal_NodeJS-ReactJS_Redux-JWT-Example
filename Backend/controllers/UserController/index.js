const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const UserTable = require('../../model/User');
require("dotenv-safe").config();

class UserController{
    static async index(req,res){
        const { body } = req;
        const email = body.email;
        const password = body.password;
        try{
            const resFind = await UserTable.findOne({where:{
                email,
                password
            }})
            if(resFind){
                const token = jwt.sign({id:resFind.id},process.env.SECRET,{expiresIn:60})
                const { dataValues } = resFind;
                res.status(200).json({...dataValues,token:token});    
            }else 
                res.status(500).json({message:"Can't find this user"})
        }catch(error){
            res.status(500).json({message:"[ERROR] Can't do select user"})
        }
    }

    static async create(req,res){
        const { body } = req;
        const email = body.email;
        const password = body.password;
        try{
            const resCreate = await UserTable.create({
                email,
                password
            })
            res.status(201).json({message:'User inserted successufully', status:true})
        }catch(error){
            res.status(500).json({message:"[ERROR] Can't insert new user", status:false})
        }
    }
}

module.exports = UserController;