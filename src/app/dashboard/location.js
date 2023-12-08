import React, { useState } from "react";

const Location = () => {
  const [attendanceStatus, setAttendanceStatus] = useState("check-in");

  const locationApi = async (position, status) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const apiKey = "pk.997a569a2b5c1263a7edcf7312a209d0";
    const response = await fetch(
      `https://us1.locationiq.com/v1/reverse.php?key=${apiKey}&lat=${latitude}&lon=${longitude}&format=json`
    );
    const data = await response.json();
    const location = data.display_name;
    sendAttendanceStatus(status, location);
  };

  const sendAttendanceStatus = async (status, location) => {

    const response = await fetch(
      `http://localhost:8282/api/attendance/${status}/gurujapumanohar75@gmail.com?location=${location}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
      
    );
    console.log(status, location)
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => locationApi(position, attendanceStatus),
      (error) => console.error("Error getting location:", error)
    );
  };

  const toggleStatus = () => {
    const newStatus = attendanceStatus === "check-in" ? "check-out" : "check-in";
    setAttendanceStatus(newStatus);
  };

  return (
    <div>
      <button className={`btn ${attendanceStatus === "check-in" ? "btn-success" : "btn-danger"}`} onClick={() => { getLocation(); toggleStatus(); }}>
        {attendanceStatus === "check-in" ? "Check-In" : "Check-Out"}
      </button>
    </div>
  );
};

export default Location;