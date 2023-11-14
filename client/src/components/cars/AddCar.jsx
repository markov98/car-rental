import React, { useState } from 'react';

export default function AddCar() {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      make: '',
      model: '',
      year: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Make:
        <input
          type="text"
          name="make"
          value={formData.make}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <label>
        Model:
        <input
          type="text"
          name="model"
          value={formData.model}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <label>
        Year:
        <input
          type="text"
          name="year"
          value={formData.year}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <button type="submit">Add Car</button>
    </form>
  );
};