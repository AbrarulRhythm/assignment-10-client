import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import AddFood from "../pages/AddFood/AddFood";
import AvailableFoods from "../pages/AvailableFoods/AvailableFoods";
import { axiosInstance } from '../hooks/useAxios';
import PrivateRoute from "../context/PrivateRoute";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import ManageMyFoods from "../pages/ManageMyFoods/ManageMyFoods";
import UpdateFood from "../pages/UpdateFood/UpdateFood";
import MyFoodRequests from "../pages/MyFoodRequests/MyFoodRequests";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'sign-in',
                Component: SignIn
            },
            {
                path: 'add-food',
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: 'foods',
                loader: async () => {
                    const data = await axiosInstance.get('/foods');
                    return data.data;
                },
                Component: AvailableFoods
            },
            {
                path: 'foods/:id',
                loader: async ({ params }) => {
                    const data = await axiosInstance.get(`/foods/${params.id}`);
                    return data.data;
                },
                element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>
            },
            {
                path: 'manage-my-foods',
                element: <PrivateRoute><ManageMyFoods></ManageMyFoods></PrivateRoute>
            },
            {
                path: 'update-food/:id',
                loader: async ({ params }) => {
                    const data = await axiosInstance.get(`/foods/${params.id}`);
                    return data.data;
                },
                element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>
            },
            {
                path: 'my-food-request',
                element: <PrivateRoute><MyFoodRequests></MyFoodRequests></PrivateRoute>
            }
        ]
    }
]);