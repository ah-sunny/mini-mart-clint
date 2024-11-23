

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="/src/assets/banner-3.jpg"
            className="w-full h-[400px] rounded-lg" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
             src="/src/assets/banner-1.jpg"
             className="w-full h-[400px] rounded-lg" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
             src="/src/assets/banner-2.jpg"
             className="w-full h-[400px] rounded-lg" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="/src/assets/banner-4.jpg"
            className="w-full h-[400px] rounded-lg" />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
      </div>

    </div>
  );
};

export default Banner;