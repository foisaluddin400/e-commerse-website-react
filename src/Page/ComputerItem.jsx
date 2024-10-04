import { IoCartOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import UseAxiosSecure from "../UseHook/UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Autentication/AuthProvider";
import UseCart from "../UseHook/UseCart";

const ComputerItem = ({ computer }) => {
  const { image, price, name, _id, rating } = computer;

  const [, refetch] = UseCart();
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();

  const handleAddCart = (cart) => {
    console.log(cart);

    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSecure.post('/carts', cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          alert('Add successful!');
          refetch();
        } else {
          console.log(res.data.error);
        }
      });
    } else {
      alert('Please login to add items to the cart.');
    }
  };

  return (
    <div>
      <div className="m-2 relative">
        <div className="bg-zinc-100 p-8 h-[200px] flex items-center justify-center">
          <img className="" src={image} alt="" />
        </div>
        <div className=" top-2 absolute  right-2">
          <span>
            <div onClick={() => handleAddCart(computer)}>
              <button className="rounded-full w-[30px] h-[30px] bg-white text-[16px] pl-[7px]">
                <IoCartOutline />
              </button>
            </div>
          </span>
          <span>
            <div className="  ">
              <Link to={`/product/${_id}`}>
                <button className="rounded-full w-[30px] h-[30px] bg-white text-[19px] pl-[5px]">
                  <FaRegEye />
                </button>
              </Link>
            </div>
          </span>
        </div>
      </div>
      <h1>{name}</h1>
      <h2 className="text-red-500 font-semibold">${price}</h2>

      <Rating size="small" name="read-only" value={rating} readOnly />
    </div>
  );
};

export default ComputerItem;
