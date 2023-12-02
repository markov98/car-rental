import { getAllCars } from "../../services/carService";
import { useEffect, useState } from 'react';
import CarListItem from "./CarListItem";

export default function CarList() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        getAllCars()
            .then(result => setCars(result))
            .catch(err => alert(err));
    }, []);

    return (
        <ul>
            {cars.map(car => <CarListItem key={car._id} car={car} />)}
        </ul>
    )
}