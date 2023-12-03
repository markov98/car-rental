import { Link } from 'react-router-dom';

export default function CarListItem(props) {
    const { _id, imgUrl, make, price } = props.car;

    return (
        <div className="car-list-item">
            <img src={imgUrl} alt={`${make} car`} className="car-image" />
            <div className="car-details">
                <h3 className="car-make">{make}</h3>
                <p className="car-price">{`$${price}/Hour`}</p>
                <Link className='details-link' to={`/cars/${_id}/details`}>Details</Link>
            </div>
        </div>
    );
}
