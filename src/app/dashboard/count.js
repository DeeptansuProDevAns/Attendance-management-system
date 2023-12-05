// // CountdownTimer.js
// import React, { useEffect, useState } from 'react';

// const CountdownTimer = () => {
//   const [hours, setHours] = useState('00');
//   const [minutes, setMinutes] = useState('00');
//   const [seconds, setSeconds] = useState('00');

//   const logtime = async () => {
//     try {
//       const response = await fetch('http://localhost:8282/api/attendance/fetch-start-time/deeptansu22@gmail.com');
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       const data = await response.json();
  
//       return data.time; // Return the entire data as the date string
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       throw error; // Propagate the error to the caller if needed
//     }
//   };
  
  
//   useEffect(() => {
//     const fetchDataAndStartTime = async () => {
//       try {
//         const data = await logtime();
//         const startTime = new Date(data).getTime();
  
//         const updateTimer = () => {
//           const currentTime = new Date().getTime();
//           const timeDifference = currentTime - startTime;
  
//           const newHours = String(
//             Math.floor(timeDifference / (1000 * 60 * 60))
//               .toString()
//               .padStart(2, '0')
//           );
//           const newMinutes = String(
//             Math.floor((timeDifference / (1000 * 60)) % 60)
//               .toString()
//               .padStart(2, '0')
//           );
//           const newSeconds = String(
//             Math.floor((timeDifference / 1000).toFixed(0) % 60)
//               .toString()
//               .padStart(2, '0')
//           );
  
//           setHours(newHours);
//           setMinutes(newMinutes);
//           setSeconds(newSeconds);
//         };
  
//         const intervalId = setInterval(updateTimer, 1000);
//         updateTimer(); // Initial update
  
//         return () => clearInterval(intervalId); // Clear interval on component unmount
//       } catch (error) {
//         console.error('Error setting up timer:', error);
//       }
//     };
  
//     fetchDataAndStartTime();
//   }, []);
  
    

//   return (
//     <div className="timer">
//       <span id="hours">{hours}</span>: <span id="minutes">{minutes}</span>:
//       <span id="seconds">{seconds}</span>
//       <span>Hrs</span>
//     </div>
//   );
// };

// export default CountdownTimer;




import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [startTime, setStartTime] = useState(null);
  const [status, setStatus] = useState(null);

  const fetchStartTime = async () => {
    try {
      const response = await fetch('http://localhost:8282/api/attendance/fetch-start-time/kamilpraseej@gmail.com');
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      setStartTime(new Date(data.time).getTime());
      setStatus(data.status);
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Propagate the error to the caller if needed
    }
  };

  const updateTimer = () => {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - startTime;

    const newHours = String(
      Math.floor(timeDifference / (1000 * 60 * 60))
        .toString()
        .padStart(2, '0')
    );
    const newMinutes = String(
      Math.floor((timeDifference / (1000 * 60)) % 60)
        .toString()
        .padStart(2, '0')
    );
    const newSeconds = String(
      Math.floor((timeDifference / 1000).toFixed(0) % 60)
        .toString()
        .padStart(2, '0')
    );

    setHours(newHours);
    setMinutes(newMinutes);
    setSeconds(newSeconds);
  };

  useEffect(() => {
    const fetchDataAndStartTime = async () => {
      try {
        await fetchStartTime();
        
        if (status === 'IN') {
          const intervalId = setInterval(updateTimer, 1000);
          updateTimer(); // Initial update
          return () => clearInterval(intervalId); // Clear interval on component unmount
        }
      } catch (error) {
        console.error('Error setting up timer:', error);
      }
    };

    fetchDataAndStartTime();
  }, [status]);

  return (
    <div className="timer">
      <span id="hours">{hours}</span>: <span id="minutes">{minutes}</span>:
      <span id="seconds">{seconds}</span>
      <span>Hrs</span>
    </div>
  );
};

export default CountdownTimer;