import axios from "axios"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import ShowWishlist from "../../component/Dashboard-cmp/showWishlist"
import Loading from "../../component/loading/Loading"
import useAuth from "../../hooks/useAuth"


export const Wishlist = () => {
  const { user } = useAuth()
  const [wishList, setWishList] = useState([])
  const [loading, setLoading] = useState(false)
  const [reFetchData, setReFetchData] = useState(false)
  const token = localStorage.getItem("access-token")
 

  useEffect(() => {
    setLoading(true)
    const fetch = async () => {
      await axios.get(`http://localhost:4000/wishlist?email=${user?.email}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => {
          // console.log(" receive",res.data)
          setWishList(res.data.wishList)
          setLoading(false)
          setReFetchData(false)

        })
    }
    fetch()
  }, [user, token, reFetchData])
  console.log("wish::: ", wishList)


  // delete Product  from wishlist
  const handleDelete =  (id) => {
    // setReFetch(true)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {

      await  axios.patch(`http://localhost:4000/wishlist/remove?email=${user?.email}&productID=${id}`,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          setReFetchData(true)
            if (res.data.deletedCount > 0) {
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

  return (
    <div>
      <h1 className="text-2xl font-bold mx-auto text-center border-b-2 border-black border-dashed pb-4 mb-9" >My Wishlist List</h1>
      <div>

        {
          loading ?
            <Loading />
            :
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {
                  wishList.map((product, idx) => <ShowWishlist key={idx} 
                  product={product}
                  handleDelete={handleDelete}
                   ></ShowWishlist>)
                }

              </div>

            </>

        }
      </div>
    </div>
  )
}
