import { useContext, useState } from "react";
import { Rating } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { GrDeliver } from "react-icons/gr";
import { MdHeadsetMic } from "react-icons/md";
import UseCart from "../UseHook/UseCart";
import { AuthContext } from "../Autentication/AuthProvider";
import UseAxiosSecure from "../UseHook/UseAxiosSecure";

const ProductDetails = () => {
  const product = useLoaderData(); // This will be the single product object from the loader
  const [quantity, setQuantity] = useState(1); // Initialize quantity with 1

  const increaseQuantity = () => {
    if (quantity < 8) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const [, refetch] = UseCart();
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();

  const handleAddCart = (cart) => {
    console.log(cart);

    if (user && user.email) {
      const cartItem = {
        menuId: product._id,
        email: user.email,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: quantity, // Adding quantity to the cart item
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
    <div className="mt-11 mb-[80px]">
      <div className="md:flex gap-5">
        <div>
          <div className="bg-gray-200 md:w-[600px] md:h-[600px] flex justify-center items-center">
            <img className="md:w-[300px]" src={product.image} alt={product.name} />
          </div>
        </div>
        <div className="mt-6 m-3">
          <div className="text-2xl font-semibold pb-3">{product.name}</div>
          <Rating size="small" name="read-only" value={product.rating} readOnly />
          <div className="pt-3">{product.recipe}</div>
          <div className="font-bold py-3 text-red-600 text-2xl">${product.price}</div>
          <div className="mt-3">
            <button onClick={decreaseQuantity} className="w-8 border border-black bg-gray-200 h-7 text-black border-none">
              -
            </button>

            <input
              className="bg-white text-center w-10 border border-slate-300"
              type="text"
              value={quantity}
              readOnly
            />

            <button onClick={increaseQuantity} className="w-8 border border-black bg-gray-200 h-7 text-black border-none">
              +
            </button>
            <br />
            <button className="bg-green-800 rounded-sm text-white px-9 py-2 mt-4">
              Buy Now
            </button>
            <button onClick={() => handleAddCart(product)} className="bg-orange-600 rounded-sm text-white px-9 py-2 mt-4 ml-2">
              Add To Cart
            </button>
          </div>
          <div className="mt-5">
            <div className=" flex border px-5 py-8">
              <div className="flex justify-center items-center">
                <div className=" text-3xl border-x-gray-500 flex justify-center  ">
                  <GrDeliver className="" />
                </div>
              </div>
              <div className="ml-3">
                <h1 className="text-[16px] pb-1 font-semibold">FREE AND FAST DELIVERY</h1>
                <p>Free delivery for all orders over $140</p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className=" flex border px-5 py-8">
              <div className="flex justify-center items-center">
                <div className=" text-3xl border-x-gray-500 flex justify-center  ">
                  <MdHeadsetMic />
                </div>
              </div>
              <div className="ml-3">
                <h1 className="text-[16px] pb-1 font-semibold">24/7 CUSTOMER SERVICE</h1>
                <p>Friendly 24/7 customer support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
