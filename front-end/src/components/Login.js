import React,{useState} from 'react'
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';

function Login() {
    const [email,setEmail] = useState('')
    const [password,setPswd] = useState('')
    const [error,seterror] = useState(false)

    let location = useNavigate()

    const handlesubmit=async(e)=>{
        e.preventDefault()
        if(email.length==0||password.length==0){
            seterror(true)
        }
        const body ={
            email,
            password
        }
        const result = await axios.post('http://localhost:8000/login',body)
        console.log(result);
        alert(result.data.message)
        location('user')
        if(email=='admin@gmail.com'){
            location('admin')
        }
    }

  return (
    <div>
      <h2 className='text-light text-center mt-5'>Login</h2>
      <div className='text-center '>
        <form onSubmit={(e)=>handlesubmit(e)} className=''>
            <div>
                <input onChange={(e)=>setEmail(e.target.value)} type='text' placeholder='Email'/>
            </div>
            {error&&email.length<=0?
            <label className='text-danger'>Please enter the email</label>:''}  
           
            <div>
                <input onChange={(e)=>setPswd(e.target.value)} type='text' placeholder='Password'/>
            </div>
            {error&&password.length<=0?
            <label className='text-danger'>Please enter the password</label>:''}
            <div>
                <p>If your are a new user <Link to={'/register'}><span className='text-info'>Register</span></Link></p>
            </div>
            <div>
            <button className='btn btn-outline-success'>Login</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Login
