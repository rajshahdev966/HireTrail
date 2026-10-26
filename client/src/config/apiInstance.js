import axios from "axios";


const hireTrailApi = () => {
    const api = axios.create({
        baseURL: "http://localhost:5175/api",
        withCredentials: true
    });

    return api;
}


export default hireTrailApi;