import axios from 'axios';
import PropTypes from 'prop-types';
import { GiSelfLove } from 'react-icons/gi';
import { LiaCartPlusSolid } from 'react-icons/lia';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import useAuth from '../hooks/useAuth';
import useUserData from '../hooks/useUSerData';

const ProductCard = ({ product }) => {
    // const { user } = useAuth()
    const user = useUserData()
    // const [disable , setDisable] = useState(true)
    
    const { _id, title, category, price, stock, brand, description } = product;
    // console.log(user)
     //get token from localstorage
     const token = localStorage.getItem("access-token")

    const handleWishList = async (id) => {
        await axios.patch(`http://localhost:4000/wishlist/add?email=${user?.email}&productID=${id}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                if (res.data.modifiedCount > 0) {
                    toast.success("product added into wishlist");
                }
            })
            .catch(error => {
                if (error.response?.status === 409) {
                    toast.warn(error.response.data.message);  // Warning message for duplicate product
                } else {
                    console.log("err msg: ", error.message)
                }
                // toast.error(`${error.message}`)
            })
    }
    const handleCart = async(id)=>{
        await axios.patch(`http://localhost:4000/cart/add?userEmail=${user?.email}&productID=${id}`)
        .then((res) => {
            if (res.data.modifiedCount > 0) {
                toast.success("Product added to Cart successfully");
            }
        })
        .catch(error => {
            if (error.response?.status === 409) {
                toast.warn(error.response.data.message);  // Warning message for duplicate product
            } else {
                console.log("err msg: ", error.message)
            }
            // toast.error(`${error.message}`)
        })



    }
    


    return (
        <div className="relative border-2 shadow-xl rounded-md h-fit ">
            <div className='absolute top-2 right-2'>
                <GiSelfLove className='size-7 text-red-600 ' />
            </div>
            <figure >
                <img className="rounded-t-md h-48 w-full "
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Product image" />
            </figure>
            <div className="p-3 ">
                <h2 className="text-2xl font-bold m mb-4">{title}</h2>
                <p className='text-lg font-bold mb-1'> <span>{brand}</span></p>
                <div className='text-sm my-1'>
                    <p>Category: <span className='font-bold text-sm' >{category}</span></p>
                    <p><span className='font-semibold' >Description:</span>
                        {
                            description.length < 60 ? `${description}`
                                :
                                `${description.slice(0, 69)}......`
                        }
                    </p>

                    <div className='flex justify-center gap-7 w-full my-3'>
                        <p className='border-2 px-3 border-gray-600 rounded-xl'>Price: <span className='text-red-700 font-semibold ' >${price}</span> </p>
                        <p className='border-2 px-3 border-gray-600 rounded-xl'>Stock: <span className='text-red-700 font-semibold' >{stock}</span></p>

                    </div>
                </div>
            </div>
            <div className="w-full mt-1  flex rounded-t-2xl ">
                <button disabled={user?.role == 'seller' ? true : false} onClick={() => handleWishList(_id)} className='btn rounded-none w-1/2 p-3 flex items-center justify-center gap-3 bg-red-500  rounded-bl-md ' >
                    <GiSelfLove className='size-5 text-balance' />
                    <span className='font-bold text-lg '>wishlist</span>
                </button>
                <button disabled={user?.role == 'seller' ? true : false}  onClick={() => handleCart(_id)} className=" btn rounded-none flex items-center justify-center gap-3 bg-yellow-400 w-1/2 p-3 rounded-br-md">
                    <LiaCartPlusSolid className='size-6' />
                    Add to Cart
                </button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};
ProductCard.propTypes = {
    product: PropTypes.object
}
export default ProductCard;

