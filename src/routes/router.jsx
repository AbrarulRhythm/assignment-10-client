import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AvailableFoods from "../pages/AvailableFoods/AvailableFoods";
import { axiosInstance } from '../hooks/useAxios';
import PrivateRoute from "../context/PrivateRoute";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import MyFoodRequests from "../pages/MyFoodRequests/MyFoodRequests";
import AboutUs from "../pages/AboutUs/AboutUs";
import News from "../pages/News/News";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Auth/Register/Register";
import SignIn from "../pages/Auth/SignIn/SignIn";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardOverview from "../pages/Dashboard/DashboardOverview/DashboardOverview";
import AddFood from "../pages/Dashboard/AddFood/AddFood";
import ManageMyFoods from "../pages/Dashboard/ManageMyFoods/ManageMyFoods";
import UpdateFood from "../pages/Dashboard/UpdateFood/UpdateFood";

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
            },
            {
                path: 'add-food',
                Component: AddFood
            },
            {
                path: 'manage-my-foods',
                Component: ManageMyFoods
            },
            {
                path: 'update-food/:id',
                loader: async ({ params }) => {
                    const data = await axiosInstance.get(`/foods/${params.id}`);
                    return data.data;
                },
                Component: UpdateFood
            },
        ]
    }
]);