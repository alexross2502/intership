import { useLocation, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const isAuthorized = useSelector((state) => state.authorization.isAuthorized);

  if (!isAuthorized) {
    alert("Вы не авторизованы");
    return <Redirect to="/" state={{ from: location }} />;
  }

  return children;
};

export { RequireAuth };
