import React,{useState,useId} from 'react'
import './Register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Register() {
    const [name,setname] = useState('')
    const [password,setpswd] = useState('')
    const [email,setEmail]= useState('')
    const [mobile,setmobile]= useState('')
    const [address,setaddress]=useState('')
    const [image,setimage]= useState('')
    const [error,seterror]=useState(false)

    let location = useNavigate()
    const id=useId()

    const handleRegister=async(e)=>{
        e.preventDefault()
        if(name.length==0||password.length==0||email.length==0||mobile.length==0||address.length==0||image.length==0){
            seterror(true)
        }
        const body={
            id,
            name,
            password,
            email,
            mobile,
            address,
            image
        }
        const result= await axios.post('http://localhost:8000/register',body)
        console.log(result);
        alert(result.data.message)
        location('/')
    }

  return (
    <div>
        <h2 className='text-center mt-5'>Register</h2>
        <div className='text-center'> 
           <form onSubmit={(e)=>handleRegister(e)}>
                <div>
                    <input onChange={(e)=>setname(e.target.value)} type='text' placeholder='Enter Name'/>
                </div>
                {error&&name.length<=0?
                <label>Please enter the name</label>:""}
                <div>
                    <input onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Enter Email'/>
                </div>
                {error&&email.length<=0?
                <label>Please enter the email</label>:""}
                <div>
                    <input onChange={(e)=>setpswd(e.target.value)} type='text' placeholder='Enter Password'/>
                </div>
                {error&&password.length<=0?
                <label>Please enter the password</label>:""}
                <div>
                    <input onChange={(e)=>setmobile(e.target.value)} type='text' placeholder='Enter Mobile.no'/>
                </div>
                {error&&mobile.length<=0?
                <label>Please enter the mobile.no</label>:""}
                <div>
                    <textarea onChange={(e)=>setaddress(e.target.value)} type='text' placeholder='Enter Address'/>
                </div>
                {error&&address.length<=0?
                <label>Please enter the address</label>:""}
                <div>
                    <input onChange={(e)=>setimage(e.target.value)} type='text' placeholder='upload image'/>
                </div>
                {error&&image.length<=0?
                <label>Please upload the image</label>:""}
                <div>
                <button className='btn btn-outline-success'>Register</button>
                </div>
           </form>
        </div>
    </div>
  )
}

export default Register