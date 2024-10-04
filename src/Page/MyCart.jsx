import { useEffect, useState } from "react";
import UseAxiosSecure from "../UseHook/UseAxiosSecure";
import UseCart from "../UseHook/UseCart";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = UseCart();
  const axiosSecure = UseAxiosSecure();

  const getInitialQuantities = () => {
    const storedQuantities = localStorage.getItem("quantities");
    return storedQuantities ? JSON.parse(storedQuantities) : {};
  };

  const [quantities, setQuantities] = useState(getInitialQuantities);

  const totalPrice =
    cart.length > 0
      ? cart.reduce((total, item) => {
          const itemQuantity = quantities[item._id] || 0;
          const itemPrice = parseFloat(item.price) || 0;
          return total + itemPrice * itemQuantity;
        }, 0)
      : 0;

  const deliveryCharge = 70;
  const tax = 20;

  const finalPrice = totalPrice > 0 ? totalPrice + deliveryCharge + tax : 0;

  const handleDelete = (id) => {
    axiosSecure.delete(`/carts/${id}`).then(() => {
      alert("Item successfully deleted");
      refetch();
      setQuantities((prevQuantities) => {
        const updatedQuantities = { ...prevQuantities };
        delete updatedQuantities[id];
        localStorage.setItem("quantities", JSON.stringify(updatedQuantities));
        return updatedQuantities;
      });
    });
  };

  const handleIncrement = (id) => {
    setQuantities((prevQuantities) => {
      const updatedQuantities = {
        ...prevQuantities,
        [id]: (prevQuantities[id] || 0) + 1,
      };
      if (updatedQuantities[id] > 8) updatedQuantities[id] = 8;
      localStorage.setItem("quantities", JSON.stringify(updatedQuantities));
      return updatedQuantities;
    });
  };

  const handleDecrement = (id) => {
    setQuantities((prevQuantities) => {
      const updatedQuantities = {
        ...prevQuantities,
        [id]: (prevQuantities[id] || 0) - 1,
      };
      if (updatedQuantities[id] < 0) updatedQuantities[id] = 0;
      localStorage.setItem("quantities", JSON.stringify(updatedQuantities));
      return updatedQuantities;
    });
  };

  useEffect(() => {
    const storedQuantities = localStorage.getItem("quantities");
    const parsedQuantities = storedQuantities ? JSON.parse(storedQuantities) : {};

    const updatedQuantities = { ...parsedQuantities };
    cart.forEach((item) => {
      if (!updatedQuantities[item._id]) {
        updatedQuantities[item._id] = 0;
      }
    });

    setQuantities(updatedQuantities);
    localStorage.setItem("quantities", JSON.stringify(updatedQuantities));
  }, [cart]);

  return (
    <div className="md:shadow-lg md:p-4 md:ml-4 md:px-11 py-11 md:mt-2">
      

      <div className="grid md:grid-cols-7 ">
        <div className="md:col-span-5 md:mr-6">
          {cart.map((item) => {
            const quantity = quantities[item._id] || 0;
            return (
              <div>
                <div key={item._id} className="border rounded-md p-2 m-2 md:flex md:justify-between items-center h-[120px]">
                  <div className="flex md:items-center justify-between">
                    <div className="flex items-center">
                    <img className="w-[80px]" src={item.image} alt={item.name} />
                    </div>
                    <div className="pl-3">
                      <h1 className="md:text-xl font-semibold">{item.name}</h1>
                      <h1 className=" pt-2">Price: <span className="text-red-600 ">${item.price}</span></h1>
                    </div>
                  </div>
                  <div className="flex gap-7 justify-end">
                    <div>
                      <button onClick={() => handleDecrement(item._id)} className="w-8 border border-black bg-gray-200 h-7 text-black border-none">
                        -
                      </button>
                      <input
                        className="bg-white text-center w-10 border border-slate-300"
                        type="text"
                        value={quantity}
                        readOnly
                      />
                      <button onClick={() => handleIncrement(item._id)} className="w-8 border border-black bg-gray-200 h-7 text-black border-none">
                        +
                      </button>
                    </div>
                    <button onClick={() => handleDelete(item._id)} className="bg-red-600 h-7 px-3 rounded-md text-white">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="md:col-span-2">
          <div className=" p-3 border rounded-lg mt-2 pt-5 m-2">
            <h1 className="text-xl font-semibold ">Order Summery</h1>
            <p className="pt-2 flex justify-between">
              Subtotal : <span>${totalPrice}</span>
            </p>
            <p className="pt-3 flex justify-between">
              Delivery Charge : <span>${deliveryCharge}</span>
            </p>
            <p className="pt-3 flex justify-between">
              Estimated Tax : <span>${tax}</span>
            </p>
            <p className="pt-3 flex justify-between font-semibold text-xl">
              Total: <span className="text-red-600">${finalPrice}</span>
            </p>
            <Link to="/payment">
              <button className="bg-red-600 mt-4 w-full text-white h-[40px] rounded-lg">
                Process to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
