import PropTypes from 'prop-types';
import { GrPowerReset } from "react-icons/gr";
import { RiFilter2Line } from "react-icons/ri";


const FilterBar = ({setCategory,setBrand, handleResetButtom,uniqueBrands,uniqueCategorys}) => {
    return (
        <div className="mx-auto ">
            <h1 className="flex items-center justify-center gap-1 text-xl mb-5 font-bold ">
                <RiFilter2Line></RiFilter2Line>
                Filters
            </h1>
            {/* //lost phone */}
            <div>
                <select onChange={(e)=>setBrand(e.target.value)} className="select select-sm select-bordered w-full max-w-xs">
                    <option value=''>Brand</option>
                    {
                        uniqueBrands.map((brand,idx)=>(<option key={idx} value={brand} >{brand}</option>))
                    }
                </select>
            </div>
            <div className=" my-2 ">
                <select onChange={(e)=>setCategory(e.target.value)} className="select select-sm select-bordered w-full max-w-xs">
                    <option  value='' >Category</option>
                    {
                        uniqueCategorys.map((category,idx)=>(<option key={idx} value={category} >{category}</option>))
                    }
                </select>
            </div>
            <div>
                <button onClick={handleResetButtom} className="btn btn-primary w-full btn-sm flex items-center">
                    <span>Reset</span>
                    <GrPowerReset />
                </button>
            </div>
        </div>
    );
};
FilterBar.propTypes = {
    handleResetButtom: PropTypes.func,
    setCategory: PropTypes.func,
    setBrand: PropTypes.func,
    uniqueCategorys: PropTypes.array,
    uniqueBrands: PropTypes.array,
    
}


export default FilterBar;