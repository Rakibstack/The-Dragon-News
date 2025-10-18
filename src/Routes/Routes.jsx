import { createBrowserRouter } from "react-router";
import Homelayout from "../Layout/Homelayout";
import Home from "../Pages/Home";
import Categorynews from "../Pages/Categorynews";

  const router = createBrowserRouter([
    {
        path: '/',
        element: <Homelayout></Homelayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element:<Categorynews></Categorynews>,
                loader: () => fetch('/news.json')
            
            }
        ]
        
    },
    {
        path: '/about',
        element: <h2>About section</h2>,
    },
    {
        path: '/carear',
        element: <h2>Carer section</h2>
    },
    {
        path: '/*',
        element: <h2>error 404</h2>
    }
])
 export default router;