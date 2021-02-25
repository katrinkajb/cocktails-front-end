import request from 'superagent';

const URL = 'https://tranquil-mountain-58489.herokuapp.com';

export async function getCocktails() {
    const response = await request.get(`${URL}/cocktails`);

    return response.body
}