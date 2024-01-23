import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

export default function UpdateComponent(props)
{
  let navigate = useNavigate();

  const [name,setName]=useState("");
  const [location,setLocation]=useState("");
  const [email,setEmail]=useState("");
  const {id}=useParams();

useEffect(()=>
{
  EmployeeService.getEmployeeId(id).then((res)=>
  {
      setName(res.data.name);
      setLocation(res.data.location);
      setEmail(res.data.email);

  }).catch(error=>
      {
          console.log(error);
      })
},[])

const updateHandler=(e)=>
 {
    e.preventDefault();
    const employee={name,location,email};
    
    if(id){
           EmployeeService.updateEmployee(id,employee).then(res=>{
            navigate('/fetch');
           }); 
    }
    else{    
            EmployeeService.addEmployees(employee).then(res=>
            {
            console.log(res.data);
            navigate('/fetch');

        })
    }
 }
  
const cancelHandler=(e)=>
{
  navigate('/fetch');
}

return (
    <div className="container mt-3">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Update Employee</h3>
            <div className="card-body">
              <form>
                <div className="form-group my-2">
                  <label>Name:</label>
                  <input placeholder="Full Name" name="name" className="form-control"
                         value={name} onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div className="form-group my-2">
                  <label>Location:</label>
                  <input placeholder="Location" name="location" className="form-control"
                         value={location} onChange={(e)=> setLocation(e.target.value)}/>
                </div>

                <div className="form-group my-2">
                  <label>Email:</label>
                  <input placeholder="Email" name="email" className="form-control"
                         value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <button className='btn btn-success' onClick={updateHandler}>save</button>
                <button className='btn btn-danger' onClick={cancelHandler} style={{marginLeft:"10px"}}>cancel</button>
              </form>
            </div>
          </div>
        </div>   
    </div>
  )
}