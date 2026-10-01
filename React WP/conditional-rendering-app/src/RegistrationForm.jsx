import React, { useState } from 'react'

const RegistrationForm = () => {

    let [register, setRegister] = useState({name:'',email:'', password:'', confirmPassword:'',gender:'',city:'Solapur', termConditions:false})
    let [show, setShow] = useState(false)

    const handleChange = (e)=> setRegister({...register, [e.target.name]:e.target.value})

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (register.termConditions == "true" && register.password == register.confirmPassword){
            console.log(register)
            clearForm()
        }else{
            (register.termConditions == "true")?alert("password must be same"):alert("select checkbox")
        }
    }

    const clearForm = ()=>{
        setRegister({
            name:'',
            email:'', 
            password:'', 
            confirmPassword:'',
            gender:'',
            city:'Solapur', 
            termConditions:false
        })
    }
  return (
    <div>
      <h3>3. Registation Form</h3>
      <form onSubmit={handleSubmit}>
        name : <input type="text" name='name' value={register.name} onChange={handleChange} required /><br /><br />
        email : <input type="email" name='email' value={register.email} onChange={handleChange} required /><br /><br />
        password : <input type={show?"text":"password"} name='password' value={register.password} onChange={handleChange} required /><button type='button' onClick={()=>setShow(!show)}>{show?"Hide password":"show password"}</button><br /><br />
        confirmPassword : <input type={show?"text":"password"} name='confirmPassword' value={register.confirmPassword} onChange={handleChange} required /><button type='button' onClick={()=>setShow(!show)}>{show?"Hide password":"show password"}</button><br /><br />
        Gender : 
        <input type="radio" name='gender' value="Male" onChange={handleChange} required />Male
        <input type="radio" name='gender' value="Female" onChange={handleChange} required />Female<br /><br />
        city : <select name="city" value={register.city} onChange={handleChange} required>
            <option value="Solapur">Solapur</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Satara">Satara</option>
        </select><br /><br />

        term and Conditions : <input type="checkbox" name='termConditions' value={true} onChange={handleChange}/><br /><br />

        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default RegistrationForm
