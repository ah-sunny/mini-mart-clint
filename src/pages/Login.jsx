import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import GoogleLogIn from "../component/GoogleLogIn";
import useAuth from "../hooks/useAuth";


const Login = () => {

  const {LogInUser } = useAuth()
  const navigate = useNavigate()


   const {
       register,
       handleSubmit,
       formState: { errors },
   } = useForm()

   const handleLogin = (data) => {
    // console.log(data)

    console.log("clicked login button")
           //create user
           LogInUser(data.email, data.password)
       
        .then((result)=>{
            console.log(result.user)
            toast.success("user log in succesfully")
            navigate('/')
        })
           .catch(error => {
               // console.error(error)
               toast.error(`${error.message}`)
           })

}


  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit(handleLogin)} >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                        {errors.email && <span className="text-red-500 text-xs" >Email is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", { required: true, minLength: 6 })} type="password" placeholder="password" className="input input-bordered" />
                        {errors.password?.type == "required" &&
                            <span className="text-red-500 text-xs" >Password is required</span>}
                        {errors.password?.type == "minLength" &&
                            <span className="text-red-500 text-xs" >Password must have at least 6 characters</span>}

                    </div>
                    
                    <div className="form-control mt-1">
                        <button type="submit" className="btn btn-primary ">Login</button>
                        <GoogleLogIn></GoogleLogIn>
                    </div>
                    <p className="text-sm" >Create new account
                        <Link to='/register' className="text-blue-900 " > Register</Link>
                    </p>
                </form>
      </div>
    </div>
    <ToastContainer></ToastContainer>
  </div>
  );
};

export default Login;