import { getAllCars } from "../../services/carService";
import { useEffect, useState } from 'react';
import CarListItem from "./CarListItem";
import './CarList.css';

export default function CarList() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        getAllCars()
            .then(result => setCars(result))
            .catch(err => alert(err));
    }, []);

    return (
        <div className="car-list">
            {cars.map(car => <CarListItem key={car._id} car={car} />)}
        </div>
    )
}