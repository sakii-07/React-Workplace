import React, { useState } from 'react'

const StudentAdmissionForm = () => {

    let [student, setStudent] = useState({
        sname:'',
        email:'',
        mobile:'',
        gender:'',
        course:'Java',
        city:'',
        hobbies:[]
    })

    let [hobbie, sethobbie] = useState([])

    const handleChange = (e)=>{
        const {name,type,value,checked} = e.target
        if (type == "checkbox"){
            if (checked){
                sethobbie([...hobbie, value])
            }else{
                let hb = hobbie.filter((h)=>h!=value)
                sethobbie(hb)
            }
        }
        setStudent({...student, [name]:type=="number"?Number(value):value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        let newStudent = {...student, hobbies:hobbie}
        console.log(newStudent)
        clearForm()
    }

    const clearForm = ()=>{
        setStudent({
            sname:'',
            email:'',
            mobile:'',
            gender:'',
            course:'Java',
            city:'',
            hobbies:[]
        })

        sethobbie([])
    }
  return (
    <div>
      <h3>6. student Admission Form</h3>
      <form onSubmit={handleSubmit}>
        sname : <input type="text" name="sname" value={student.sname} onChange={handleChange} /> <br /><br />
        email : <input type="email" name="email" value={student.email} onChange={handleChange} /> <br /><br />
        mobile : <input type="tel" name="mobile" value={student.mobile} onChange={handleChange} /> <br /><br />
        gender : <input type="radio" name="gender" value={"male"} onChange={handleChange} />Male
            <input type="radio" name="gender" value={"female"} onChange={handleChange} />Female <br /><br />

        course : <select name="course" value={student.course} onChange={handleChange}>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="Data Analytics">Data Analytics</option>
            <option value="Data Science">Data Science</option>
        </select><br /><br />
        city : <input type="text" name="city" value={student.city} onChange={handleChange} /> <br /><br />
        Hobbies : <br />
        <input type="checkbox" name="hobbies" value={"Reading"} onChange={handleChange} />Reading <br /><br />
        <input type="checkbox" name="hobbies" value={"Travel"} onChange={handleChange} />Travel <br /><br />
        <input type="checkbox" name="hobbies" value={"Music"} onChange={handleChange} />Music <br /><br />
        <input type="checkbox" name="hobbies" value={"Coding"} onChange={handleChange} />Coding <br /><br />
        <input type="checkbox" name="hobbies" value={"Sports"} onChange={handleChange} />Sports <br /><br />

        <button type='submit'>Add Student</button>
      </form>
    </div>
  )
}

export default StudentAdmissionForm
