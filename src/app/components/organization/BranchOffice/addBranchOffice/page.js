'use client'
import { useState } from "react"
import './addBranchOffice.css'
import { useRouter } from "next/navigation";



export default function AddBranchOffice() {

    const router = useRouter();

    const [branchOffice, setBranchOffice] = useState({
        
    })

    const {  } = branchOffice

    const onInputChange = (e) => {
        setHoliDay({ ...holiDay, [e.target.name]: e.target.value })
    }

    const onSubmit = async(e) => {
        e.preventDefault()
        try {
                  const response = await fetch('http://localhost:8282/api/branchOffices/add', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(holiDay),
                  });
            
                  if (response.ok) {
                    const responseData = await response.json();
                    console.log('API Response:', responseData);
                    router.push('/components/branchOffice/viewBranchOffice'); 
                  } else {
                    console.error('Failed to submit form. Server returned:', response.status, response.statusText);
                    const errorResponseData = await response.json();
                    console.error('Error Response Body:', errorResponseData);
                  }
                } catch (error) {
                  console.error('Error submitting form:', error);
                }

                console.log(holiDay);
        // navigate('/') 
       }

    return (
        <div>
            <div className='container'>
                <div className='row row1'>
                    <div className='col-md-6 offset-md-3 border boxi rounded p-4 mt-2'>
                        <h2 className='text-center title'>Add BranchOffice</h2>
                        <form onSubmit={(e)=>onSubmit(e)}>


                        <div className='mb-3'>
                            <label htmlFor='branchOfficeDate' className='form-label'>Date</label>
                            <input type='date' className='form-control' name='branchOfficeDate' value={branchOfficeDate} min={today}
                                onChange={(e) => onInputChange(e)} placeholder='Enter date' pattern="\d{4}-\d{2}-\d{2}" required />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='branchOfficeName' className='form-label'>BranchOffice Name</label>
                            <input type='text' className='form-control' name='branchOfficeName' value={branchOfficeName}
                                onChange={(e) => onInputChange(e)} placeholder='Enter BranchOffice Name' required />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='branchOfficeType' className='form-label'>BranchOffice Type </label>:
                            <select name="branchOfficeType" id="branchOfficeType" required value={branchOfficeType} onChange={(e) => onInputChange(e)}>
                                <option>SELECT</option>
                                <option value="MANDATORY">MANDATORY</option>
                                <option value="OPTIONAL">OPTIONAL</option>
                            </select>

                        </div>

                        <div className="button"><button type='submit' className=''>Submit</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}