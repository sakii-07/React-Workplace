let employees = [
    {eid:101, name:'saki',role:'dev',salary:12345},
    {eid:102, name:'supriya',role:'tester',salary:12345},
    {eid:103, name:'gayatri',role:'data analyst',salary:12345},
    {eid:104, name:'divya',role:'dev',salary:12345},
    {eid:105, name:'amruta',role:'tester',salary:12345}
  ]

export const allEmployees = () => employees;

export const Deleteemployee = (id)=>{
    employees = employees.filter((e) => e.eid != id)
}

export const saveEmployee = (emp) =>{
    if (employees.find((e)=>emp.eid == e.eid)){
        alert("employee id alredy exist..")
    }else{
        employees = [...employees, emp]
    }
}

export const updateEmployee = (emp) =>{
    let newData = employees.filter((e)=>emp.eid != e.eid)
    employees = [...newData, emp]
}