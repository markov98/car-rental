import { useEffect, useState } from 'react';
import { getLatestCars } from '../../services/carService';
import CarListItem from '../CarListitem/CarListItem';
import './Home.css';

export default function Home() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        getLatestCars()
            .then(result => setCars(result))
            .catch(err => alert(err));
    })

    return (
        <>
            <div className="welcome"> <h2>Welcome!</h2> <br />
                <p>This is <strong>Markov Rentals</strong>, a Car Rental website I have created using React.</p>
            </div>
            <p className="brd"></p>
            <h3 className='latest'>Latest cars</h3>
            <div className='car-list'>
                {cars.length !== 0 ? cars.map(car => <CarListItem key={car._id} car={car} />) :
                    <h2>No cars</h2>}
            </div>
        </>
    )
}