import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import paths from "../../paths";

export default function AuthGuard(props) {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to={paths.login} />;
    }

    return <Outlet />;
}