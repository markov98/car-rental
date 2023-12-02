import { Link } from 'react';

export default function CarListItem(props) {
    const { _id, imageUrl, make, price } = props.car;

    return (
        <div className="car-list-item">
            <img src={imageUrl} alt={`${make} car`} className="car-image" />
            <div className="car-details">
                <h3 className="car-make">{make}</h3>
                <p className="car-price">{`$${price}/Hour`}</p>
                <Link to={`/cars/${_id}/details`}>Details</Link>
            </div>
        </div>
    );
}
