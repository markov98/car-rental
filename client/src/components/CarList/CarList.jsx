import { getAllCars, searchCars } from "../../services/carService";
import { useEffect, useState } from 'react';
import CarListItem from "../CarListitem/CarListItem";
import './CarList.css';

export default function CarList() {
    const [cars, setCars] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    function onChange(e) {
        setSearchTerm(e.target.value);
    }

    async function onClick() {
        searchCars(searchTerm)
            .then(result => setCars(result))
            .catch(err => alert(err));
    }

    useEffect(() => {
        getAllCars()
            .then(result => setCars(result))
            .catch(err => alert(err));
    }, []);

    return (
        <>
            <div className="search-bar">
                <input name="search-tearm" value={searchTerm} onChange={onChange} />
                <button onClick={onClick}>Search</button>
            </div>
            <div className="car-list">
                {cars.length !== 0 ? cars.map(car => <CarListItem key={car._id} car={car} />) :
                    <h2>No cars</h2>}
            </div>
        </>
    )
}