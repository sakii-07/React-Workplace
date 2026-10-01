import React, { useState } from 'react'

const Login = () => {

    let [show, setShow] = useState(false)

    let [login, setLogin] = useState({username:'', password:''})

    const handleChange = (e)=>setLogin({...login,[e.target.name]:e.target.value})

    const handleSubmit = (e)=>{
        e.preventDefault()
        setLogin({username:'', password:''})
    }
  return (
    <div>
      <h3>2. Login form</h3>

      <form onSubmit={handleSubmit}>
        username : <input type="text" name="username" value={login.username} onChange={handleChange} required /><br /><br />
        password : <input type={show?"text":"password"} name="password" value={login.password} onChange={handleChange} required /> <button type='button' onClick={()=>setShow(!show)}>{show?"Hind password":"show password"}</button><br /><br />

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
