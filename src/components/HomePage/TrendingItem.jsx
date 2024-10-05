import { FaRegHeart } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { Rating } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../UseHook/UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Autentication/AuthProvider";
import UseWish from "../../UseHook/UseWish";
import { motion } from 'framer-motion'; // Import motion

const TrendingItem = ({ item }) => {
  const [, refetch] = UseWish();
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();
  const navigate = useNavigate()
  const handleAddCart = (cart) => {
    console.log(cart);

    if (user && user.email) {
      const cartItem = {
        menuId: item._id,
        email: user.email,
        name: item.name,
        image: item.image,
        price: item.price,
      };

      axiosSecure.post('/wishlist', cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          alert('Add successful!');
          refetch();
        } else {
          console.log(res.data.error);
        }
      });
    } else {
      navigate('/login')
    }
  };

  return (
    <div>
      <motion.div
        className=""
        initial={{ opacity: 0, scale: 0.9 }} // Start small and invisible
        whileInView={{ opacity: 1, scale: 1 }} // Animate to normal size and visible
        transition={{ duration: 0.7 }} // Animation duration
      >
        <div className="bg-zinc-100 p-8 h-[200px] flex items-center">
          <img className="" src={item.image} alt={item.name} />
        </div>
        <div className="top-2 absolute right-2">
          <span>
            <div onClick={() => handleAddCart(item)} className="">
              <button className="rounded-full w-[30px] h-[30px] bg-white text-[16px] pl-[7px]">
                <FaRegHeart />
              </button>
            </div>
          </span>
          <span>
            <div className="">
              <Link to={`/product/${item._id}`}>
                <button className="rounded-full w-[30px] h-[30px] bg-white text-[19px] pl-[5px]">
                  <FaRegEye />
                </button>
              </Link>
            </div>
          </span>
        </div>
      </motion.div>
      <h1>{item.name}</h1>
      <h2 className="text-red-500 font-semibold">${item.price}</h2>
      <Rating size="small" name="read-only" value={item.rating} readOnly />
    </div>
  );
};

export default TrendingItem;
