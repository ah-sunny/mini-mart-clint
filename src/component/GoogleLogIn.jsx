
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useAuth from '../hooks/useAuth';

const GoogleLogIn = () => {
  const {GoogleLogin} = useAuth();
  const navigate = useNavigate()

  const handleGoogleLogin=()=>{

    GoogleLogin()
    .then((result)=>{
        console.log("google",result.user)

        const userDetails = {
            name: result?.user?.displayName,
            email: result?.user?.email,
            photoURL: result?.user?.photoURL,
            role : "buyer",
            // status : userDetails?.role === "buyer" ? "approved ": "pending",
            status: "approved",
            wishlist: []
        }
        console.log("user details",userDetails)

        // axios.post('http://localhost:4000/users', userDetails)
        // .then(() => {
        //     // if (res.data.insertedId) {
        //     //     // console.log('user added to the database')
                
        //     //     Swal.fire({
        //     //         position: 'center',
        //     //         icon: 'success',
        //     //         title: 'User created successfully.',
        //     //         showConfirmButton: false,
        //     //         timer: 1500
        //     //     });

        //     //     navigate("/");
        //     // }
        // })
        // .catch(error => {
        //     // console.error(error)
        //     toast.error(`${error.message}`)
        // })

        

        toast.success("user log in succesfully")
        navigate('/')
    })
       .catch(error => {
           // console.error(error)
           toast.error(`${error.message}`)
       })
}
  return (
    <div className="">
    <div className="divider my-2">OR</div>
    <div onClick={handleGoogleLogin} className="flex items-center gap-2 btn btn-outline btn-sm text-lg " >
        <FcGoogle/> <span>GOOGLE</span>
    </div>
    <ToastContainer></ToastContainer>
</div>
  );
};

export default GoogleLogIn;