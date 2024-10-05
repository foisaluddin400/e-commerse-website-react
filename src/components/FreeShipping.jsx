import { GrDeliver } from "react-icons/gr";
import { MdHeadsetMic } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { motion } from "framer-motion"; // Import motion from framer-motion

const FreeShipping = () => {
  return (
    <div className="grid md:grid-cols-3 mt-[100px] mb-[70px]">
      <motion.div
        className="flex justify-center mt-5"
        initial={{ scale: 0.8, opacity: 0 }} // Start from small size and invisible
        whileInView={{ scale: 1, opacity: 1 }} // Animate to full size and visible
        transition={{ duration: 0.7 }} // Animation duration
      >
        <div className="text-center">
          <div className="flex justify-center">
            <div className="bg-black border-4 text-3xl pt-3 border-x-gray-500 text-white flex justify-center w-16 h-16 rounded-full">
              <GrDeliver />
            </div>
          </div>
          <h1 className="text-[22px] pb-1 mt-6 font-semibold">
            FREE AND FAST DELIVERY
          </h1>
          <p>Free delivery for all orders over $140</p>
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center mt-5"
        initial={{ scale: 0.8, opacity: 0 }} // Start from small size and invisible
        whileInView={{ scale: 1, opacity: 1 }} // Animate to full size and visible
        transition={{ duration: 0.7 }} // Animation duration
      >
        <div className="text-center">
          <div className="flex justify-center">
            <div className="bg-black border-4 text-3xl pt-3 border-x-gray-500 text-white flex justify-center w-16 h-16 rounded-full">
              <MdHeadsetMic />
            </div>
          </div>
          <h1 className="text-[22px] pb-1 mt-6 font-semibold">
            24/7 CUSTOMER SERVICE
          </h1>
          <p>Friendly 24/7 customer support</p>
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center mt-5"
        initial={{ scale: 0.8, opacity: 0 }} // Start from small size and invisible
        whileInView={{ scale: 1, opacity: 1 }} // Animate to full size and visible
        transition={{ duration: 0.7 }} // Animation duration
      >
        <div className="text-center">
          <div className="flex justify-center">
            <div className="bg-black border-4 text-3xl pt-3 border-x-gray-500 text-white flex justify-center w-16 h-16 rounded-full">
              <FaMoneyBillTrendUp />
            </div>
          </div>
          <h1 className="text-[22px] pb-1 mt-6 font-semibold">
            MONEY BACK GUARANTEE
          </h1>
          <p>We return money within 30 days</p>
        </div>
      </motion.div>
    </div>
  );
};

export default FreeShipping;
