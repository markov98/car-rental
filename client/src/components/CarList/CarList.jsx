import { getAllCars } from "../../services/carService";
import { useEffect, useState } from 'react';
import CarListItem from "../CarListitem/CarListItem";
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
            {cars.length !== 0 ? cars.map(car => <CarListItem key={car._id} car={car} />) :
            <h2>No cars</h2>}
        </div>
    )
}