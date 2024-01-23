import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import {Link} from 'react-router-dom'

export default class ListEmployeeComponent extends Component
{
    constructor(props)
    	{
        	super(props);

 	       this.state={
        	    employees:[]
        	}
    	}
    deleteEmployees=(id)=>
    {
        EmployeeService.deleteEmployee(id).then(res=>
            {
                EmployeeService.getEmployees().then((res)=>
                {
                    this.setState({employees:res.data})
                }) 

            }).catch(error=>
                {
                    console.log(error);
                })
        }

    componentDidMount(){
        EmployeeService.getEmployees().then((res)=>
    {
        this.setState({employees:res.data})
    })
}

  render() {
    return (
      <div>
            <h2 className='text-center'>Employee List</h2>
            <div className='row'>
            <Link to="/add-employee" className='btn btn-primary w-100'>Add Employee</Link>    
                <table className='table  table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Employee-ID</th>
                            <th>Full Name</th>
                            <th>Location</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(
                                element=>
                                <tr key={element.id}>
                                      <td>{element.id}</td>
                                      <td>{element.name}</td>
                                      <td>{element.location}</td>
                                      <td>{element.email}</td> 
                                      <td><Link to={`/update/${element.id}`} className="btn btn-secondary" >update</Link>
                                      <button className='btn btn-danger' style={{marginLeft:"15px"}} onClick={()=> this.deleteEmployees(element.id)}>Delete</button>
                                      </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>        
      </div>
    )
  }
}
