import {createBrowserRouter } from "react-router-dom";
import App from "../App";


import Orders from "../pages/books/Orders";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import CheckoutPage from "../pages/books/CheckoutPage";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/users/DashboardLayout";
import Dashboard from "../pages/dashboard/users/Dashboard";
import ManageBooks from "../pages/dashboard/manageBook/ManageBooks";
import UpdateBook from "../pages/dashboard/editBook/UpdateBook";
import AddBook from "../pages/dashboard/addBook/AddBook";




const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/orders",
            element: <PrivateRoute><Orders/></PrivateRoute>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/register",
            element: <Register/>
        },
        {
            path: "/cart",
            element: <CartPage/>
        },
        {
            path: "/checkout",
            element: <PrivateRoute><CheckoutPage/></PrivateRoute>
        },
        {
            path: "/books/:id",
            element: <SingleBook/>
        },
      ]
    },
    {
        path: "/admin",
        element: <AdminLogin/>
      },
      {
        path: "/dashboard",
        element: <AdminRoute>
          <DashboardLayout/>
        </AdminRoute>,
        children:[
          {
            path: "",
            element: <AdminRoute><Dashboard/></AdminRoute>
          },
          {
            path: "add-new-book",
            element: <AdminRoute>
            <AddBook/>
            </AdminRoute>
          },
          {
            path: "edit-book/:id",
            element: <AdminRoute>
             <UpdateBook/>
            </AdminRoute>
          },
          {
            path: "manage-books",
            element: <AdminRoute>
              <ManageBooks/>
            </AdminRoute>
          }
        ]
      }
  ]);

  export default router; 