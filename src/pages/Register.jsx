import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import GoogleLogIn from "../component/GoogleLogIn";

const Register = () => {

  // const { createUser } = useAuth()
  // const navigate = useNavigate()
  const [showPass, setShowPass] = useState(false)


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
      role: data?.role,
      status: data.role === "buyer" ? "approved " : "pending",
      wishlist: []
    }
    console.log(userDetails)

    //   createUser(data.email, data.password)
    //   .then((res)=>{
    //     console.log(res.user)
    //     toast.success("created")
    //     // navigate("/")
    //   })
    //   .catch(error => {
    //     toast.error(`${error.message}`)
    //     // console.error(error)
    // })


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
            {/* email field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
              {errors.email && <span className="text-red-500 text-xs mt-1" >Email is required</span>}
            </div>
            {/* password field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register('password', {
                  required: 'Password is required',
                  minLength: 8,
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    message:
                      'Password must have uppercase, lowercase, number, and special character.',
                  },
                })}
                type={showPass ? "text" : "password"}
                placeholder="password" className="input input-bordered" />

              {/* error handle for password */}

              {errors.password?.type == "minLength" &&
                <span className="text-red-500 text-xs mt-1" >Password must have at least 8 characters</span>}
              {errors.password &&
                <span className="text-red-500 text-xs mt-1" >{errors.password.message}</span>}


              {/* show password method */}
              <span className='absolute right-[18%] bottom-[58%] ' onClick={() => setShowPass(!showPass)}> {showPass ? <FaEyeSlash className="size-6"></FaEyeSlash> : <FaEye className="size-6"></FaEye>} </span>

            </div>
            {/*  confirm password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input {...register("confirmPass", {
                required: 'Password is required',
                validate: (value) => {
                  if (watch("password") != value) {
                    return "password don't match";
                  }
                },

              })} type={showPass ? "text" : "password"}
                placeholder="Re-enter password" className="input input-bordered" />

              {errors.confirmPass &&
                <span className="text-red-500 text-xs mt-1" >{errors.confirmPass.message}</span>}

              {/* show password method */}
              <span className='absolute right-[18%] bottom-[48%] ' onClick={() => setShowPass(!showPass)}> {showPass ? <FaEyeSlash className="size-6"></FaEyeSlash> : <FaEye className="size-6"></FaEye>} </span>

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
              <Link to='/login' className="text-blue-900 " >  Login</Link>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Register;