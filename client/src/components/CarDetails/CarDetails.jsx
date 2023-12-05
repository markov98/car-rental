import { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteCar, getOneCar } from "../../services/carService";
import { AuthContext } from "../../contexts/AuthContext";
import paths from "../../paths";
import './CarDetails.css';

export default function CarDetails() {
    const [car, setCar] = useState({});
    const { carId } = useParams();
    const navigate = useNavigate()
    const { isAuthenticated, userId } = useContext(AuthContext);

    useEffect(() => {
        getOneCar(carId)
            .then(result => setCar(result))
            .catch(err => {
                alert('Car not found');
                navigate(paths.carList);
            });
    }, [])

    async function deleteHandler() {
        try {
            await deleteCar(carId);
            navigate(paths.carList);
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className="car-details">
            <img src={car.imgUrl} alt={`${car.make} ${car.model}`} className="car-image" />
            <div className="car-info">
                <h2>{`${car.make} ${car.model}`}</h2>
                <p>Year: {car.year}</p>
                <p>Price: ${car.price}/Hour</p>
            </div>
            <div className="car-links">
                {isAuthenticated && (
                    <>
                        {userId === car._ownerId && (
                            <>
                                <Link className="delete-link" onClick={deleteHandler}>Delete</Link>
                                <Link to={`/cars/${carId}/update`} className="edit-link">Edit</Link>
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}