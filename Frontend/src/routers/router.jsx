import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/Books/CartPage";
import CheckoutPage from "../pages/Books/Checkout";
import SingleBook from "../pages/Books/SingleBook";
import PrivateRoutes from "./PrivateRoutes";
import OrderPage from "../pages/Books/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/Dashboard/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoutes>
            <OrderPage />
          </PrivateRoutes>
        ),
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoutes>
            <CheckoutPage />
          </PrivateRoutes>
        ),
      },
      {
        path: "?books/:id",
        element: <SingleBook />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },

  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: "",
        element: (
          <AdminRoute>
            {" "}
            <Dashboard />{" "}
          </AdminRoute>
        ),
      },
      {
        path: "add-new-book",
        element: <AdminRoute>Add new Book</AdminRoute>,
      },
      {
        path: "edit-book/:id",
        element: <AdminRoute>Edit new Book</AdminRoute>,
      },
      {
        path: "manage-books",
        element: <AdminRoute>Manage Books</AdminRoute>,
      },
    ],
  },
]);

export default router;
