import axios from "axios"
import { useEffect, useState } from "react"
import { FaRegUser, FaUserSlash } from "react-icons/fa"
import Swal from "sweetalert2"
import Loading from "../../component/loading/Loading"
import useAuth from "../../hooks/useAuth"

export const AllUsers = () => {

  const { user } = useAuth()
  const [allUser, setAllUser] = useState([])
  const [loading, setLoading] = useState(false)
  const [reFetchData, setReFetchData] = useState(false)
  const token = localStorage.getItem("access-token")
  // const disableButton = user?.role === 'seller' || user?.role === 'admin'


  useEffect(() => {
    setLoading(true)
    const fetchAllUser = async () => {
      axios.get(`http://localhost:4000/all-users?email=${user?.email}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => {
          // console.log(" receive",res.data)
          setAllUser(res.data)
          setLoading(false)
          setReFetchData(false)

        })
    }
    fetchAllUser();
  }, [user, token, reFetchData])
// console.log("user,: ",allUser)
  const handleDeleteUser = (id) => {
    console.log('clicked for delete user : ', id)
    Swal.fire({
      title: "Are you sure?",
      text: "You wnat to remove this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!"
    }).then(async (result) => {
      if (result.isConfirmed) {

        await axios.delete(`http://localhost:4000/delete-user?email=${user?.email}&userId=${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(res => {
            setReFetchData(true)
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your User has been deleted.",
                icon: "success"
              });
              // console.log("confirm",id)
            }
          })
      }
    });


  }

  const handleMakeSeller =(id)=>{

const promoteRole = {
  role: "seller"
}

console.log("promote role=== ",promoteRole)
    Swal.fire({
      title: "Are you sure?",
      text: "You wnat to make user Seller!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Make Seller!"
    }).then(async (result) => {
      if (result.isConfirmed) {

        await axios.patch(`http://localhost:4000/promote-user?email=${user?.email}&userId=${id}`,promoteRole, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(res => {
            setReFetchData(true)
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Promoted!",
                text: "User now SELLER.",
                icon: "success"
              });
            }
          })
      }
    });
  }


  return (
    <div>
      <h1 className="text-2xl font-bold mx-auto text-center border-b-2 border-black border-dashed pb-4 mb-9" >All Users List</h1>
      {/* table */}
      <div>

        <div className=" text-lg lg:text-xl font-bold mb-3 italic">
          <h1>Total User : {allUser?.length}</h1>

        </div>

        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Promote</th>
                <th>Cart</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody >
              {
                loading ?
                  <Loading />
                  :
                  <>
                    {
                      allUser.map((user, idx) => (
                        <tr key={user._id} className="space-y-2 ">
                          <th>{idx + 1}</th>
                          <td className="mask mask-squircle h-12 w-12 ">
                              {
                                user?.photoURL ? 
                                <img src={user?.photoURLs } alt="user" />
                                : 
                                <FaRegUser className="size-6 ml-2 " />
                              }
                          </td>
                          <td>{user?.name}</td>
                          <td>{user?.email}</td>
                          <td className="text-red-500" >{user?.role}</td>
                          <td className="text-red-500" >{user?.status}</td>
                          <td >
                            <button
                             disabled={ user?.role === 'seller' || user?.role === 'admin'} 
                             onClick={() => handleMakeSeller(user?._id)} 
                              className="btn btn-sm btn-outline rounded-tl-none rounded-br-none " >make seller</button>
                            </td>
                          <td className="text-center" >{user?.cart?.length}</td>
                          <td  onClick={() => handleDeleteUser(user?._id)} className="text-center">
                            <FaUserSlash className="size-6 text-red-700  " />
                          </td>
                        </tr>

                      ))
                    }
                  </>
              }

            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}
