"use client";
import React, { use, useEffect, useState } from "react";
import "./page.css";

const Timer = () => {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [startTime, setStartTime] = useState(null);
  const [status, setStatus] = useState(null);
  const [startTimer, seStartTimer] = useState(null)
  const fetchStartTime = async () => {
    try {
      const response = await fetch(
        "http://localhost:8282/api/attendance/fetch-start-time/kamilpraseej@gmail.com"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setStartTime(new Date(data.time).getTime());
      seStartTimer(data.time)
      setStatus(data.status);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const updateTimer = () => {
    let timeDifference;

    if (status === "IN") {
      const currentTime = new Date().getTime();
      timeDifference = currentTime - startTime;  
  
    const newHours = String(
      Math.floor(timeDifference / (1000 * 60 * 60))
        .toString()
        .padStart(2, "0")
    );
    const newMinutes = String(
      Math.floor((timeDifference / (1000 * 60)) % 60)
        .toString()
        .padStart(2, "0")
    );
    const newSeconds = String(
      Math.floor((timeDifference / 1000).toFixed(0) % 60)
        .toString()
        .padStart(2, "0")
    );
  
    setHours(newHours);
    setMinutes(newMinutes);
    setSeconds(newSeconds);
    }
    else{
      if (startTimer) {
        const time = new Date(startTimer);
        const hours = time.getHours().toString().padStart(2, "0");
        const minutes = time.getMinutes().toString().padStart(2, "0");
        const seconds = time.getSeconds().toString().padStart(2, "0");
        
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
        
      }
    }
  };
  

  useEffect(() => {
    const fetchDataAndStartTime = async () => {
      try {
        await fetchStartTime();
  
        if (status === "IN") {
          const intervalId = setInterval(updateTimer, 1000);
          updateTimer(); 
          return () => clearInterval(intervalId); 
        } else {
          updateTimer();
        }
      } catch (error) {
        console.error("Error setting up timer:", error);
      }
    };
  
    fetchDataAndStartTime();
  
  }, [status]);
  

  return (
    <div className="timer">
      <span id="hours">{hours}</span>: 
      <span id="minutes">{minutes}</span>:
      <span id="seconds">{seconds}</span>
      <span> Hrs</span>
    </div>
  );
};

export default Timer;