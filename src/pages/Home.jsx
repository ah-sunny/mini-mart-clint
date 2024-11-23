import Banner from "../component/Banner"
import ContactUs from "../component/ContactUs"
import Faq from "../component/FAQ"
import Features from "../component/Features"
import Testimonial from "../component/Testimonial"

export const Home = () => {
  return (
    <div className="container mx-auto space-y-16 mb-10 ">

      <div>
        <Banner></Banner>
      </div>
      <div>
        <Features></Features>
      </div>
      <div>
        <Testimonial></Testimonial>
      </div>
      <div>
        <Faq></Faq>
      </div>
      <div>
        <ContactUs></ContactUs>
      </div>

    </div>
  )
}
