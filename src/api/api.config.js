import axios from "axios";
const BASE_URL = 'http://localhost:8000/api/v1/'
console.log(import.meta.env.VITE_BASE_URL);
export default axios.create({
    baseURL : BASE_URL,
    withCredentials : true,
})