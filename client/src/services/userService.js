const baseUrl = 'http://localhost:3030/jsonstore/users';

export const register = async (userData) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(userData)
    });

    return await response.json();
}