import { GoCodeReview } from "react-icons/go";


const Testimonial = () => {
  return (
    <div>
      <div className="text-center mx-auto mb-12 lg:w-[50%] p-2">
        <h1 className="font-bold text-xl lg:text-3xl  mb-3" >What People Say ?</h1>
        <p>See What Our Customers Are Saying!
          Real experiences shared by happy shoppers.
          Discover why they love shopping with us!</p>
      </div>
      <div className="flex flex-col justify-center items-center lg:flex-row gap-5">

        {/* cart */}
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <p> <GoCodeReview className="size-14 mx-auto" /> </p>
            <h2 className="card-title">Fantastic Shopping Experience!</h2>
            <p>I recently purchased from Minimart, and I could not be happier! The products were exactly as described, and the shipping was incredibly fast.</p>
            <p> - Sarah J.</p>
          </div>
        </div>
        {/* cart */}
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
          <p> <GoCodeReview className="size-14 mx-auto" /> </p>
            <h2 className="card-title">Affordable and Reliable!!</h2>
            <p>Shopping at Minimart is such a breeze. I found everything I needed at great prices, and the entire process was so smooth. I’ll definitely be back for more!</p>
            <p> - Kevin R.</p>
            
          </div>
        </div>
        {/* cart */}
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
          <p> <GoCodeReview className="size-14 mx-auto" /> </p>
            <h2 className="card-title">Minimart Never Disappoints!!</h2>
            <p>This is my third purchase from Minimart, and once again, they exceeded my expectations. The product variety is fantastic, and delivery is always on time. Keep up the great work!</p>
            <p> – Emily H. </p>
            
          </div>
        </div>


      </div>




    </div>
  );
};

export default Testimonial;