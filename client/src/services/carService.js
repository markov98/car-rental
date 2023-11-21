import request from "../libreries/request";
const baseUrl = 'http://localhost:3030/jsonstore/cars';

export const add = async (carData) => {
    return await request.post(baseUrl, carData);
}