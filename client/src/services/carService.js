import request from "../libraries/request";
const baseUrl = 'http://localhost:3030/data/cars';

export const getAllCars = async () => {
    return await request.get(baseUrl);
}

export const addCar = async (carData) => {
    return await request.post(baseUrl, carData);
}