import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main'
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Orders from "../pages/Orders/Orders";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element: <Home></Home>,
        },
        {
          path:'menu',
          element : <Menu></Menu>
        },
        {
          path: '/orders',
          element: <Orders></Orders>
        }
      ]
    },
  ]);

  export default router