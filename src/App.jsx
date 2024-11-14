/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/app-layout";
import LoginLayout from "./layouts/login-layout";
import Courses from "./pages/courses";
import { ThemeProvider } from "./components/theme-provider";
import LoginPage from "./pages/login";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/courses",
        element: <Courses />,
      },
    ],
  },
  {
    element: <LoginLayout />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
    ],
  }
]);

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
