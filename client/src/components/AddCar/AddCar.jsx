import useForm from '../../hooks/useForm';
import { useNavigate } from "react-router-dom";
import { addCar } from '../../services/carService';
import paths from '../../paths';
import '../Form.css';

export default function AddCar() {
  const { values, onChange, onSubmit } = useForm(addCarSubmitHndler, {
    make: '',
    model: '',
    year: '',
    imgUrl: '',
    price: ''
  })

  const navigate = useNavigate()

  async function addCarSubmitHndler() {
    try {
      await addCar(values);
      navigate(paths.carList)
    } catch (err) {
      alert(err);
    }
  };

  return (<>
    <h2>Add Car</h2>
    <form onSubmit={onSubmit}>
      <label>
        Make:
        <input
          type="text"
          name="make"
          value={values.make}
          onChange={onChange}
          required
        />
      </label>
      <br />
      <label>
        Model:
        <input
          type="text"
          name="model"
          value={values.model}
          onChange={onChange}
          required
        />
      </label>
      <br />
      <label>
        Year:
        <input
          type="number"
          name="year"
          value={values.year}
          onChange={onChange}
          required
        />
      </label>
      <br />
      <label>
        Image URL:
        <input
          type="text"
          name="imgUrl"
          value={values.imgUrl}
          onChange={onChange}
          required
        />
      </label>
      <br />
      <label>
        $/Hour:
        <input
          type="number"
          name="price"
          value={values.price}
          onChange={onChange}
          required
        />
      </label>
      <br />
      <button type="submit">Add Car</button>
    </form>
  </>
  );
};