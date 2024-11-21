import axios from "axios";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";


// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


export const AddProduct = () => {
    const { user } = useAuth()
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()

    const handleAddProduct = async (data) => {
        // console.log("clicked add butto", data)

        const product = {
            title: data?.title,
            category: data?.category,
            image: data?.image,
            price: data?.price,
            stock: data?.stock,
            brand: data?.brand,
            description: data?.description,
            sellerEmail: user?.email
        }
        console.log("form prodyct ", product)

        //get token from localstorage
        const token = localStorage.getItem("access-token")
        console.log("token0", token)

        // image upload to imgbb and then get an url
        // const imageFile = { image: data.image[0] }
        // const res = await axios.post(image_hosting_api, imageFile, {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // });

     // product post in server
     axios.post('http://localhost:4000/products', product,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then((res) => {
        console.log(' added to the database',res)
        if (res.data.insertedId) {
            
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Product added successfully.',
                showConfirmButton: true,
                timer: 1000
            });
        }
    })
    .catch(error => {
        // console.error(error)
        toast.error(`${error.message}`)
    })


    }

    return (<div>
        <div>
            <h1 className="text-3xl mx-auto text-center font-bold border-b-2 pb-3 border-black">Add product</h1>

            <div className="mt-4">
                <form className="card-body" onSubmit={handleSubmit(handleAddProduct)} >
                    {/* 1st row  */}
                    <div className=" flex justify-between gap-5 ">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input {...register("title", { required: true })} type="text" placeholder="Product Title" className="input input-bordered" />
                            {errors.title && <span className="text-red-500 text-xs" >title is required</span>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input {...register("category", { required: true })} type="text" placeholder="Category" className="input input-bordered" />
                            {errors.category && <span className="text-red-500 text-xs" >Category is required</span>}
                        </div>
                    </div>

                    {/* 2nd line */}

                    <div className=" flex justify-between gap-5 ">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input {...register("price", { required: true })} type="number" placeholder="Product Price" className="input input-bordered" />
                            {errors.price && <span className="text-red-500 text-xs" >Price is required</span>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Stock</span>
                            </label>
                            <input {...register("stock", { required: true })} type="number" placeholder="number of Stock" className="input input-bordered" />
                            {errors.stock && <span className="text-red-500 text-xs" >Stock is required</span>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Brand</span>
                            </label>
                            <input {...register("brand", { required: true })} type="text" placeholder="Product Brand" className="input input-bordered" />
                            {errors.brand && <span className="text-red-500 text-xs" >Brand is required</span>}
                        </div>
                    </div>
                    {/* image row */}
                    <div className=" flex justify-between gap-5 ">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image Url</span>
                            </label>
                            <input {...register("image", { required: true })} type="text" placeholder="Enter product image" className="textarea textarea-bordered " />
                            {errors.image && <span className="text-red-500 text-xs" >image is required</span>}
                        </div>
                    </div>
                    {/* 3rd row */}
                    <div className=" flex justify-between gap-5 ">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input {...register("description", { required: true })} type="text" placeholder="Product Description" className="textarea textarea-bordered h-20" />
                            {errors.description && <span className="text-red-500 text-xs" >Description is required</span>}
                        </div>
                    </div>
                    <div className="form-control mt-5">
                        <button type="submit" className="btn btn-primary ">Add</button>
                    </div>

                </form>
            </div>

        </div>
        <ToastContainer></ToastContainer>
    </div>


    )
}
