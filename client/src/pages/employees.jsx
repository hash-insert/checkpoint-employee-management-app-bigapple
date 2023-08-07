import React from 'react'
import EmployeesCard from '../components/EmployeesCard'
import "../css/employeeList.css";
import NavbarUser from '../components/Navbar/NavbarUser';
const EmployeePage = () => {
  return (
    <>
    <NavbarUser/>
    <div className='list-container'>
        <EmployeesCard />
    </div>
    </>
  )
}

export default EmployeePage