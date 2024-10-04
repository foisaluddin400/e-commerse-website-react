import { GrDeliver } from "react-icons/gr";
import { MdHeadsetMic } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
const FreeShipping = () => {
  return (
    <div className="grid md:grid-cols-3 mt-[100px] mb-[70px]">
      <div className="flex justify-center mt-5">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="bg-black border-4 text-3xl pt-3 border-x-gray-500 text-white flex justify-center w-16 h-16 rounded-full">
              <GrDeliver className="" />
            </div>
          </div>
          <h1 className="text-[22px] pb-1 mt-6 font-semibold">
            FREE AND FAST DELIVERY
          </h1>
          <p>Free delivery for all orders over $140</p>
        </div>
      </div>

      <div className="flex justify-center mt-5">
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
      </div>


      <div className="flex justify-center mt-5">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="bg-black border-4 text-3xl pt-3 border-x-gray-500 text-white flex justify-center w-16 h-16 rounded-full">
            <FaMoneyBillTrendUp />
            </div>
          </div>
          <h1 className="text-[22px] pb-1 mt-6 font-semibold">
          MONEY BACK GUARANTEE
          </h1>
          <p>We reurn money within 30 days</p>
        </div>
      </div>

    </div>
  );
};

export default FreeShipping;
