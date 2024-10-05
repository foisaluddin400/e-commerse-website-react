import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Img1 from "../../assets/home/bb.png";
import Img2 from "../../assets/home/nn.webp";
import Img3 from "../../assets/home/qq.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Hero = () => {
  return (
    <div>
      <div className="mt-1">
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper md:rounded-3xl md:h-[600px]"
          >
            <SwiperSlide>
              <motion.img
                className="md:h-[600px] w-full"
                src={Img1}
                alt=""
                initial={{ opacity: 0, scale: 0.9 }} // Start small and invisible
                whileInView={{ opacity: 1, scale: 1 }} // Animate to normal size and visible
                transition={{ duration: 0.7 }} // Animation duration
              />
            </SwiperSlide>
            <SwiperSlide>
              <motion.img
                className="md:h-[600px] w-full"
                src={Img2}
                alt=""
                initial={{ opacity: 0, scale: 0.9 }} // Start small and invisible
                whileInView={{ opacity: 1, scale: 1 }} // Animate to normal size and visible
                transition={{ duration: 0.7 }} // Animation duration
              />
            </SwiperSlide>
            <SwiperSlide>
              <motion.img
                className="md:h-[600px] w-full"
                src={Img3}
                alt=""
                initial={{ opacity: 0, scale: 0.9 }} // Start small and invisible
                whileInView={{ opacity: 1, scale: 1 }} // Animate to normal size and visible
                transition={{ duration: 0.7 }} // Animation duration
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
