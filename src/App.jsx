/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/app-layout";
import LoginLayout from "./layouts/login-layout";
import Courses from "./pages/courses";
import LoginPage from "./pages/login";
import Grades from "./pages/grades";
import CalendarPage from "./pages/calendar";
import ProtectedRoute from "./components/protected";
import NotificationSettings from "./pages/notification-settings";
import VerifyBlackboard from "./pages/verify-blackboard";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/courses",
        element: (
          <ProtectedRoute>
            <Courses />
          </ProtectedRoute>
        ),
      },
      {
        path: "/grades",
        element: (
          <ProtectedRoute>
            <Grades />
          </ProtectedRoute>
        ),
      },
      {
        path: "/calendar",
        element: (
          <ProtectedRoute>
            <CalendarPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/notifications",
        element: (
          <ProtectedRoute>
            <NotificationSettings />
          </ProtectedRoute>
        ),
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
      {
        path: "/blackboard-verification",
        element: (
          <ProtectedRoute>
            <VerifyBlackboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
