import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";


const useUserData = () => {
    const {user, loading} = useAuth();
    const [userData, setUserData] = useState({})

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const res = await axios.get(`http://localhost:4000/users/${user?.email}`);
                setUserData(res?.data)
    
                
                // console.log("in hook", userData)
            } catch (error) {
                console.error(error)
            }
            
        }
        if(user?.email && !loading ){
            fetchData();
        }

    },[user,loading,])
//   console.log("in hook", userData)
return userData;
   
};

export default useUserData;