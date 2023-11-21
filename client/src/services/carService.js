import request from "../libreries/request";
const baseUrl = 'http://localhost:3030/jsonstore/cars';

export const getAllCars = async () => {
    return await request.get(baseUrl);
}

export const addCar = async (carData) => {
    return await request.post(baseUrl, carData);
}