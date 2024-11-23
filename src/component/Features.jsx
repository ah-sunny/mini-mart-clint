

const Features = () => {
  return (

    <div>
      <div className="text-center mx-auto mb-12 lg:w-[50%] p-2">
        <h1 className="font-bold text-xl lg:text-3xl  mb-3" >Boost The Traffic <br /> with Premium Features</h1>
        <p>Discover our awesome demo, meets & fits any kind of your business. You can mix and match headers, footer, colors, fonts and much more using the Theme Option.</p>
      </div>
      <div className="flex flex-col items-center lg:flex-row gap-5">
        {/* cart */}
        <div className="card bg-base-100 w-96  shadow-xl">
          <figure>
            <img
              src='/src/assets/fea-11.jpg'
              alt="Shoes" className="h-[85%] rounded-md" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Smart Watch
              <div className="badge badge-secondary">NEW</div>
            </h2>
            {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
              <div className="badge badge-outline">Electric</div>
            </div>
          </div>
        </div>
        {/* end */}
         {/* cart */}
         <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
             src='/src/assets/fea-22.jpg'
             alt="Shoes" className="h-[85%] rounded-md" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
             HeadPhone
              <div className="badge badge-secondary">NEW</div>
            </h2>
            {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
              <div className="badge badge-outline">Electric</div>
            </div>
          </div>
        </div>
        {/* end */}
         {/* cart */}
         <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
             src='/src/assets/fea-3.avif'
             alt="Shoes" className="h-[85%] rounded-md" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
             Wireless Mouse
              <div className="badge badge-secondary">NEW</div>
            </h2>
            {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
              <div className="badge badge-outline">Electric</div>
            </div>
          </div>
        </div>
        {/* end */}

      </div>

    </div>
  );
};

export default Features;