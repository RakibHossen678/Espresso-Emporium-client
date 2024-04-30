import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AddCoffee from "./Components/AddCoffee";
import UpdateCoffee from "./Components/UpdateCoffee";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import AuthProvider from "./Provider/AuthProvider";
import Users from "./Components/Users";
import MainLayout from "./Layout/MainLayout";
import PrivateRoute from "./Routes/PrivateRoute";
import CoffeeDetails from "./Components/CoffeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () =>
          fetch("https://espresso-emporium-server-weld.vercel.app/coffee"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: (
          <PrivateRoute>
            <UpdateCoffee></UpdateCoffee>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://espresso-emporium-server-weld.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "/coffeeDetails/:id",
        element: (
          <PrivateRoute>
            <CoffeeDetails></CoffeeDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://espresso-emporium-server-weld.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () =>
          fetch("https://espresso-emporium-server-weld.vercel.app/user"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
