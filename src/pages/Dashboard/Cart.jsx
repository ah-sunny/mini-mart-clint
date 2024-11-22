import axios from "axios"
import { useEffect, useState } from "react"
import { MdDeleteForever } from "react-icons/md"
import Loading from "../../component/loading/Loading"
import useAuth from "../../hooks/useAuth"


export const Cart = () => {
  const { user } = useAuth()
  const [cartList, setCartList] = useState([])
  const [loading, setLoading] = useState(false)
  const token = localStorage.getItem("access-token")

  useEffect(() => {
    setLoading(true)
    const fetch = async () => {
      axios.get(`http://localhost:4000/cart?email=${user?.email}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => {
          // console.log(" receive",res.data)
          setCartList(res.data.cartList)
          setLoading(false)

        })
    }
    fetch()
  }, [user, token])

  const totalPrice = cartList.reduce((total, item) => total + item.price, 0);
  return (
    <div>
      <h1 className="text-2xl font-bold mx-auto text-center border-b-2 border-black border-dashed pb-4 mb-9" >My Cart List</h1>

      <div>

        <div className="flex justify-evenly text-lg lg:text-xl font-bold mb-3 italic">
          <h1>Total Cart : {cartList.length}</h1>
          <h1>Total Price : {totalPrice} tk</h1>

        </div>

        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Title</th>
                <th>Brand</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {
                loading ?
                  <Loading />
                  :
                  <>
                    {
                      cartList.map((item, idx) => (
                        <tr key={item._id}>
                          <th>{idx + 1}</th>
                          <td>
                            {/* <div className="size-10">
                      <img className="size-10"
                       src={item?.image ? item?.image : "https://i.ibb.co.com/DR6wKzJ/prt.jpg" }
                        alt="Prt" />
                      </div> */}

                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={item?.image ? "https://i.ibb.co.com/DR6wKzJ/prt.jpg" : item?.image}
                                alt="prt" />
                            </div>
                          </td>
                          <td>{item?.title}</td>
                          <td>{item?.brand}</td>
                          <td className="text-red-500" >{item?.stock}</td>
                          <td className="text-red-500" >$ {item?.price}</td>
                          <td className=" ">
                            <MdDeleteForever className="size-6  " />
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
