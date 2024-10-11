// /src/components/CreateForm.js
import React, { useState } from 'react';

const CreateForm = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);
    setFormData({ name: '', email: '', phone: '' }); // Clear form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Customer</h2>
      <label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} /></label>
      <label>Email: <input type="email" name="email" value={formData.email} onChange={handleChange} /></label>
      <label>Phone: <input type="text" name="phone" value={formData.phone} onChange={handleChange} /></label>
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateForm;
