import TitleSection from "../../Shared/TitleSection";
import UseMenu from "../../UseHook/UseMenu";
import TrendingItem from "./TrendingItem";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const TrendingMenu = () => {
  const [menu] = UseMenu();
  const populer = menu.filter((item) => item.category === "popular");
  return (
    <div>
      <div className="mt-16">
        <TitleSection heading="Today" title="Flash Sales"></TitleSection>
      </div>

      <div className="mt-5 mx-3">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {populer.map((item) => (
            <SwiperSlide>
              <TrendingItem item={item}></TrendingItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="text-center mt-10">
      <Link to='/shop'><button className="bg-red-500 text-white p-2 rounded-md">View all Product</button></Link>
      </div>
    </div>
  );
};

export default TrendingMenu;
