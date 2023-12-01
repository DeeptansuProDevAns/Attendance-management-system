'use client'
import './profile.css'
import { use, useEffect, useState } from 'react'


export default function profile() {
    // const {id} = useParams()

    const [user, setUser] = useState([])
    const [userAddress, setUserAddress] = useState([])
    const [userDesignation, setUserDesignation] = useState([])
    const [userDepartment, setUserDepartment] = useState([])

    const addEmployee = async () => {
        const response = await fetch('http://localhost:8282/api/employees/getEmployee/deeptansu22@gmail.com')
        const data = await response.json()
        // setUser(data.designationID)
        setUser(data)
        console.log(data);
        // setUserAddress(data.address)
        // setUserDesignation(data.designation)
        // console.log(data.designation.department.departmentName)
        console.log(user.designation.department.departmentName)


        // console.log(data);

        console.log(data);
    }

    useEffect(() => {
        addEmployee()
    }, [])

    console.log(user);

    // console.log(user.designation.designationName);

    return (
        <div>
            <div className='mainpage'>
                <div className='cards'>
                    <h3>About Me</h3>
                    <ul>
                        <li><span className='bi bi-diagram-3-fill icon-text'></span>{userDepartment.departmentName}</li>
                        <li><span className='bi bi-person-circle icon-text'></span>{userDesignation.designationName}</li>
                        <li><span className='bi bi-reception-4 icon-text'></span> {user.phone}</li>
                        <li><span className='bi bi-geo-alt-fill icon-text'></span> Bangalore</li>
                        <li><span className='bi bi-calendar-plus icon-text'></span> General</li>
                        <li><span className='bi bi-clock-history icon-text'></span> (GMT+05:30)</li>
                    </ul>

                </div>
                <div className='cards'>
                    <h3>Organisation Structure</h3>
                    <ul>
                        <li><span className='bi bi-gear-wide-connected icon-text'></span> {userDepartment.departmentName}</li>
                        <li><span className='bi bi-diagram-3-fill icon-text'></span> {userDesignation.designationName}</li>
                    </ul>

                </div>
                <div className='cards'>
                    <h3>SkillSet</h3>
                    <ul>
                        <li><span className='bi bi-gear-wide-connected icon-text'></span> Department</li>
                        <li><span className='bi bi-diagram-3-fill icon-text'></span> internship/Trainee</li>
                    </ul>

                </div>
                <div className='cards'>
                    <h3>Basic Details</h3>
                    <div>
                        <div className='basicdetails'>
                            <div className='col-6'>Employee Name</div>
                            <div className='col-6'>{user.firstName} {user.lastName}</div>
                        </div>
                        <div className='basicdetails'>
                            <div className='col-6'>Department</div>
                            {/* <div className='col-6'>{userDepartment.departmentName }</div> */}
                        </div>
                        <div className='basicdetails'>
                            <div className='col-6'>Employee ID : </div>
                            <div className='col-6'>{user.employeeId}</div>
                        </div>
                        <div className='basicdetails'>
                            <div className='col-6'>Reporting To</div>
                            <div className='col-6'>{user.reportingManager}</div>
                        </div>
                        <div className='basicdetails'>
                            <div className='col-6'>Email :</div>
                            <div className='col-6'>{user.emailId}</div>
                        </div>
                        <div className='basicdetails'>
                            <div className='col-6'>Age :</div>
                            <div className='col-6'>{user.age}</div>
                        </div>
                        <div className='basicdetails'>
                            <div className='col-6'>Gender :</div>
                            <div className='col-6'>{user.gender}</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}