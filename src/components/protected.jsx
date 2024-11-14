import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded, user } = useUser();
  const { pathname } = useLocation();

  if (isLoaded && !isSignedIn && isSignedIn !== undefined) {
    return <Navigate to="/?sign-in=true" />;
  }

  if (
    user !== undefined &&
    !user?.unsafeMetadata?.role &&
    pathname !== "/"
  ) {
    return <Navigate to="/" />;
  }

  if (isLoaded && isSignedIn && pathname === "/") {
    return <Navigate to="/courses" />; // Redirect to the dashboard or another page
  }

  return children;

  
};

export default ProtectedRoute;
