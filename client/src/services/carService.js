import * as request from "../libraries/request";
const baseUrl = 'http://localhost:3030/data/cars';

export const getAllCars = async () => await request.get(baseUrl);


export const getLatestCars = async () => {
    const query = new URLSearchParams({
        sortBy: `_createdOn desc`,
        offset: 0,
        pageSize: 3,
    });

    return await request.get(`${baseUrl}?${query}`);
}

export const getOneCar = async (carId) => await request.get(`${baseUrl}/${carId}`);

export const addCar = async (carData) => {
    carData._renterId = '';
    await request.post(baseUrl, carData);
}

export const deleteCar = async (carId) => await request.remove(`${baseUrl}/${carId}`);

export const updateCar = async (carId, carData) => await request.put(`${baseUrl}/${carId}`, carData);