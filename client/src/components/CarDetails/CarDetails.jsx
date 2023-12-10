import { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteCar, getOneCar } from "../../services/carService";
import { AuthContext } from "../../contexts/AuthContext";
import paths from "../../paths";
import './CarDetails.css';
import { getUpvotes, upvote } from "../../services/upvoteService";

export default function CarDetails() {
    const [car, setCar] = useState({});
    const [upvotes, setUpvotes] = useState([]);
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
    }, []);

    useEffect(() => {
        getUpvotes(carId)
            .then(result => setUpvotes(result))
            .catch(err => alert(err));
    }, []);

    async function deleteHandler() {
        try {
            await deleteCar(carId);
            navigate(paths.carList);
        } catch (err) {
            alert(err);
        }
    }

    async function upvoteHandler() {
        try {
            await upvote(carId);
            setUpvotes(await getUpvotes(carId));
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
                <p>Upvotes: {upvotes.length}</p>
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
                        {userId !== car._ownerId &&
                            upvotes.every(up => up._ownerId !== userId) &&
                            <Link className="upvote-link" onClick={upvoteHandler}>Upvote</Link>}
                    </>
                )}
            </div>
        </div>
    );
}