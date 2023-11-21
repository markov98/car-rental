import { Routes, Route } from 'react-router-dom';
import Home from "../Home/Home";
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import AddCar from '../AddCar/AddCar';
import './Body.css';
import CarList from '../CarList/CarList';

export default function Body() {
  return (
    <div id="body">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegistrationForm />} />
        <Route path='/add-car' element={<AddCar />} />
        <Route path='/car-list' element={<CarList />} />
      </Routes>
    </div>
  )
}