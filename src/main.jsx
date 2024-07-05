import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout, { RootIndex } from "./pages";
import About from "./pages/about";
import "./index.css";
import UserPage from "./pages/users";
import CreateUserPage from "./pages/create-user";
import ErrorPage from "./pages/error-page";
import ReactionPage from "./pages/compound-reaction"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <RootIndex /> },
      {
        path: "/ChemicalScience/compound-reaction",
        element:<ReactionPage />// <About />,
      },
      {
        path: "/ChemicalScience/molecule-composition",
        element: <About />,
      },
      {
        path: "/ChemicalScience/molecule-sorting-challenge",
        element: <CreateUserPage />,
      },
      {
        path: "/ChemicalScience",
        element:  <RootIndex /> ,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
