import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../component/loading/Loading';
import useAuth from '../hooks/useAuth';
import useUserData from '../hooks/useUSerData';


const BuyerRoute = ({children}) => {
    const {user, loading} = useAuth();
const location = useLocation()
const userData = useUserData()

if(loading || !userData.role ){
    return <Loading/>
}
if(user && userData.role == 'buyer'){
    return children;
}

    return <Navigate to='/' state={{from: location}} replace></Navigate>
};
BuyerRoute.propTypes = {
    children: PropTypes.node
}


export default BuyerRoute;