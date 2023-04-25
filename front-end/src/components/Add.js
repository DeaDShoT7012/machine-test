import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import './Add.css'


function Add() {
  const [allemployees,setallemployees] = useState([])
  const [viewuser,setviewuser] = useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleshow = async(id)=>{
    const result = await axios.get('http://localhost:8000/view-user/'+id)
    setviewuser(result.data.user);
    setShow(true)
  
  }


  const fetchdata = async()=>{
    const result = await axios.get('http://localhost:8000/all-users')
    setallemployees(result.data.users);
  }
  console.log(allemployees);

  useEffect(() => {
    fetchdata()
  },[])

  //delete
  const handledelete = async(id)=>{
    const result = axios.delete('http://localhost:8000/delete-user/'+id)
    alert((await result).data.message)
    fetchdata()
  }
  

  return (
    <div>
        <div className='container-fluid'>
            <h1><i class='fa-solid fa-user-group'></i>Admin Dashboard
           <Link to={'/'}>
                <a className='btn btn-success ms-5'><i class='fa-solid fa-user-plus'></i>Logout</a>
                
           </Link>
            </h1>
            <p style={{textAlign:'justify'}}>
                this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:
                this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:this is dummy data:
            </p>
        </div>
        <div className='container'>
        <Table striped bordered hover>  
      <thead>
        <tr>
          <th>#</th>
          <th>User Name</th>
          <th>Email Address</th>
          <th>Mobile Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {
        allemployees?.map((item,index)=>(
          <tr>
          <td>{index}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.mobile}</td>
          <td>
          <button onClick={(e)=>handleshow(item.id)} type='button' className='btn btn-outline-info btn-sm me-3 '>View</button>
          <button onClick={(e)=>handledelete(item.id)} type='button' className='btn btn-outline-danger btn-sm me-3'><i class="fa-solid fa-trash"></i></button>
          </td>
        </tr>
        )) 
        }
      </tbody>
    </Table>
        </div>


        <Modal 
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <div className='view'>
            <div className='viewimg'>
            <img src={viewuser.image}/>
            </div>
            <div className='viewdetails'>
                <h3>Name: {viewuser.name}</h3><br/>
                <h3>Email: {viewuser.email}</h3><br/>
                <h3>Mobile: {viewuser.mobile}</h3><br/>
                <h3>Address: {viewuser.address}</h3><br/>
                
            </div>

            </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Add