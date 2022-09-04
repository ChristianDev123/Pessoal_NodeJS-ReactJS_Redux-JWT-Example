const jwt = require('jsonwebtoken');
const db = require('../config/configDB');
require('dotenv-safe').config();
class Controller{
    static async migrate(req,res){
        try{
            const resDB = await db.sync({force:false});
            console.log(resDB);
            res.status(200).json({message:'Database migrated succeessfully'});
        }catch(error){
            res.status(500).json({message:"[ERROR] Can't migrate"});
        }
    }
    static async TestJWT(req,res){
        const token = req.headers['x-access-token'];
        if(!token) return res.status(401).json({message:'[ERROR] You are not certificated to enter on this route'});
        jwt.verify(token, process.env.SECRET,(err, decode)=>{
            try{
                res.status(200).json({message:`The user with id ${decode.id} is ability to use this route`,auth:true});
            }catch(error){
                res.status(401).json({message:'This user is not Authorized to this content', err});
            }
        });
    }
}

module.exports = Controller;