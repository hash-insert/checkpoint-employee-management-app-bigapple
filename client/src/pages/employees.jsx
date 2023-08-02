import React from 'react'
import EmployeesCard from '../components/EmployeesCard'
import "../css/employeeList.css";
const EmployeePage = () => {
  return (
    <div className='list-container'>
        <EmployeesCard />
    </div>
  )
}

export default EmployeePage