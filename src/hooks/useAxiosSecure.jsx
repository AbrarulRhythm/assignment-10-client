import axios from "axios"
import useAuth from "./useAuth"
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
})

const useAxiosSecure = () => {
    const { user, signOutUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // request interceptor
        const requestInterceptor = axiosInstance.interceptors.request.use((config) => {
            if (user?.accessToken) {
                config.headers.authorization = `Bearer ${user.accessToken}`;
            }
            return config;
        });

        // response interceptor
        const responseInterceptor = axiosInstance.interceptors.response.use((res) => {
            return res;
        }, (err) => {
            const status = err.status;
            if (status === 401 || status === 403) {
                signOutUser()
                    .then(() => {
                        navigate('/sign-in');
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Access denied. Please sign in again.",
                        });
                    })
                    .catch();
            }
        })

        return () => {
            axiosInstance.interceptors.request.eject(requestInterceptor);
            axiosInstance.interceptors.response.eject(responseInterceptor);
        }
    }, [user, signOutUser, navigate]);

    return axiosInstance;
}

export default useAxiosSecure;