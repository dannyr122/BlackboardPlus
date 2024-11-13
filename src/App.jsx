/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/app-layout";
import Courses from "./pages/courses";
import LandingPage from "./pages/landing";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
