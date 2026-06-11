import Home from "../../Pages/Public/Home/MainComp/Home";
import Contact from "../../Pages/Public/Contact/MainComp/Contact";
import Blog from "../../pages/Public/Blog/Blog";
import About from "../../Pages/Public/About/MainComp/About";
import Signup from "../../Pages/Common/SignUp/Index";
import Login from "../../Pages/Common/Login/Index";

export const PublicRoutes = [
  { index: true, element: <Home /> },
  { path: "contact", element: <Contact /> },
  { path: "about", element: <About /> },
  { path: "blog", element: <Blog /> },
  { path: "signup", element: <Signup /> },
  { path: "login", element: <Login /> },
];
