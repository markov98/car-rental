import * as request from "../libraries/request";
const baseUrl = 'http://localhost:3030/data/cars';

export const getAllCars = async () => await request.get(baseUrl);

export const getOneCar = async (carId) => await request.get(`${baseUrl}/${carId}`);

export const addCar = async (carData) => await request.post(baseUrl, carData);