import Banner from "../component/Banner"
import Features from "../component/Features"

export const Home = () => {
  return (
    <div className="container mx-auto space-y-16 mb-10 ">

      <div>
        <Banner></Banner>
      </div>
      <div>
        <Features></Features>
      </div>

    </div>
  )
}
