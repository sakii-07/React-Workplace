import React, { useState } from 'react'

const Feedback = () => {
  
  let [per, setPer] = useState([])

  let [feedback, setFeedback] = useState({customerName:'', rating:'1',performance:[]})

  const handleChange = (e)=>{
    const {name,type,value, checked} = e.target 

    if (type == "checkbox"){
      if (checked){
        setPer([...per, value])
      }else{
        let perform = per.filter((s)=>s!=value)
        setPer(perform)
      }
    }
    setFeedback({...feedback, [name]:(type == 'number')?Number(value):value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    const finalFeedback = {...feedback, performance:per}
    console.log(finalFeedback)

    // (feedback.rating == "1" || feedback.rating == "2")?alert("We are sorry for your experience"):alert("Thank you for your feedback")
    clearForm()
  }

  const clearForm =()=>{
    setFeedback({
      customerName:'',
      rating:'1',
      performance:[]
      })

      setPer([])
  }
  return (
    <div>

      <h3>1. Feedback Form</h3>

      <form onSubmit={handleSubmit}>
        customer name : <input type="text" name='customerName' value={feedback.customerName} onChange={handleChange} required/><br /><br />
        Rating : <select name="rating" onChange={handleChange} required>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select><br /><br />
        performance : <br />
        <input type="checkbox" name='performance' value={"Excellent"} onChange={handleChange} />Excellent <br />
        <input type="checkbox" name='performance' value={"Safe"} onChange={handleChange} />Safe<br />
        <input type="checkbox" name='performance' value={"Confortable"} onChange={handleChange} />Confortable<br />
        <input type="checkbox" name='performance' value={"Good"} onChange={handleChange}/>Good<br /><br />

        <button type='submit'>Submit Feedback</button>
      </form>
      
    </div>
    )
}

export default Feedback
