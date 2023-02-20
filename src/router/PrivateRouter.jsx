import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const currentUser = useSelector((state) => state.auth.user)
  // const currentUser = true;

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
