import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import PublicLayout from "../Layout/PublicLayout/PublicLayout";
import { DashboardRoutes } from "./DashboardRouts/DashboardRouts";
import { PublicRoutes } from "./PublicRoutes/PublicRoutes";
import NotFound from "../Pages/Common/NotFound/Index";
import ErrorPage from "../Pages/Common/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: PublicRoutes,
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: DashboardRoutes,
  },
  { path: "*", element: <NotFound /> },
]);
