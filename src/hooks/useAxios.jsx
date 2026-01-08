import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: 'https://plate-share-api-server-sage.vercel.app/'
    // baseURL: 'http://localhost:3000/'
});

const useAxios = () => {
    return axiosInstance;
}

export default useAxios;