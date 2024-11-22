import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import Loading from "../../component/loading/Loading";
import MyCard from "../../component/MyCard";
import useAuth from "../../hooks/useAuth";


export const MyProduct = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false)
  const [myProducts, setMyProducts] = useState([])
  const [reFetch, setReFetch] = useState(false)
  // console.log("user info from my product ", user?.email)
  //get token from localstorage
  const token = localStorage.getItem("access-token")
  // console.log("token0", token)

  useEffect(() => {
    setLoading(true)
    

    const fetch = async () => {
      axios.get(`http://localhost:4000/my-product/${user?.email}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => {
          // console.log("first promise receive",res.data)
          setMyProducts(res.data)
          setLoading(false)
          setReFetch(false)
          
        })
      }
      fetch()    
      
      
    }, [user, token,reFetch])

// delete Product 
const handleDelete = (id) => {
  Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
  }).then((result) => {
      if (result.isConfirmed) {

          axios.delete(`http://localhost:4000/my-product?email=${user?.email}&id=${id}`,{
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
              .then(res => {
                  if (res.data.deletedCount > 0) {
                    setReFetch(true)
                      Swal.fire({
                          title: "Deleted!",
                          text: "Your Product has been deleted.",
                          icon: "success"
                      });
                      // console.log("confirm",id)
                  }
              })
      }
  });

}



  // console.log("product :  ", myProducts)
  return (
    <div>
      <h1 className="capitalize text-3xl font-bold text-center mx-auto border-b-2 pb-2 border-black border-dashed " >my product</h1>
      <div className="mt-5" >
        {
          loading ?
            <Loading />
            :
            (
              <>
                {
                  myProducts.length === 0 ?
                    <div className="w-full bg-red-700 h-full flex justify-between items-center">
                      <h1 className="text-3xl font-bold mx-auto ">Product not found</h1>
                    </div>
                    :
                    <div className="min-h-screen grid gridS-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                      {
                        myProducts.map((product) => (
                          <MyCard key={product._id}
                            product={product}
                            handleDelete={handleDelete}
                          ></MyCard>
                        ))
                      }
                    </div>
                }
              </>
            )
        }
      </div>
      <ToastContainer></ToastContainer>
    </div>
  )
}
