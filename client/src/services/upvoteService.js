import * as request from '../libraries/request';

const baseUrl = 'http://localhost:3030/data/upvotes';

export const getUpvotes = async (carId) => {
    const query = new URLSearchParams({ where: `_carId="${carId}"` });
    return await request.get(`${baseUrl}?${query}`);
}

export const upvote = async (carId) => await request.post(baseUrl, {_carId: carId});