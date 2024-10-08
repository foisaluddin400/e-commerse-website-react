import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Autentication/AuthProvider";
import { FaHome } from "react-icons/fa";
import Useadress from "../UseHook/Useadress";
import UseAxiosSecure from "../UseHook/UseAxiosSecure";
import { motion } from "framer-motion"; // Import motion from framer-motion

const UserHome = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();
  const [adress] = Useadress(); // Use Useadress to fetch address data
  const [inputValues, setInputValues] = useState({
    name: "",
    adress: "",
    city: "",
    phone: "",
    country: "",
  });

  useEffect(() => {
    if (adress.length > 0) {
      const userAddress = adress[0]; // Assuming the user can have only one address
      setInputValues({
        name: userAddress.name || "",
        adress: userAddress.adress || "",
        city: userAddress.city || "",
        phone: userAddress.phone || "",
        country: userAddress.country || "",
      });
    }
  }, [adress]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    const addressId = adress[0]._id; 
    axiosSecure
      .put(`/adress/${addressId}`, inputValues)
      .then((res) => {
        console.log(res.data);
        alert("Address updated successfully!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="md:shadow-lg p-4 md:ml-4 md:px-11 py-11 mt-2">
      <motion.div
        className=""
        initial={{ scale: 0.8, opacity: 0 }} 
        whileInView={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 0.5 }} 
      >
        <div className="flex md:pt-6 pb-3 md:pr-[250px]">
          <h1 className="md:text-[100px] text-[60px] text-emerald-600">
            <FaHome />
          </h1>
          <div className="pl-4 md:pt-3">
            <h1 className="md:text-3xl text-xl font-semibold">Personal Information</h1>
            <p className="md:text-md text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Exercitationem soluta alias, quod quos nisi fuga illo consectetur
              voluptatum ex dolor?
            </p>
          </div>
        </div>
        <div className="">
          <input
            className="bg-white border p-3 rounded-md w-full mt-4"
            name="name"
            value={inputValues.name}
            onChange={handleChange}
            placeholder="Name" 
          />
          <input
            className="bg-white border p-3 rounded-md w-full mt-4"
            name="adress"
            value={inputValues.adress}
            onChange={handleChange}
            placeholder="Address"
          />
          <input
            className="bg-white border p-3 rounded-md w-full mt-4"
            name="city"
            value={inputValues.city}
            onChange={handleChange}
            placeholder="City" 
          />
          <input
            className="bg-white border p-3 rounded-md w-full mt-4"
            name="phone"
            value={inputValues.phone}
            onChange={handleChange}
            placeholder="Phone" 
          />
          <input
            className="bg-white border p-3 rounded-md w-full mt-4"
            name="country"
            value={inputValues.country}
            onChange={handleChange}
            placeholder="Country" 
          />
          <button
            className="bg-red-600 mt-5 text-white p-3"
            onClick={handleUpdate}
          >
            Update Address
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default UserHome;
