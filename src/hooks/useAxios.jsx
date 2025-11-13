import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: 'https://plate-share-api-server-sage.vercel.app/'
});

const useAxios = () => {
    return axiosInstance;
}

export default useAxios;