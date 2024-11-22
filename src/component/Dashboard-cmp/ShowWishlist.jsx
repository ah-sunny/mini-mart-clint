import PropTypes from 'prop-types';
import { FaRegWindowClose } from 'react-icons/fa';

const ShowWishlist = ({product,handleDelete}) => {


  // console.log("single :  ",)
    const { title, category, price, stock, brand, description } = product;
  
  return (
    <div className="border-2 shadow-xl rounded-md h-fit ">
    <figure >
        <img className="rounded-t-md h-48 w-full "
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Product image" />
    </figure>
    <div className="p-3">
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
        <div className=" w-full flex justify-center  ">
              <button onClick={() => handleDelete(product?._id)} className="w-[60%] btn btn-sm btn-outline bg-gray-300 mt-1 h-auto p-1 text-red-500">
              Remove <FaRegWindowClose /> </button>
            
        </div>
    </div>
</div>
  );
};
ShowWishlist.propTypes = {
  product: PropTypes.object,
  handleDelete: PropTypes.func
}

export default ShowWishlist;