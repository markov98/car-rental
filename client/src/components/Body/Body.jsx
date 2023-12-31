import { Routes, Route } from 'react-router-dom';

import paths from '../../paths';

import Home from "../Home/Home";
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import AddCar from '../AddCar/AddCar';
import CarList from '../CarList/CarList';
import Logout from '../Logout/Logout';
import ErrorBoundary from '../ErrorBoundary';
import CarDetails from '../CarDetails/CarDetails';
import UpdateCar from '../UpdateCar/UpdateCar';
import AuthGuard from '../AuthGuard/AuthGuard';

import './Body.css';

export default function Body() {
  return (
    <div id="body">
      <ErrorBoundary>
        <Routes>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.login} element={<LoginForm />} />
          <Route path={paths.register} element={<RegistrationForm />} />
          <Route path={paths.carList} element={<CarList />} />
          <Route path={paths.carDetails} element={<CarDetails />} />
          <Route element={<AuthGuard />}>
            <Route path={paths.logout} element={<Logout />} />
            <Route path={paths.addCar} element={<AddCar />} />
            <Route path={paths.updateCar} element={<UpdateCar />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </div>
  )
}