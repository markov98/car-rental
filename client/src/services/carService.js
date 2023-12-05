import * as request from "../libraries/request";
const baseUrl = 'http://localhost:3030/data/cars';

export const getAllCars = async () => await request.get(baseUrl);

export const getOneCar = async (carId) => await request.get(`${baseUrl}/${carId}`);

export const addCar = async (carData) => {
    carData._renterId = '';
    await request.post(baseUrl, carData);
}

export const deleteCar = async (carId) => await request.remove(`${baseUrl}/${carId}`);

export const rentCar = async (carId, userId) => await request.patch(`${baseUrl}/${carId}`, {_renterId: userId});

export const returnCar = async (carId) => await request.patch(`${baseUrl}/${carId}`, {_renterId: ''});