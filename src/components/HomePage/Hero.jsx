import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import Img1 from "../../assets/home/bb.png"
import Img2 from "../../assets/home/nn.webp"
import Img3 from "../../assets/home/qq.jpg"


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Hero = () => {
  return (
    <div>
      <div className="mt-1 ">
    
        <div className="">
          <div className="">
          <Swiper
           spaceBetween={30}
           centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
           pagination={true} 
           modules={[Autoplay, Pagination, Navigation]} 
           
           className="mySwiper md:rounded-3xl md:h-[600px]">
            <SwiperSlide><img className='md:h-[600px] w-full' src={Img1} alt="" /></SwiperSlide>
            <SwiperSlide><img className='md:h-[600px] w-full' src={Img2} alt="" /></SwiperSlide>
            <SwiperSlide><img className='md:h-[600px] w-full' src={Img3} alt="" /></SwiperSlide>
            
          
            
          </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
