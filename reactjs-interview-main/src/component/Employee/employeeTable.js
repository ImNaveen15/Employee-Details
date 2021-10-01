import React from 'react';

const EmployeeTable = ({employeeList,handleEdit, handleDelete }) => {
    return <div>
        <div>
            <table>
                <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>DOB</th>
                <th>Designation</th>
                <th>Profile photo</th>
                <th>Experience</th>
                <th/>
                </thead>
                <tbody>
                {employeeList.map((data, index) => <tr key={index}>
                    <td>{data.first_name || '-'}</td>
                    <td>{data.last_name || '-'}</td>
                    <td>{data.dob || '-'}</td>
                    <td>{data.designation || '-'}</td>
                    <td><img className={'profile'} src={data.profile_photo_link} alt={'profile'}/></td>
                    <td>{data.experience || '-'}</td>
                    <td className={'actions'}>
                        <button onClick={()=>handleEdit(data.key)}>Edit</button>
                        <button onClick={() => handleDelete(data.key)}>Delete</button>
                    </td>
                </tr>)}
                </tbody>
            </table>
        </div>
    </div>
};

export default EmployeeTable;