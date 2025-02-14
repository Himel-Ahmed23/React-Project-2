import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './LayOut/Main/Main';
import Home from './Pages/Home/Home';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import Error from './Pages/Error/Error';
import AuthProviders from './Providers/AuthProviders';
import Products from './Pages/Products/Products';
import Shop from './Pages/Shop/Shop';
import PrivateRoutes from './Routes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children :[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/shop",
        element: <PrivateRoutes><Shop></Shop></PrivateRoutes>,
      },
      {
        path: "/products",
        element: <PrivateRoutes><Products></Products></PrivateRoutes>,
      },
    ]
  },
  {
    path: "*",
    element: <Error></Error>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProviders>
  <RouterProvider router={router} />
  </AuthProviders>
  </StrictMode>,
)
