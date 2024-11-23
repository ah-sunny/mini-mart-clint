

export const About = () => {
  return (
    <div className="my-10">
       {/* <div className="text-center mx-auto mb-12 lg:w-[50%]">
        <h1 className="font-bold text-xl lg:text-4xl  mb-3" >About Us</h1>

      </div> */}



      <div className="flex justify-between flex-col lg:flex-row gap-5  shadow-2xl rounded-xl w-[80%] mx-auto">

        {/*  */}
        <div className="lg:w-1/2">
          <img src="/src/assets/aboutUs.jpg" alt="" className="" />
        </div>
        {/*  */}
        <div className="text-left lg:w-1/2  p-2 pr-5">

          <h1 className="font-bold text-xl lg:text-4xl border-b-2 border-dashed border-black pb-2  mb-5" >About Us</h1>
          <p className="tracking-wide leading-7 ">Welcome to Sir/Madam, your trusted destination for quality products and exceptional service. We are a small, passionate team dedicated to bringing you the best shopping experience, whether you’re looking for everyday essentials or unique finds.

At <span className="text-blue-500 font-bold ">MINIMART</span>, we believe that shopping should be simple, convenient, and enjoyable. That is why we handpick every product in our collection, ensuring top-notch quality and value for our customers. With our user-friendly website and secure checkout process, we have made it easy for you to discover and purchase items you love—all from the comfort of your home.</p>
        </div>

      </div>

    </div>
  )
}
