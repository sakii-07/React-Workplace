import React, { useState } from 'react'

const ChangePasswordForm = () => {

    let [change, setChange] = useState({
        currentPassword:'',
        newPassword : '',
        confirmPassword:''
    })

    let [show, setShow] = useState(false)

    const handleChange = (e)=>setChange({...change, [e.target.name]:e.target.value})

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (change.currentPassword == "tka123"){
            if (change.newPassword == change.confirmPassword){
                console.log(change)
                clearForm()
            }else{
                alert("new password and confirm password must be same")
            }
        }else{
            alert("current password is wrong")
        }
    }

    let clearForm = ()=>{
        setChange({
            currentPassword:'',
            newPassword : '',
            confirmPassword:''
        })
    }
  return (
    <div>
      <h3>7. Change Password Form</h3>
      <form onSubmit={handleSubmit}>
        currentPassword : <input type={show?"text":"password"} name="currentPassword" value={change.currentPassword} onChange={handleChange} />{" "}<button type='button' onClick={()=>setShow(!show)}>{show?"Hide password":"show password"}</button><br /><br />
        newPassword : <input type={show?"text":"password"} name="newPassword" value={change.newPassword} onChange={handleChange} /><br /><br />
        confirmPassword : <input type={show?"text":"password"} name="confirmPassword" value={change.confirmPassword} onChange={handleChange} /><br /><br />

        <button type='submit'>Change Password</button>
      </form>
    </div>
  )
}

export default ChangePasswordForm
