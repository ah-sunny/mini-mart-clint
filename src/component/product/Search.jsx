import PropTypes from 'prop-types';
import { IoSearch } from "react-icons/io5";

const Search = ({handleSearchBtn}) => {
    return (
        <div className=''>
            <form onSubmit={handleSearchBtn} className="flex items-center">
                <input name="search" type="text" placeholder="Search Prodcut" className="border-2 border-black input-sm rounded-l-md w-40 "  />
                <button type="submit" className="btn btn-primary btn-sm rounded-l-none min-w-11 w-14 ">
                    <IoSearch/>
                </button>
            </form>
        </div>
    );
};
Search.propTypes = {
    handleSearchBtn: PropTypes.func
}

export default Search;