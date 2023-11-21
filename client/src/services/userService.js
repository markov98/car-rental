import request from "../libraries/request";
const baseUrl = 'http://localhost:3030/jsonstore/users';

export const register = async (userData) => {
    return await request.post(baseUrl, userData);
}