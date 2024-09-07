import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main.jsx";
import Home from "../layouts/Home.jsx";
import Category from "../layouts/Shared/Category.jsx";
import NewsLayout from "../layouts/NewsLayout/NewsLayout.jsx";
import News from "../layouts/News.jsx";
import LoginRegister from "../layouts/login-register/LoginRegister.jsx";
import Login from "../layouts/login-register/Login.jsx";
import Resgister from "../layouts/login-register/Resgister.jsx";


const router = createBrowserRouter([
  {
    path: "/category",
    element: <Main />,
    children: [
      {
        path: ":id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-saiduli066.vercel.app/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: <News></News>,
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-saiduli066.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/",
    element: <LoginRegister />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Resgister />,
      },
    ],
  },
]);

export default router;
