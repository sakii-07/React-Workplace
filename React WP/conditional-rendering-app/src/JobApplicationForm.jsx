import React, { useState } from 'react'

const JobApplicationForm = () => {

    let [application, setApplication] = useState({
        name :'',
        email:'',
        mobile:'',
        qualification:'',
        experience:'',
        jobRole:'Python Developer',
        skills:[]
      })

      let [skill, setSkill] = useState([])

      const handleChange = (e)=>{
        const {name,value,type,checked} = e.target 

        if (type == "checkbox"){
            if (checked){
                setSkill([...skill, value])
            }else{
                let sk = skill.filter((s)=>s!=value)
                setSkill(sk)
            }
        }

        setApplication({...application,[name]:type=="number"?Number(value):value })
      }
    const handleSubmit = (e)=>{
        e.preventDefault()
        let newApplication = {...application, skills:skill}
        console.log(newApplication)
        clearForm()
    }

    const clearForm = ()=>{
        setApplication({
            name :'',
            email:'',
            mobile:'',
            qualification:'',
            experience:'',
            jobRole:'Python Developer',
            skills:[]
        })

        setSkill([])
    }

  return (
    <div>
      <h3>8. Job Application Form</h3>
      <form onSubmit={handleSubmit}>
        name : <input type="text" name='name' value={application.name} onChange={handleChange} /><br /><br />       
        email : <input type="email" name='email' value={application.email} onChange={handleChange} /><br /><br />       
        mobile : <input type="tel" name='mobile' value={application.mobile} onChange={handleChange} /><br /><br />       
        qualification : <input type="text" name='qualification' value={application.qualification} onChange={handleChange} /><br /><br />       
        experience : <input type="number" name='experience' value={application.experience} onChange={handleChange} /><br /><br /> 
        Job Role : <select name="jobRole" value={application.jobRole} onChange={handleChange}>
            <option value="Python Developer">Python Developer</option>
            <option value="React Developer">React Developer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="Data Analyst">Data Analyst</option>
            </select><br /><br />
        Skills : <br />
        <input type="checkbox" name="skills" value={"Python"} onChange={handleChange}/>Python <br /><br />  
        <input type="checkbox" name="skills" value={"Django"} onChange={handleChange}/>Django <br /><br />  
        <input type="checkbox" name="skills" value={"React"} onChange={handleChange}/>React <br /><br />  
        <input type="checkbox" name="skills" value={"SQL"} onChange={handleChange}/>SQL <br /><br />  
        <input type="checkbox" name="skills" value={"Git"} onChange={handleChange}/>Git <br /><br />  
       
       <button type='submit'>Submit Form</button>
      </form>
    </div>
  )
}

export default JobApplicationForm
