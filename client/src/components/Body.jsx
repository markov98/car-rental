import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import LoginForm from './LogInForm';
import RegistrationForm from './RegistrationForm';
import AddCar from './AddCar';
import '../style/Body.css';

export default function Body() {
  return (
    <div id="body">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegistrationForm />} />
        <Route path='/add-car' element={<AddCar />} />
      </Routes>
    </div>
  )
}