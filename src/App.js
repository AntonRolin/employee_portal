import React from 'react';
import './App.css';
import EmployeeList from './features/Employees/EmployeeList';
import EmployeeDetails from './features/Employees/EmployeeDetails';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<EmployeeList/>}/>
        <Route path='/employee/:id' element={<EmployeeDetails/>}/>    
      </Routes>
    </Router>
  );
}

export default App;
