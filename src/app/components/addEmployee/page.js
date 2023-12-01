

// export default function AddUser() {
//   const router = useRouter();

//   const [user, setUser] = useState({
//     name: '',
//     userName: '',
//     email: ''
//   });

//   const { name, userName, email } = user;

//   const onInputChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post('http://localhost:8080/user', user);
//     router.push('/');
//   };

//   return (
//     <div className='container'>
//       <div className='row'>
//         <div className='col-md-6 offset-md-3 border shadow rounded p-4 mt-2'>
//           <h2 className='text-center m-4'>Register User</h2>

//           <form onSubmit={(e) => onSubmit(e)}>
//             <div className='mb-3'>
//               <label htmlFor='name' className='form-label'>
//                 Name
//               </label>
//               <input
//                 type='text'
//                 className='form-control'
//                 name='name'
//                 value={name}
//                 onChange={(e) => onInputChange(e)}
//                 placeholder='Enter Your Name'
//                 required
//               />
//             </div>
//             <div className='mb-3'>
//               <label htmlFor='userName' className='form-label'>
//                 UserName
//               </label>
//               <input
//                 type='text'
//                 className='form-control'
//                 name='userName'
//                 value={userName}
//                 onChange={(e) => onInputChange(e)}
//                 placeholder='Enter Your UserName'
//                 required
//               />
//             </div>
//             <div className='mb-3'>
//               <label htmlFor='email' className='form-label'>
//                 E-mail
//               </label>
//               <input
//                 type='text'
//                 className='form-control'
//                 name='email'
//                 value={email}
//                 onChange={(e) => onInputChange(e)}
//                 placeholder='Enter Your Email Address'
//                 required
//               />
//             </div>
//             <button type='submit' className='btn btn-primary '>
//               Submit
//             </button>
//             <Link href='/'>
//               <a className='btn btn-danger mx-2'>Cancel</a>
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }





'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function AddUser() {

  const router = useRouter()

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    age: 0,
    phone:'',
    gender: '',
    isReportingManager: false,
    reportingManager: '',
    address: {
      buildingNo: 0,
      buildingName: '',
      streetName: '',
      city: '',
      district: '',
      state: '',
      country: '',
      postalCode: 0
    },
    designation: {
      designationId: 0
    },
    location: {
      locationId: 0
    }
  });

  const { firstName, lastName, emailId,age, phone, gender,isReportingManager, reportingManager,
    address, designation, location  } = user

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }


  // start
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
  

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border shadow rounded p-4 mt-2'>
          <h2 className='text-center text-primary m-4'>Add New User</h2>
          <form onSubmit={handleSubmit}>

            <div className='mb-3'>
              <label htmlFor='firstName' className='form-label'>
              firstName
              </label>
              <input
                type='text'
                className='form-control'
                name='firstName'
                value={firstName}
                onChange={(e) => onInputChange(e)}
                placeholder='Enter Your FullName'
                required
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='lastName' className='form-label'>
              lastName
              </label>
              <input
                type='text'
                className='form-control'
                name='lastName'
                value={lastName}
                onChange={(e) => onInputChange(e)}
                placeholder='Enter Your LastName'
                required
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='emailId' className='form-label'>
              emailId
              </label>
              <input
                type='email'
                className='form-control'
                name='emailId'
                value={emailId}
                onChange={(e) => onInputChange(e)}
                placeholder='Enter Your emailId'
                required
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='age' className='form-label'>
              age
              </label>
              <input
                type='number'
                className='form-control'
                name='age'
                value={age}
                onChange={(e) => onInputChange(e)}
                placeholder='Enter Your age'
                required
              />
            </div>


            <div className='mb-3'>
              <label htmlFor='phone' className='form-label'>
              phone
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

            <div className='mb-3'>
              <label htmlFor='gender' className='form-label'>
              gender
              </label>
              <input
                type='text'
                className='form-control'
                name='gender'
                value={gender}
                onChange={(e) => onInputChange(e)}
                placeholder='Enter Your gender'
                required
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='isReportingManager' className='form-label'>
              isReportingManager
              </label>
              <input
                type='text'
                className='form-control'
                name='isReportingManager'
                value={isReportingManager}
                onChange={(e) => onInputChange(e)}
                placeholder='isReportingManager'
                required
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='reportingManager' className='form-label'>
              reportingManager
              </label>
              <input
                type='text'
                className='form-control'
                name='reportingManager'
                value={reportingManager}
                onChange={(e) => onInputChange(e)}
                placeholder='reportingManager'
                required
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='address.buildingNo' className='form-label'>
              buildingNo
              </label>
              <input
                type='text'
                className='form-control'
                name='address.buildingNo'
                value={address.buildingNo}
                onChange={(e) => onInputChange(e)}
                placeholder='reportingManager'
                required
              />
            </div>

            <button type='submit' className='btn btn-primary '>
              Submit
            </button>
            <Link href='/dashboard' className='btn btn-danger mx-2'>
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}




// export function generateMetadata({params}){
//   return{
//     title:'Add new user'
//   }
// }