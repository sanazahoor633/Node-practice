const express = require('express');
const app = express();
const User = require('./model/user_model');
const conn = require('./DB/db');
const signIn = require('./controller/user.sign');
require('dotenv').config();
const PORT = process.env.PORT || 3000

conn.then(()=> console.log('connect with database')).catch(()=> console.log('something went wrong with db')
)

app.use(express.json());
app.use(express.urlencoded({extended: true}))

// app.get('/', async (req, res) => {
    
// const user = await User.create({
// name: 'sana'
// })
// res.send(user)
// })



app.post('/user/sign', signIn)

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))