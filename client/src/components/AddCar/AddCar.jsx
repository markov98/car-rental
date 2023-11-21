import { useState } from 'react';
import { addCar } from '../../services/carService';

export default function AddCar() {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    imgURL: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(await addCar(formData));
    } catch (err) {
      console.log(err);
    }
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
      <label>
        Image URL:
        <input
          type="text"
          name="imgURL"
          value={formData.imgURL}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <button type="submit">Add Car</button>
    </form>
  );
};