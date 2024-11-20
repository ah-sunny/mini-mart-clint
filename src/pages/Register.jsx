import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import GoogleLogIn from "../component/GoogleLogIn";
import useAuth from "../hooks/useAuth";

const Register = () => {

  const { createUser } = useAuth()
  const navigate = useNavigate()


  const {
      register,
      handleSubmit,
      watch,
      
      formState: { errors },
  } = useForm()

  const handleRegister = (data) => {

    console.log("clicked register butto")
        const name = data.email.split("@")[0]
        const userDetails = {
            name: name,
            email: data.email,
            photoURL: data.photoURL,
            role : data?.role,
            status : data.role === "buyer" ? "approved ": "pending",
            wishlist: []
        }
  console.log(userDetails)

  createUser(data.email, data.password)
  .then((res)=>{
    console.log(res.user)
    navigate("/")
  })
  .catch(error => {
    // console.error(error)
    toast.error(`${error.message}`)
})


  }
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse bg-no-repeat bg-cover "
        style={{
            backgroundImage: "url('/public/Register.jpg')",

        }}
    >
        <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(handleRegister)} >
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
                {/*  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input {...register("confirmPass", {
                        required: true, minLength: 6, maxLength: 7,
                        validate: (value) => {
                            if (watch("password") != value) {
                                return "don't match";
                            }
                        },

                    })} type="password" placeholder="Type password" className="input input-bordered" />


                    {errors.confirmPass?.type == "required" &&
                        <span className="text-red-500 text-xs" >Password is required</span>}
                    {/* {errors.confirmPass?.type == "minLength" &&
                        <span className="text-red-500" >Password must have at least 6 characters</span>} */}
                    {/* {errors.confirmPass?.type == "maxLength" &&
                        <span className="text-red-500" >Password have too musch characters</span>} */}
                    {errors.confirmPass &&
                        <span className="text-red-500 text-xs" >Password do not match</span>}

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Role</span>
                    </label>
                    <select {...register("role", { required: true, })} className="select select-bordered w-full max-w-xs">
                        {/* <option disabled selected>Select the Role</option> */}
                        <option value='buyer' >buyer</option>
                        <option value='seller' >seller</option>
                    </select>
                    {
                        errors.role && <span> You must select the role</span>
                    }
                </div>

                <div className="form-control mt-1">
                    <button type="submit" className="btn btn-primary ">Register</button>
                    <GoogleLogIn></GoogleLogIn>
                </div>
                <p className="text-sm" >Already have an account?
                    <Link to='/login' className="text-blue-900 " > Login</Link>
                </p>
            </form>
        </div>
    </div>
    <ToastContainer></ToastContainer>
</div>
  );
};

export default Register;