import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import SingleRecipeLayout from "../layouts/SingleRecipeLayout";
import Recipes from "../pages/recipes/Recipes";
import Blog from "../pages/blog/Blog";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorDefault from "../pages/error/ErrorDefault";
import Chefs from "../pages/chefs/Chefs";
import ChefsSingle from "../pages/chefs/ChefsSingle";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader:(()=>fetch('https://recipe-food-jabedweb.vercel.app/recipes/'))
        },
        {
          path: "/recipes",
          element: <Recipes></Recipes>,
          loader:(()=>fetch('https://recipe-food-jabedweb.vercel.app/recipes/'))
        },
        {
          path: "/recipes/:id",
          element: <PrivateRoute><SingleRecipeLayout></SingleRecipeLayout></PrivateRoute>,
          loader:({params})=>fetch(`https://recipe-food-jabedweb.vercel.app/recipes/${params.id}`)
        },
        {
          path: "/chefs",
          element: <Chefs></Chefs>,
          loader:(()=>fetch('https://recipe-food-jabedweb.vercel.app/recipes/'))
        },
        {
          path: "/chefs/:id",
          element:<PrivateRoute><ChefsSingle></ChefsSingle></PrivateRoute>,
          loader:({params})=>fetch(`https://recipe-food-jabedweb.vercel.app/chefs/${params.id}`)
        },
        {
          path: "/blog",
          element : <Blog></Blog>
        },
        {
          path: "/login",
          element : <Login></Login>
        },
        {
          path: "/register",
          element : <Register></Register>
        },
        {
          path: "*",
          element : <ErrorDefault></ErrorDefault>
        }
      ]
    },
  ]);

  export default router;