import PropTypes from 'prop-types';

const Sorting = ({setSort}) => {
    return (
        <div>
            <select onChange={(e)=>setSort(e.target.value)} className="select select-sm select-bordered w-full max-w-xs">
                <option value="asc" >Low to High</option>
                <option value="desenc">High to low</option>
            </select>

        </div>
    );
};
Sorting.propTypes = {
    setSort: PropTypes.func
}

export default Sorting;