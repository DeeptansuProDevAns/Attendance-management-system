'use client'
import { use, useEffect, useState } from 'react'
import './leaveApplication.css'

export default function leaveApplication() {
    const [leave, setLeave] = useState([])



    const getLeave = async () => {
        // for Reporting manager Leave Approve API
        const response = await fetch('http://localhost:8282/api/leaveApplications/getLeaveApplications/kamilpraseej@gmail.com')
        const data = await response.json()
        setLeave(data)

        console.log(data);
    }

    useEffect(() => {
        getLeave()
    }, [])


    const rejectApplication = async (data) => {
        const response = await fetch('http://localhost:8282/api/leaveApplications/update?status=decline', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.data,
      });
    //   getLeave()

    }

    return (
        <div>
            <table className='tableData'>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Leave Type</th>
                        <th>From Date</th>
                        <th>To Date</th>
                        <th>No of Days</th>
                        <th>Reason</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {leave.map((data) => (
                        <tr key={data.leaveApplicationId}>
                            <td>{data.employee.employeeId}</td>
                            <td>{data.employee.firstName} {data.employee.lastName}</td>
                            <td>{data.leavePolicy.leaveType}</td>
                            <td>{data.fromDate}</td>
                            <td>{data.toDate}</td>
                            <td>{data.noOfDays}</td>
                            <td>{data.reason}</td>
                            <td>{data.status}</td>
                            <td>
                                <button className='btn btn-success'><span className='bi bi-check-lg'></span></button>
                                <button className='btn btn-danger' onClick={()=>{rejectApplication(data)}}><span className='bi bi-x-lg'></span></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};