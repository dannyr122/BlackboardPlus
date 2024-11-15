import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn) {
      navigate("/?sign-in=true");
    }
  }, [isSignedIn, navigate]);

  return isSignedIn ? children : null;
}

export default ProtectedRoute;
