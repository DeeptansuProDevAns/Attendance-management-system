
'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function AddUser() {
    const router = useRouter();


    const [userAddress, setUserAddress] = useState({
        buildingNo: 0,
        buildingName: '',
        streetName: '',
        city: '',
        district: '',
        state: '',
        country: '',
        postalCode: 0
    });

    // Destructure user object
    const { buildingNo, buildingName, streetName, city,
        district, state, country, postalCode } = userAddress;

    // Handle input changes
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8282/api/employees/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('API Response:', responseData);
                router.push('/dashboard');
            } else {
                console.error('Failed to submit form. Server returned:', response.status, response.statusText);
                const errorResponseData = await response.json();
                console.error('Error Response Body:', errorResponseData);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    // Return JSX for the component
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border shadow rounded p-4 mt-2'>
                    <h2 className='text-center text-primary m-4'>Add New User</h2>
                    <form onSubmit={handleSubmit}>

                        {/* First Name */}
                        <div className='mb-3'>
                            <label htmlFor='firstName' className='form-label'>
                                First Name
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                name='firstName'
                                value={firstName}
                                onChange={(e) => onInputChange(e)}
                                placeholder='Enter Your First Name'
                                required
                            />
                        </div>

                        {/* Last Name */}
                        <div className='mb-3'>
                            <label htmlFor='lastName' className='form-label'>
                                Last Name
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                name='lastName'
                                value={lastName}
                                onChange={(e) => onInputChange(e)}
                                placeholder='Enter Your Last Name'
                                required
                            />
                        </div>

                        {/* Email ID */}
                        <div className='mb-3'>
                            <label htmlFor='emailId' className='form-label'>
                                Email ID
                            </label>
                            <input
                                type='email'
                                className='form-control'
                                name='emailId'
                                value={emailId}
                                onChange={(e) => onInputChange(e)}
                                placeholder='Enter Your Email ID'
                                required
                            />
                        </div>

                        {/* Age */}
                        <div className='mb-3'>
                            <label htmlFor='age' className='form-label'>
                                Age
                            </label>
                            <input
                                type='number'
                                className='form-control'
                                name='age'
                                value={age}
                                onChange={(e) => onInputChange(e)}
                                placeholder='Enter Your Age'
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div className='mb-3'>
                            <label htmlFor='phone' className='form-label'>
                                Phone Number
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                name='phone'
                                value={phone}
                                onChange={(e) => onInputChange(e)}
                                placeholder='Enter Your Phone Number'
                                required
                            />
                        </div>

                        {/* Gender */}
                        <div className='mb-3'>
                            <label htmlFor='gender' className='form-label'>
                                Gender
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                name='gender'
                                value={gender}
                                onChange={(e) => onInputChange(e)}
                                placeholder='Enter Your Gender'
                                required
                            />
                        </div>

                        {/* Is Reporting Manager */}
                        <div className='mb-3'>
                            <label htmlFor='isReportingManager' className='form-label'>
                                Is Reporting Manager
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                name='isReportingManager'
                                value={isReportingManager}
                                onChange={(e) => onInputChange(e)}
                                placeholder='Is Reporting Manager'
                                required
                            />
                        </div>

                        {/* Reporting Manager */}
                        <div className='mb-3'>
                            <label htmlFor='reportingManager' className='form-label'>
                                Reporting Manager
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                name='reportingManager'
                                value={reportingManager}
                                onChange={(e) => onInputChange(e)}
                                placeholder='Enter Reporting Manager'
                                required
                            />
                        </div>

                        {/* Building Number */}
                        <div className='mb-3'>
                            <label htmlFor='address.buildingNo' className='form-label'>
                                Building Number
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                name='address.buildingNo'
                                value={address.buildingNo}
                                onChange={(e) => onInputChange(e)}
                                placeholder='Enter Building Number'
                                required
                            />
                        </div>

                        {/* Building Name */}
                        <div className='mb-3'>
                            <label htmlFor='address.buildingName' className='form-label'>
                                Building Name
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                name='address.buildingName'
                                value={address.buildingName}
                                onChange={(e) => onInputChange(e)}
                                placeholder='Enter Building Name'
                                required
                            />
                        </div>

                        {/* Add other input fields for address properties (streetName, city, district, state, country, postalCode) */}

                        {/* Designation ID */}
                        <div className='mb-3'>
                            <label htmlFor='designation.designationId' className='form-label'>
                                Designation ID
                            </label>
                            <input
                                type='number'
                                className='form-control'
                                name='designation.designationId'
                                value={designation.designationId}
                                onChange={(e) => onInputChange(e)}
                                placeholder='Enter Designation ID'
                                required
                            />
                        </div>

                        {/* Location ID */}
                        <div className='mb-3'>
                            <label htmlFor='location.locationId' className='form-label'>
                                Location ID
                            </label>
                            <input
                                type='number'
                                className='form-control'
                                name='location.locationId'
                                value={location.locationId}
                                onChange={(e) => onInputChange(e)}
                                placeholder='Enter Location ID'
                                required
                            />
                        </div>

                        {/* Submit button */}
                        <button type='submit' className='btn btn-primary'>
                            Submit
                        </button>
                        <Link href='/dashboard' className='btn btn-danger mx-2'>
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
