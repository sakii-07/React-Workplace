import React, { useState } from 'react'

const EmployeeForm = () => {

    let [employee, setEmployee] = useState({
        empId:'',
        name:'',
        email:'',
        mobile:'',
        department:'IT',
        salary:'',
        employmentType:'Full Time',
        skills : []
    })

    let [skill, setSkill] = useState([])

    const handleChange = (e)=>{
        const {name,type,value,checked} = e.target 
        if (type == "checkbox"){
            if (checked){
                setSkill([...skill,value])
            }else{
                let skl = skill.filter((s)=>s!=value)
                setSkill(skl)
            }
        }
        setEmployee({...employee, [name]:type=="number"?Number(value):value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        let newEmployee = {...employee, skills:skill}
        console.log(newEmployee)
        clearForm()
    }

    const clearForm = ()=>{
        setEmployee({
        empId:'',
        name:'',
        email:'',
        mobile:'',
        department:'IT',
        salary:'',
        employmentType:'Full Time',
        skills : []
    })

    setSkill([])
    }
  return (
    <div>
      <h3>4. Employee Form</h3>
        <form onSubmit={handleSubmit}>
             empId : <input type="number" name="empId" value={employee.empId} onChange={handleChange} required /><br /><br />
            name : <input type="text" name="name" value={employee.name} onChange={handleChange} required /><br /><br />
            email : <input type="email" name="email" value={employee.email} onChange={handleChange} required /><br /><br />
            Mobile : <input type="tel" maxLength={10} name="mobile" value={employee.mobile} onChange={handleChange} required /><br /><br />
            Department : <select name="department" value={employee.department} onChange={handleChange}>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
            </select><br /><br />
            salary : <input type="number" name="salary" value={employee.salary} onChange={handleChange} required /><br /><br />
            employment Type : <select name="employmentType" value={employee.employmentType} onChange={handleChange}>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
            </select><br /><br />
            Skills : <input type="checkbox" name='skills' value={"Java"} onChange={handleChange} /> Java<br /><br />
            <input type="checkbox" name='skills' value={"Python"} onChange={handleChange}/>Python <br /><br />
            <input type="checkbox" name='skills' value={"React"} onChange={handleChange} /> React<br /><br />
            <input type="checkbox" name='skills' value={"SQL"} onChange={handleChange}/> SQL<br /><br />

            <button type='submit'>Register Employee</button>
        </form>
    </div>
  )
}

export default EmployeeForm
