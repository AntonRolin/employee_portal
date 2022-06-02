import React, { useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import { api } from '../../util/api';
import EmployeeCard from '../../shared/EmployeeCard/EmployeeCard';
import BackButton from '../../shared/BackButton/BackButton';
import './EmployeeDetails.css';

function EmployeeDetails() {
    const [employeeDetails, setEmployeeDetails] = useState();
    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        api.get(`/employee/${id}`).then(x => setEmployeeDetails(x.data));
      }, [id]);

      function onBackButtonClick() {
        navigate('/');
      };

  return employeeDetails ? (
    <div className='EmployeeDetails'>
      <div>
        <BackButton handleClick={onBackButtonClick}/>
      </div>
        <EmployeeCard employeeDetails={employeeDetails.data}/>
    </div>
  ) : <></>;
}

export default EmployeeDetails