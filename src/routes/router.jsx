import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddFood from "../pages/AddFood/AddFood";
import AvailableFoods from "../pages/AvailableFoods/AvailableFoods";
import { axiosInstance } from '../hooks/useAxios';
import PrivateRoute from "../context/PrivateRoute";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import ManageMyFoods from "../pages/ManageMyFoods/ManageMyFoods";
import UpdateFood from "../pages/UpdateFood/UpdateFood";
import MyFoodRequests from "../pages/MyFoodRequests/MyFoodRequests";
import AboutUs from "../pages/AboutUs/AboutUs";
import News from "../pages/News/News";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Auth/Register/Register";
import SignIn from "../pages/Auth/SignIn/SignIn";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardOverview from "../pages/Dashboard/DashboardOverview/DashboardOverview";

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
                path: 'about-us',
                Component: AboutUs
            },
            {
                path: 'news',
                Component: News
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
                Component: FoodDetails
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
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: 'overview',
                Component: DashboardOverview
            }
        ]
    }
]);