import request from 'superagent';

const URL = 'https://tranquil-mountain-58489.herokuapp.com';

export async function getCategoriesById(category_id) {
    const categories = await request.get(`${URL}/categories`);
    
    const categoryName = categories.body.find(category => category.id === category_id);
    return categoryName;
}

export async function getCocktails() {
    const response = await request.get(`${URL}/cocktails`);

    return response.body
}

export async function getCocktailById(id) {
    const response = await request.get(`${URL}/cocktails/${id}`);

    return response.body;
}

export async function createCocktail(newCocktail) {
    const response = await request.post(`${URL}/cocktails`)
    .send(newCocktail);

    return response.body;
}

export async function updateCocktail(id) {
    const response = await request.put(`${URL}/cocktails/${id}`);

    return response.body;
}

export async function deleteCocktail(id) {
    const response = await request.delete(`${URL}/cocktails/${id}`);

    return response.body;
}