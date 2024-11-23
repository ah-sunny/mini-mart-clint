import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../hooks/useAuth";

const ContactUs = () => {
  const { user } = useAuth()

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm()
  useEffect(() => {
    if (user) {
      setValue('email', user?.email); // Dynamically set the value for "title"
    }
  }, [user, setValue]);

  const handleContact = () => {
    // console.log(data)
    toast.success("thanks for contact us ")
    reset()
  }

  return (
    <div className="lg:w-[80%] p-1 mx-auto">
      <div className="text-center mx-auto mb-12 lg:w-[50%]">
        <h1 className="font-bold text-xl lg:text-6xl  mb-3" >Get in Touch</h1>

      </div>


      {/*  */}
      <div className="flex justify-between flex-col lg:flex-row gap-5  bg-base-200  shadow-2xl rounded-xl ">

        {/* img */}
        <div className="w-1/2 ">
          <img src="/src/assets/contact us img.jpg" alt="" className="rounded-l-xl h-auto lg:h-[100%]" />
        </div>

        {/* form */}
        {/* <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"> */}

          <form className="card-body" onSubmit={handleSubmit(handleContact)} >
            {/* name  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name :</span>
              </label>
              <input {...register("name", { required: true })} type="text" placeholder="Enter Your Name" className="input input-bordered" />
              {errors.name && <span className="text-red-500 text-xs mt-1" >Name is required</span>}
            </div>

            {/* email field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email :</span>
              </label>
              <input {...register("email", { required: true })} type="email" placeholder="Enter your contct email" className="input input-bordered" />
              {errors.email && <span className="text-red-500 text-xs mt-1" >Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message :</span>
              </label>
              <input {...register("message", { required: true })} type="text" placeholder="message ......" className="textarea textarea-bordered h-20" />
              {errors.message && <span className="text-red-500 text-xs mt-1" >Email is required</span>}
            </div>




            <div className="form-control mt-1">
              <button type="submit" className="btn btn-primary ">send</button>
            </div>

          </form>
        {/* </div> */}
      </div>

<ToastContainer></ToastContainer>
    </div>
  );
};

export default ContactUs;