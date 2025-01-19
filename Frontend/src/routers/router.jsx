import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";

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
          <div>
            <div>order</div>
          </div>
        ),
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/login",
        element: <div>Login</div>,
      },
      {
        path: "/register",
        element: <div>Register</div>,
      },
      {
        path: "/cart",
        element: <div>Cart</div>,
      },
    ],
  },
]);

export default router;
