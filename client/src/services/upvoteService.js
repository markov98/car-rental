import * as request from '../libraries/request';

const baseUrl = 'http://localhost:3030/upvotes';

export const getUpvotes = async (carId) => {
    const query = new URLSearchParams({whare: `carId="${carId}"`});
    return await request.get(`${baseUrl}?${query}`);
}