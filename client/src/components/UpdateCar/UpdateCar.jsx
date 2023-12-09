import useForm from "../../hooks/useForm";
import { useParams, useNavigate } from "react-router-dom";
import { getOneCar, updateCar } from "../../services/carService";
import { useEffect } from "react";

export default function UpdateCar() {
    const { carId } = useParams();
    const navigate = useNavigate();
    const { values, onChange, onSubmit, setValues } = useForm(updateSubmitHandler, {
        make: '',
        model: '',
        year: '',
        imgUrl: '',
        price: ''
    });

    async function updateSubmitHandler() {
        try {
            await updateCar(carId, values);
            navigate(`/cars/${carId}/details`);
        } catch (err) {
            alert(err)
        }
    }
    
    useEffect(() => {
        getOneCar(carId)
            .then((carData) => {
                setValues({
                    make: carData.make,
                    model: carData.model,
                    year: carData.year,
                    imgUrl: carData.imgUrl,
                    price: carData.price,
                });
            })
            .catch((error) => {
                alert(error)
            });
    }, [carId]);

    return (
        <>
            <h2>Edit Car</h2>
            <form onSubmit={onSubmit}>
                <label>
                    Make:
                    <input
                        type="text"
                        name="make"
                        value={values.make}
                        onChange={onChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Model:
                    <input
                        type="text"
                        name="model"
                        value={values.model}
                        onChange={onChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Year:
                    <input
                        type="number"
                        name="year"
                        value={values.year}
                        onChange={onChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Image URL:
                    <input
                        type="text"
                        name="imgUrl"
                        value={values.imgUrl}
                        onChange={onChange}
                        required
                    />
                </label>
                <br />
                <label>
                    $/Hour:
                    <input
                        type="number"
                        name="price"
                        value={values.price}
                        onChange={onChange}
                        required
                    />
                </label>
                <br />
                <button type="submit">Edit Car</button>
            </form>
        </>
    )
}