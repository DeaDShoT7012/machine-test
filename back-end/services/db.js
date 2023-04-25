const mongoose = require('mongoose')
//connection string
mongoose.connect('mongodb://localhost:27017/test')

const User = mongoose.model('User',{
    id:String,
    name:String,
    email:String,
    password:String,
    mobile:Number,
    address:String,
    image:String
})

module.exports={
    User
}