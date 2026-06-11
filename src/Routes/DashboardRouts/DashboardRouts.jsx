import Overview from "../../Pages/Dashboard/DashboardHome/DashboardHome";
import ManageBlog from "../../Pages/Dashboard/ManageBlogs/ManageBlogs";
import CreateBlog from "../../Pages/Dashboard/CreateBlog/CreateBlog";
import Profile from "../../Pages/Dashboard/Profile/MainComp/Profile";
import DashboardNotFound from "../../Pages/Common/DashboardNotFound/DashboardNotFound";
export const DashboardRoutes = [
  {
    index: true,
    element: <Overview />,
  },
  {
    path: "create",
    element: <CreateBlog />,
  },
  {},
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "manage",
    element: <ManageBlog />,
  },
  {
    path: "*",
    element: <DashboardNotFound />,
  },
];
