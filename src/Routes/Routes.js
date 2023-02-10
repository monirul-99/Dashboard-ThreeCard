import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Dashboard from "../Pages/DashBoard/Dashboard";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
