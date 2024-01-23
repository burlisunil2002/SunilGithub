import axios from 'axios';

const EMPLOYEE_API_BASE_URL="http://localhost:9010/api/fetch";

class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    addEmployees(employee)
    {
         return axios.post(EMPLOYEE_API_BASE_URL,employee);   
    }
    getEmployeeId(id)
    {
        return axios.get(EMPLOYEE_API_BASE_URL+'/'+id);
    }
    updateEmployee(id,employee)
    {
        return axios.put(EMPLOYEE_API_BASE_URL+'/'+id,employee);
    }
    deleteEmployee(id)
    {
        return axios.delete(EMPLOYEE_API_BASE_URL+'/'+id);
    }
}
export default new EmployeeService();