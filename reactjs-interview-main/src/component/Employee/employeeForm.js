import React, {useState} from 'react';
import './style.css';
import EmployeeTable from "./employeeTable";

const EmployeeForm = () => {
    const [firstName, setFirstName] = useState(''),
        [lastName, setLastName] = useState(''),
    [dob, setDob] = useState(''),
    [designation, setDesignation] = useState(''),
    [profilePhotoLink, setProfilePhotoLink] = useState(''),
    [experience, setExperience] = useState(''),
        [key, setKey] = useState(null),
    [employeeList, setEmployeeList] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            first_name: firstName,
            last_name: lastName,
            dob,
            designation,
            profile_photo_link: profilePhotoLink,
            experience,
            key: key || Math.random(),
        };
            if (employeeList.some(data => data.key === key)) {
                const alteredList = employeeList.map(data => {
                    if (data.key === key) {
                        return formData;
                    } else {
                        return data;
                    }
                });
                setEmployeeList(alteredList);
            } else {
                setEmployeeList([...employeeList, formData]);
            }
        setFirstName('');
        setLastName('');
        setDob('');
        setDesignation('');
        setProfilePhotoLink('');
        setExperience('');
        setKey(null);
        document.querySelector('#first_name').value = '';
        document.querySelector('#last_name').value = '';
        document.querySelector('#dob').value = '';
        document.querySelector('#designation').value = '';
        document.querySelector('#profile_photo_link').value = '';
        document.querySelector('#experience').value = '';
    },
    handleEdit = (selectedKey) => {
        const selectedEmp = employeeList.filter((data) => data.key === selectedKey)[0];
        document.querySelector('#first_name').value = selectedEmp.first_name;
        document.querySelector('#last_name').value = selectedEmp.last_name;
        document.querySelector('#dob').value = selectedEmp.dob;
        document.querySelector('#designation').value = selectedEmp.designation;
        document.querySelector('#profile_photo_link').value = selectedEmp.profile_photo_link;
        document.querySelector('#experience').value = selectedEmp.experience;
        setFirstName(selectedEmp.first_name);
        setLastName(selectedEmp.last_name);
        setDob(selectedEmp.dob);
        setDesignation(selectedEmp.designation);
        setProfilePhotoLink(selectedEmp.profile_photo_link);
        setExperience(selectedEmp.experience);
        setKey(selectedEmp.key);
    },
    handleDelete = (selectedKey) => {
        window.confirm('Are you sure?');
        const otherEmployees = employeeList.filter((data) => data.key !== selectedKey);
        setEmployeeList(otherEmployees);
    };
    return <div>
        <form className={'employee-form'}>
            <div>
            <label htmlFor="{'first_name'}">First name</label>
            <input type={'text'} id={'first_name'} onChange={(e)=>setFirstName(e.target.value)}/>
            </div>
            <div>
            <label htmlFor={'last_name'}>Last name</label>
                <input type={'text'} id={'last_name'} onChange={(e)=>setLastName(e.target.value)}/>
            </div>

            <div>
            <label htmlFor={'dob'}>DOB</label>
            <input type={'date'} id={'dob'} onChange={(e)=>setDob(e.target.value)}/>
            </div>

            <div>
            <label htmlFor={'designation'}>Designation</label>
            <input type={'text'} id={'designation'} onChange={(e)=>setDesignation(e.target.value)}/>
            </div>

            <div>
            <label htmlFor={'profile_photo_link'}>Profile Photo Link</label>
            <input type={'text'} id={'profile_photo_link'} onChange={(e)=>setProfilePhotoLink(e.target.value)}/>
            </div>

            <div>
            <label htmlFor={'experience'}>Experience</label>
            <input type={'text'} id={'experience'} onChange={(e)=>setExperience(e.target.value)}/>
            </div>

            <div className={'button-wrapper'}>
            <button type={'submit'} onClick={(e)=>handleSubmit(e)} >{key ? 'Edit' : 'Add'}</button>
            </div>
        </form>
        <EmployeeTable employeeList={employeeList} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </div>
};

export default EmployeeForm;