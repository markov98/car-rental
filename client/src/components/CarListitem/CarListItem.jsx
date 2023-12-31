import { Link } from 'react-router-dom';
import './CarListItem.css';

export default function CarListItem(props) {
    const { _id, imgUrl, make, model, price } = props.car;

    return (
        <div className="car-list-item">
            <img src={imgUrl} alt={`${make} car`} className="car-image-mini" />
            <div className="car-details-mini">
                <h3 className="car-make">{make} {model}</h3>
                <p className="car-price">{`$${price}/Hour`}</p>
                <Link className='details-link' to={`/cars/${_id}/details`}>Details</Link>
            </div>
        </div>
    );
}
