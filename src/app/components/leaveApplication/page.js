'use client'
import { use, useEffect, useState } from 'react'
import './leaveApplication.css'

export default function leaveApplication() {
    const [leave, setLeave] = useState([])



    const getLeave = async () => {
        // for Reporting manager Leave Approve API
        const response = await fetch('http://localhost:8282/api/leaveApplications/getLeaveApplications')
        const data = await response.json()
        setLeave(data)
        console.log(data)
    }

    useEffect(() => {
        getLeave()
    }, [])

    const applicationStatus = async (leaveApplicationId, status) => {
        const response = await fetch(`http://localhost:8282/api/leaveApplications/update/${leaveApplicationId}?status=${status}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            getLeave();
        }
    };

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
                    {leave.map((leaveData) => (
                        <tr key={leaveData.leaveApplicationId}>
                            <td>{leaveData.employee.employeeId}</td>
                            <td>{leaveData.employee.firstName} {leaveData.employee.lastName}</td>
                            <td>{leaveData.leavePolicy.leaveType}</td>
                            <td>{leaveData.fromDate}</td>
                            <td>{leaveData.toDate}</td>
                            <td>{leaveData.noOfDays}</td>
                            <td>{leaveData.reason}</td>
                            <td>{leaveData.status}</td>
                            <td>
                                {leaveData.status === 'PENDING' && (
                                    <>
                                        <button className='btn btn-success' onClick={() => applicationStatus(leaveData.leaveApplicationId,"approved")}>
                                            <span className='bi bi-check-lg'></span>
                                        </button>
                                        <button className='btn btn-danger' onClick={() => applicationStatus(leaveData.leaveApplicationId,"declined")}>
                                            <span className='bi bi-x-lg'></span>
                                        </button>
                                    </>
                                )}
                            </td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};