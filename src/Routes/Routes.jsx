import { createBrowserRouter } from "react-router";
import Homelayout from "../Layout/Homelayout";
import Home from "../Pages/Home";
import Categorynews from "../Pages/Categorynews";
import Authenticationlayout from "../Layout/Authenticationlayout";
import Login from "../Component/Authlayout/Login";
import Register from "../Component/Authlayout/Register";
import Newsdetails from "../Component/Newsdetails";
import Privateroute from "../Authprovider/Privateroute";
import Loader from "../Pages/Loader";

  const router = createBrowserRouter([
    {
        path: '/',
        element:<Privateroute>
             <Homelayout></Homelayout>,
        </Privateroute>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element:<Privateroute>
                    <Categorynews></Categorynews>
                </Privateroute>,
                loader: () => fetch('/news.json'),
                hydrateFallbackElement: <Loader></Loader>      
            }
        ]        
    },
    {
        path: '/auth',
        element: <Authenticationlayout></Authenticationlayout>,
        children: [
            {
                path:'/auth/login',
                element: <Login></Login>
            },
            {
                path:'/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/newsdetails/:id',
        element: <Newsdetails></Newsdetails>,
        loader: () => fetch('/news.json'),
         hydrateFallbackElement: <Loader></Loader>
        
    },
   
    {
        path: '/*',
        element: <h2>error 404</h2>
    }
])
 export default router;