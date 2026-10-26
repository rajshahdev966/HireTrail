import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "../App";
import AuthLayout from "../layout/AuthLayout";
import LoginForm from "../modules/auth/ui/components/LoginForm";
import RegisterForm from "../modules/auth/ui/components/RegisterForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [

        ]
    },
    {
        path: "/auth",
        element: <AuthLayout/>,
        children: [
            {
                path: "",
                element: <RegisterForm/>
            },
            {
                path: "login",
                element: <LoginForm/>
            }
        ]

    }
])


const AppRoutes = ()=> {
    
    return <RouterProvider router={router}/>
}


export default AppRoutes;
