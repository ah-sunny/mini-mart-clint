import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import Loading from "../loading/Loading";

 
const UpdateProduct = () => {
  const params = useParams()
  const navigate = useNavigate()

  const { user } = useAuth();
const [loading, setLoading] = useState(false)
const [myProducts, setMyProducts] = useState({})
console.log("product -- ", myProducts.title)

const token = localStorage.getItem("access-token")

  useEffect(()=>{
    setLoading(true)
    const fetchUpdateData = async ()=>{
      axios.get(`http://localhost:4000/my-product?email=${user?.email}&id=${params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        console.log("update promise receive",res.data)
        setMyProducts(res.data)
        setLoading(false)
        
      })
    }
    fetchUpdateData()
  },[params,user,token])

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
} = useForm()

useEffect(() => {
  if (myProducts) {
    setValue('title', myProducts.title); // Dynamically set the value for "title"
    setValue('category', myProducts.category); 
    setValue('image', myProducts.image); 
    setValue('price', myProducts.price); 
    setValue('stock', myProducts.stock); 
    setValue('brand', myProducts.brand); 
    setValue('description', myProducts.description); 
    setValue('sellerEmail', myProducts.sellerEmail); 
    
  }
}, [myProducts, setValue]);


const handleUpdateProduct = async(data)=>{

  const updateProduct = {
    title: data?.title,
    category: data?.category,
    image: data?.image,
    price: data?.price,
    stock: data?.stock,
    brand: data?.brand,
    description: data?.description,
    // sellerEmail: user?.email
}
  console.log("update info :  ", updateProduct)
const productID =myProducts?._id
  // update part
  const updateItem = await axios.patch(`http://localhost:4000/my-product?email=${user?.email}&id=${productID}`, updateProduct, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  console.log(updateItem.data)
  if (updateItem.data.modifiedCount > 0) {
      // show success popup
      reset();
      Swal.fire({
          position: "top-end",
          icon: "updated",
          title: `Updated Your parcel Info`,
          showConfirmButton: false,
          timer: 1500
      });
      navigate("/dashboard/my-product")
  }



}

  return (
    <div>
      <div>
      <h1 className="capitalize text-3xl font-bold text-center mx-auto border-b-2 pb-2 border-black border-dashed " >update product</h1>
      </div>
     {
      loading ?
      <Loading/>
      :
      (
        <>
         <div className="mt-4">
                <form className="card-body" onSubmit={handleSubmit(handleUpdateProduct)} >
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
        </>
      )
     

     }
    </div>
  );
};

export default UpdateProduct;