import { Navigate, useLocation } from "react-router-dom";

import PropTypes from 'prop-types';
import Loading from "../component/loading/Loading";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation();

    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children;
    }


    return  <Navigate to="/login" state={{from: location}} replace />
};
PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;