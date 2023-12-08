import * as request from "../libraries/request";
const baseUrl = 'http://localhost:3030/data/cars';

export const getAllCars = async () => await request.get(baseUrl);

export const searchCars = async (searchTerm) => {
    searchTerm = searchTerm.toLowerCase();
    const result = await request.get(`${baseUrl}`);
    return result.filter(car => car.make.toLowerCase().includes(searchTerm) || car.model.toLowerCase().includes(searchTerm));
}

export const getLatestCars = async () => {
    const result = await request.get(`${baseUrl}`);
    const sorted = result.sort((a, b) => b._createdOn - a._createdOn);
    return sorted.slice(0, 3);
}

export const getOneCar = async (carId) => await request.get(`${baseUrl}/${carId}`);

export const addCar = async (carData) => await request.post(baseUrl, carData);

export const deleteCar = async (carId) => await request.remove(`${baseUrl}/${carId}`);

export const updateCar = async (carId, carData) => await request.put(`${baseUrl}/${carId}`, carData);