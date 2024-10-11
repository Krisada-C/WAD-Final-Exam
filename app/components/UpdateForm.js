// /src/components/UpdateForm.js
import React, { useState, useEffect } from 'react';

const UpdateForm = ({ selectedCustomer, onUpdate }) => {
  const [formData, setFormData] = useState(selectedCustomer);

  useEffect(() => {
    setFormData(selectedCustomer);
  }, [selectedCustomer]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Customer</h2>
      <label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} /></label>
      <label>Email: <input type="email" name="email" value={formData.email} onChange={handleChange} /></label>
      <label>Phone: <input type="text" name="phone" value={formData.phone} onChange={handleChange} /></label>
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateForm;
