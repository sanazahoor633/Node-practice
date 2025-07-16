const User = require("../model/user_model")
const bcrypt = require('bcrypt');
// const SALTED = process.env.SALTED || 10
require('dotenv').config();




const signIn = async (req, res) =>{
const {username, email, password} = req.body

const salt = bcrypt.genSaltSync(10);
const hashPassword = bcrypt.hashSync(password, salt)
console.log(salt);

try{

const userData = await User.create({
username, email, password: hashPassword
})

console.log(userData);
res.status(200).json({user: userData})
d

} catch(error){
   console.error("SignIn Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
}

}


module.exports = signIn