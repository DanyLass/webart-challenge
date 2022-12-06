import axios from "axios";

const api = axios.create({
    baseURL: "https://tools.wellcommerce.com.br/teste/",
});

export default api;
