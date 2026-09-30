import React, { use, useEffect, useState } from 'react'
import './App.css'
import { allEmployees, Deleteemployee, saveEmployee, updateEmployee } from './data'

const App = () => {

  let [employees, setEmployees] = useState([])
  let [show, setShow] = useState(false)
  let [employee, setEmployee] = useState({eid:'', name:'', role:'', salary:''})

  const handleChange = (e)=> setEmployee({...employee, [e.target.name]:e.target.value})
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    // console.log(employee)
    if (show){
      updateEmployee(employee)
    }else{
      saveEmployee(employee)
    }
    setEmployee({eid:'', name:'', role:'', salary:''})
    loadEmployees()
    setShow(false)
  }

  const loadEmployees = ()=>setEmployees(allEmployees())

  useEffect(()=>{
    loadEmployees()
  },[])

  const handleDeleteById = (id) =>{
    Deleteemployee(id)
    loadEmployees()
  }

  const handleUpdateById = (emp) =>{
    setEmployee(emp)
    setShow(true)
  }

  return (
    <div>
        <center>
          <h1>Employee Form</h1>
          <form onSubmit={handleSubmit}>
            eid : <input type="number" name="eid" value={employee.eid} onChange={handleChange} /><br /><br />
            name : <input type="text" name="name" value={employee.name} onChange={handleChange} /><br /><br />
            role : <input type="text" name="role" value={employee.role} onChange={handleChange} /><br /><br />
            salary : <input type="text" name="salary" value={employee.salary} onChange={handleChange} /><br /><br />

            <button type='submit'>{show?"Update Employee":"Add Employee"}</button>
          </form>

          <h1>Employee Table</h1>
            <table border={2}>
              <thead>
                <tr>
                  <th>EID</th>
                  <th>NAME</th>
                  <th>ROLE</th>
                  <th>SALARY</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((e)=>(
                  <tr key={e.eid}>
                    <td>{e.eid}</td>
                    <td>{e.name}</td>
                    <td>{e.role}</td>
                    <td>{e.salary}</td>
                    <td><button onClick={()=>handleDeleteById(e.eid)}>Delete</button>{" | "}
                    <button onClick={()=>handleUpdateById(e)}>Update</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </center>
    </div>
  )
}

export default App
