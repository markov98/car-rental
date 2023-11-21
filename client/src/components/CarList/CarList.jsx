import { getAllCars } from "../../services/carService";
import { useEffect, useState } from 'react';

export default function CarList() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        getAllCars()
            .then(result => setCars(result))
            .then(console.log(cars));
    }, []);

    return (
        <ul>
            TODO: Make sure the car list works
        </ul>
    )
}