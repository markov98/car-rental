import { getAllCars } from "../../services/carService";
import { useEffect, useState } from 'react';

export default function CarList() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        getAllCars()
            .then(result => setCars(Object.values(result)))
            .catch(err => alert(err));
    }, []);

    return (
        <ul>
            {cars.map(car => <li key={car._id}>{car.make}</li>)}
        </ul>
    )
}