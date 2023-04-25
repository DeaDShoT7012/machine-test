import React from 'react'
import { Link } from 'react-router-dom'

function User() {
  return (
    <div>
        <div className='container-fluid'>
            <h1><i class='fa-solid fa-user-group'></i>User Dashboard
           <Link to={'/'}>
                <a className='btn btn-success ms-5'><i class='fa-solid fa-user-plus'></i>Logout</a>
                
           </Link>
            </h1>
            <p style={{textAlign:'justify'}}>
                this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:
                this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:
            </p>
        </div>
    </div>
  )
}

export default User