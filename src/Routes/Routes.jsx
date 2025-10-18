import { createBrowserRouter } from "react-router";
import Homelayout from "../Homelayout/Homelayout";

  const router = createBrowserRouter([
    {
        path: '/',
        element: <Homelayout></Homelayout>
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