import { Routes, Route } from 'react-router-dom';

import paths from '../../paths';

import Home from "../Home/Home";
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import AddCar from '../AddCar/AddCar';
import CarList from '../CarList/CarList';

import './Body.css';


export default function Body() {
  return (
    <div id="body">
      <Routes>
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.login} element={<LoginForm />} />
        <Route path={paths.register} element={<RegistrationForm />} />
        <Route path={paths.addCar} element={<AddCar />} />
        <Route path={paths.carList} element={<CarList />} />
      </Routes>
    </div>
  )
}