import request from 'superagent';

const URL = 'https://tranquil-mountain-58489.herokuapp.com';

export async function getCategoriesById(categoryId) {
    const categories = await request.get(`${URL}/categories`);
    
    const categoryName = categories.body.find(category => category.id === categoryId).name;

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
