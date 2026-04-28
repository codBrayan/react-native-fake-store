import api from "./api.js";

export async function authUser(credentials) {
    try {
        const response = await api.post(`/auth/login`,credentials);
        return response.data;   
    } catch (error) {
        console.log('Ocorreu um erro: ', error.message)
    }
}
