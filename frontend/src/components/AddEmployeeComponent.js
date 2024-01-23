import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function AddEmployeeComponent(){
  
  const navigate=useNavigate();

    const [employee,setEmployee]=useState({
      name:"",
      location:"",
      email:""
    })
   
    const handleClick=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      setEmployee({... employee,[name]:value});
    }  

    const saveHandler=(e)=>
    {
        e.preventDefault();
        console.log("employee =>"+JSON.stringify(employee)); 
        EmployeeService.addEmployees(employee).then(res=>
          {
            navigate('/fetch');
          })
    }
    const cancelHandler=(e)=>
    {
      navigate('/fetch');
    }

      return (
          <div className="container mt-3">
          <div className="row">
              <div className="card col-md-6 offset-md-3">
              <h3 className="text-center">Add Employee</h3>
                <form>
                  <div className="form my-2">
                    <label>Full Name:</label>
                    <input placeholder="Full Name" name="name" className="form-control"
                     value={employee.name}  onChange={handleClick}  />
                  </div>
                  <div className="form my-2">
                    <label>Location:</label>
                    <input placeholder="Location" name="location" className="form-control"
                        value={employee.location} onChange={handleClick}   />
                  </div>
  
                  <div className="form my-2">
                    <label>Email:</label>
                    <input placeholder="Email" name="email" className="form-control"
                       value={employee.email}  onChange={handleClick}  />
                  </div>
                  <button className='btn btn-success' onClick={saveHandler}>save</button>
                  <button className='btn btn-danger' onClick={cancelHandler} style={{marginLeft:"10px"}}>cancel</button>
                </form>
              </div>
            </div>
          </div>
      )
    }

export default AddEmployeeComponent