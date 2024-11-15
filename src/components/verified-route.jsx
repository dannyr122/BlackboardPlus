import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function VerifiedRoute({ children }) {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn) {
      navigate("/?sign-in=true");
    }
  }, [isSignedIn, navigate]);

  return isSignedIn ? children : null;
}

export default VerifiedRoute;
