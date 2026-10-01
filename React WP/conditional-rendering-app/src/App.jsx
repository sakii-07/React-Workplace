import './App.css'
import React, { useState } from 'react'
import Login from './Login'
import Feedback from './Feedback'
import RegistrationForm from './RegistrationForm'
import EmployeeForm from './EmployeeForm'
import ProductEntryForm from './ProductEntryForm'
import StudentAdmissionForm from './StudentAdmissionForm'
import ChangePasswordForm from './ChangePasswordForm'
import JobApplicationForm from './JobApplicationForm'
import LoanApplicationForm from './LoanApplicationForm'
import OnlineOrderForm from './OnlineOrderForm'

const App = () => {

  return (
  <div>
    <h1>Conditional Rendering</h1>
    <Feedback/>
    <Login/>
    <RegistrationForm/>
    <EmployeeForm/>
    <ProductEntryForm/>
    <StudentAdmissionForm/>
    <ChangePasswordForm/>
    <JobApplicationForm/>
    <LoanApplicationForm/>
    <OnlineOrderForm/>
  </div>
  )
}

export default App
