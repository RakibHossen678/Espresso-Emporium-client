import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Lottie from "react-lottie";
import loadingImg from "../assets/loading .json";

const PrivateRoute = ({ children }) => {
  const { users, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    <div>
      <Lottie>animationData={loadingImg}</Lottie>
      
    </div>;
  }

  if (users) {
    return children;
  }
  return <Navigate state={location?.pathname} to="/signIn"></Navigate>;
};

export default PrivateRoute;
