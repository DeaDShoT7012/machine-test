const express = require('express')
const cors = require('cors')
const logic = require('./services/logic')

const server = express()
server.use(cors({
    origin:'http://localhost:3000'
}))
server.use(express.json())

server.listen(8000,()=>{
    console.log('server listen at 8000');
})

//get all employees
server.get('/all-users',(req,res)=>{
    logic.allusers().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//delete employee
server.delete('/delete-user/:id',(req,res)=>{
    logic.deleteuser(req.params.id)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//register
server.post('/register',(req,res)=>{
    logic.register(req.body.id,req.body.name,req.body.email,req.body.password,req.body.mobile,req.body.address,req.body.image)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//login
server.post('/login',(req,res)=>{
    logic.login(req.body.email,req.body.password)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//view user
server.get('/view-user/:id',(req,res)=>{
    logic.viewuser(req.params.id)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})