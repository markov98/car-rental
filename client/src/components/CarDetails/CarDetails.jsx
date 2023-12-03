import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOneCar } from "../../services/carService";
import paths from "../../paths";
import './CarDetails.css';

export default function CarDetails() {
    const [car, setCar] = useState({});
    const { carId } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        getOneCar(carId)
            .then(result => setCar(result))
            .catch(err => {
                alert('Car not found');
                navigate(paths.carList);
            });
    }, [])

    return (
        <div className="car-details">
            <img src={car.imgUrl} alt={`${car.make} ${car.model}`} className="car-image" />
            <div className="car-info">
                <h2>{car.make} {car.model}</h2>
                <p>Year: {car.year}</p>
                <p>Price: ${car.price}/Hour</p>
            </div>
            <div className="car-links">
                <Link to={`#`} className="rent-link">Rent</Link>
                <Link to={`#`} className="edit-link">Edit</Link>
                <Link to={`#`} className="delete-link">Delete</Link>
            </div>
        </div>
    );
}