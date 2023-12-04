'use client'

import { useState, useEffect } from 'react'
import './holiday.css'




export default function Holiday() {

    const [holiday, setHoliday] = useState([])

    const holidayApi = async () => {
        const response = await fetch('http://localhost:8282/api/holidays/getHolidayCalenders')
        const data = await response.json()
        setHoliday(data)
        console.log(data);
    }

    useEffect(() => {
        holidayApi()
    }, [])


    return (
        <div>
            <h3 className='heading'>Calender Year Holidays</h3>
            <table className='tableData'>
                <thead>
                    <tr>
                        {/* <td>HolidayId</td> */}
                        <td>Date</td>
                        <td>Name</td>
                        <td>Type</td>
                    </tr>
                </thead>
                <tbody>
                    {
                       holiday.map((item)=>(
                        <tr>
                            <td>{item.holidayDate}</td>
                            <td>{item.holidayName}</td>
                            <td>{item.holidayType}</td>
                        </tr>
                       )) 
                    }
                </tbody>
            </table>
        </div>
    )
}