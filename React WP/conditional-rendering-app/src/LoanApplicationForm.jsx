import React, { useState } from 'react'

const LoanApplicationForm = () => {

    let [loan,setLoan] = useState({
        customerName :'',
        age:'',
        employmentType:'Salaried',
        monthlyIncome:'',
        loanAmount:'',
        loanTenure:'',
        creditScore:''
    })

    const handleChange =(e)=>{
        const {name,type,value} = e.target
        setLoan({...loan, [name]:type == "number"?Number(value):value})
    }
    let msg;
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (loan.age>=21 && loan.monthlyIncome*12 >= 25000 && loan.creditScore >= 650){
             console.log(loan)
            clearForm()
            alert("Eligible for Loan")
        }else{
            alert("Not Eligible for Loan")
        }
    }

    const clearForm = ()=>{
        setLoan({
            customerName :'',
            age:'',
            employmentType:'Salaried',
            monthlyIncome:'',
            loanAmount:'',
            loanTenure:'',
            creditScore:''
        })
    }
  return (
    <div>
      <h3>9. Loan Application Form</h3>
      <form onSubmit={handleSubmit}>
        customerName : <input type="text" name='customerName' value={loan.customerName} onChange={handleChange} /><br /><br />
        age : <input type="number" name='age' value={loan.age} onChange={handleChange} /><br /><br />
        monthlyIncome : <input type="number" name='monthlyIncome' value={loan.monthlyIncome} onChange={handleChange} /><br /><br />
        employmentType : <select name="employmentType" value={loan.employmentType} onChange={handleChange}>
            <option value="Salaried">Salaried</option>
            <option value="Business">Business</option>
            <option value="Self Employed">Self Employed</option>
        </select><br /><br />
        loanAmount : <input type="number" name='loanAmount' value={loan.loanAmount} onChange={handleChange} /><br /><br />
        loanTenure : <input type="number" name='loanTenure' value={loan.loanTenure} onChange={handleChange} /><br /><br />
        creditScore : <input type="number" name='creditScore' value={loan.creditScore} onChange={handleChange} /><br /><br />

        <button type='submit'>Add Loan</button>
      </form>
      {msg}
    </div>
  )
}

export default LoanApplicationForm
