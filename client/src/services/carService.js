const baseUrl = 'http://localhost:3030/jsonstore/cars';

export const add = async (carData) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(carData)
    });

    return await response.json();
}