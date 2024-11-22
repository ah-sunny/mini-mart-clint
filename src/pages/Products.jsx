
import axios from "axios"
import { useEffect, useState } from "react"
// import { Loading } from "../component/loading/Loading"
import Loading from "../component/loading/Loading"
import FilterBar from "../component/product/FilterBar"
import Search from "../component/product/Search"
import Sorting from "../component/product/Sorting"
import ProductCard from "../component/ProductCard"


export const Products = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState('asc')
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('')
  const [uniqueCategorys, setUniqueCategorys] = useState([])
  const [uniqueBrands, setUniqueBrands] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)

  console.log("search: ", search)
  console.log("sort: ", sort)
  console.log("brand: ", brand)
  console.log("category: ", category)
  console.log("product: ", products)

  const handleSearchBtn = (e) => {
    e.preventDefault()
    const searchText = e.target.search.value;
    setSearch(searchText)
    e.target.search.value = "";
  }
  const handleResetButtom = () => {
    setSearch("")
    setBrand("")
    setCategory("")
    setSort('asc')
    window.location.reload()
  }

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      axios.get(`http://localhost:4000/all-product?title=${search}&page=${page}&limit=${9}&sort=${sort}&brand=${brand}&category=${category}`)
        .then(res => {
          console.log("first promise receive",res.data)
          setProducts(res.data.allProductList);
          setUniqueCategorys(res.data.categorys);
          setUniqueBrands(res.data.brands);
          setTotalPage(Math.ceil(res.data.totalProduct / 9 ))
          setLoading(false)

        })
    }
    fetch()
  }, [search, sort, brand, category,page])

  const handlePageChange = (newpage) => {
    if(newpage >0 && newpage <= totalPage){
      setPage(newpage)
      window.scrollTo({ top: 0 , behavior: "smooth" })
    }
  }


  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mx-auto text-center" >All Product</h1>
      {/* search and sort */}
      <div className="flex justify-between items-center w-full mb-5 mt-8">
        <div><Search handleSearchBtn={handleSearchBtn} ></Search></div>
        <div> <Sorting setSort={setSort} /> </div>
      </div>
      {/* filter and product */}
      <div className="grid grid-cols-12">
        <div className="col-span-2 bg-gray-400 min-h-screen rounded-t-md p-5  ">
          <div className=" ">
            <FilterBar
              setBrand={setBrand}
              setCategory={setCategory}
              handleResetButtom={handleResetButtom}
              uniqueCategorys={uniqueCategorys}
              uniqueBrands={uniqueBrands}
            ></FilterBar>
          </div>
        </div>


        <div className="col-span-10 ">

          {
            loading ? (
              <Loading />
            ) : (
              <>
                {
                  products.length === 0 ?
                    <div className="w-full bg-red-700 h-full flex justify-between items-center">
                      <h1 className="text-3xl font-bold mx-auto ">Product not found</h1>
                    </div>
                    :
                    <div className="min-h-screen grid grid-cols-3 gap-3 ">
                      {
                        products.map((product) => (
                          <ProductCard key={product._id}
                            product={product}
                          ></ProductCard>
                        ))
                      }
                    </div>
                }
              </>
            )
          }
          {/* pagination */}
          <div className="mx-auto text-center my-4 ">
            <div className="join  ">
              <button onClick={()=> handlePageChange(page-1)} className="join-item btn">«</button>
              <button className="join-item btn">Page {page} of {totalPage} </button>
              <button onClick={()=> handlePageChange(page+1)} className="join-item btn">»</button>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}
