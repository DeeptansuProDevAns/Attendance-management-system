"use client"
import React, { useState } from 'react';

export default function Page() {
  const [formData, setFormData] = useState({
    fullName: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8282/api/employees/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('API Response:', data);
   
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        FullName:
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
      </label>
      {/* Add other form fields as needed */}
      <button type="submit">
        Submit
      </button>
    </form>
  );
}
