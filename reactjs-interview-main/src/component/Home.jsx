import React, { Component } from 'react'
import EmployeeForm from "./Employee/employeeForm";

class Home extends Component {

    constructor(props) {
        super(props);
    }
  
    render() {
        return ( <div><h2 className="text-center">Home</h2>
        <EmployeeForm/>
        </div>);
    }

}

export default Home;