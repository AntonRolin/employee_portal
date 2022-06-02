import React, { useEffect, useState } from 'react';
import { api } from '../../util/api';
import SingleRowList from '../../shared/SingleRowList/SingleRowList.jsx';
import { useNavigate} from 'react-router-dom';

function EmployeeList() {
    const [employees, setEmployees] = useState();
    let navigate = useNavigate();

    useEffect(() => {
      api.get(`/employees`).then(x => setEmployees(x.data));
    }, []);

    const listItems = () => {
      return employees.data.map(item => ({
        id: item.id,
        text: item.employee_name
      }));
    };

    function onListItemClick(id) {
      navigate(`/employee/${id}`);
    };

  return employees ? (
    <div>
      <SingleRowList title="Employees" items={listItems()} handleClick={onListItemClick}/>
    </div>
  ) : <></>;
}

export default EmployeeList