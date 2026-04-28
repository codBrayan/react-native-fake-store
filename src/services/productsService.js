import api from "./api.js";

export async function getAllProducts() {
    try {
        const response = await api.get('/products');
        return response.data;   
    } catch (error) {
        console.log('Ocorreu um erro: ', error.message)
    }
}

export async function getProductById(productId){
    try {
        const response = await api.get(`/products/${productId}`);
        return response.data;
    } catch (error) {
        console.log('Ocorreu um erro: ', error);
    }
}

export async function getProductsByCategory(category){
    try {
        const response = await api.get(`/products/category/${category}`);
        return response.data; 
    } catch (error) {
        console.log('Ocorreu um erro: ', error);
    }
}
