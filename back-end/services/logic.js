const db=require('./db')

const allusers = ()=>{
    return db.User.find()
    .then((result)=>{
        if(result){
            return{
                statusCode:200,
                users:result
            }
        }else{
            return{
                statusCode:200,
                message:'No data is available'
            }
        }
    })
}

//delete user
const deleteuser = (id)=>{
    return db.User.deleteOne({
        id
    }).then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:'Data removed succefully'
            }
        }else{
            return{
                statusCode:401,
                message:'No data available'
            }
        }
    })
}

//register
const register = (id,name,email,password,mobile,address,image)=>{
    return db.User.findOne({
        email
    }).then((result)=>{
        if(result){
            return{
                statusCode:404,
                message:'Account Already Exist'
            }
        }else{
            const newUser = new db.User({
                id:id,
                name:name,
                email:email,
                password:password,
                mobile:mobile,
                address:address,
                image:image
            })
            newUser.save()
            return{
                statusCode:200,
                message:'sign up succesfully'
            }
        }
    })
}

//login
const login = (email,password)=>{
    return db.User.findOne({
        email,
        password
    }).then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:'logged succesfully'
            }
        }
        else{
            return{
                statusCode:400,
                message:'Invalid Account/Password'
            }
        }
    })

}

//viewusers

const viewuser = (id)=>{
    return db.User.findOne({
        id
    }).then((result)=>{
        if(result){
            return{
                statusCode:200,
                user:result
            }
        }else{
            return{
                statusCode:401,
                message:'No data is available'
            }
        }
    })
}

module.exports={
    allusers,
    deleteuser,
    register,
    login,
    viewuser
}