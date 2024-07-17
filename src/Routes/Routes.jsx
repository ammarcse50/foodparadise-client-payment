import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main'
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Orders from "../pages/Orders/Orders";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";

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
          path:'login',
          element : <Login></Login>
        },
        {
          path:'signup',
          element : <SignUp></SignUp>
        },
        {
          path: '/order/:category',
          element: <Orders></Orders>
        },
        {
          path: 'dashboard',
          element:<PrivateRoute> <Dashboard></Dashboard> </PrivateRoute> ,
          children:[
            
            {

              path: 'cart',
              element: <Cart></Cart>
            
          },
            {

              path: 'addItems',
              element: <AddItem></AddItem>
            
          },
            {

              path: 'manageItems',
              element: <AddItem></AddItem>
            
          },

          // admin routes

          {
            path: 'allUsers',
            element: <AllUsers></AllUsers>
          }
        
        ]
      }
      ]
    },
  ]);

  export default router