import { IoCartOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
const GamesItem = ({ game }) => {
  return (
    <div>
      <div className="m-2 relative">
        <div className="bg-zinc-100 p-8 h-[200px]  flex items-center justify-center">
          <img className="" src={game.image} alt="" />
        </div>
        <div className=" top-2 absolute  right-2">
          <span>
            <div className="  ">
              <button className=" rounded-full w-[30px] h-[30px]  bg-white text-[16px] pl-[7px]">
              <IoCartOutline />
              </button>
            </div>
          </span>
          <span>
            <div className="  ">
            
              <Link to={`/product/${game._id}`}><button className=" rounded-full w-[30px] h-[30px]  bg-white text-[19px] pl-[5px]">
                <FaRegEye />
              </button></Link>
            </div>
          </span>
        </div>
      </div>
      <h1>{game.name}</h1>
      <h2 className="text-red-500 font-semibold">${game.price}</h2>

      <Rating size="small" name="read-only" value={game.rating} readOnly />
    </div>
  );
};

export default GamesItem;
