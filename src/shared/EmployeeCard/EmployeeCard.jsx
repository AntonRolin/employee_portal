import React, { useEffect } from 'react';
import './EmployeeCard.css';

function EmployeeCard( { employeeDetails }) {

    function getImage() {
        return employeeDetails.profile_image ? employeeDetails.profile_image : "https://icon-library.com/images/no-profile-picture-icon/no-profile-picture-icon-14.jpg";
    };

  return (
    <div className='EmployeeCard'>
        <div className='content'>
            <div className='left-container'>
                <img src={getImage()} alt="" className='profile-image'/>
            </div>
            <div className='right-container'>
                <p><b>Name</b> {employeeDetails.employee_name}</p>
                <p><b>Age</b> {employeeDetails.employee_age}</p>
                <p><b>Salary</b> {employeeDetails.employee_salary} kr</p>
            </div>
        </div>
    </div>
  )
}

export default EmployeeCard