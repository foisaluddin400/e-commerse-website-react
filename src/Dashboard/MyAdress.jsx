import { useContext, useEffect } from "react";
import { AuthContext } from "../Autentication/AuthProvider";
import { useForm } from "react-hook-form";
import UseAxiosSecure from "../UseHook/UseAxiosSecure";
import { Link } from "react-router-dom";
import Useadress from "../UseHook/Useadress";
import { FaHome } from "react-icons/fa";
const MyAdress = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, setValue } = useForm();
  const axiosSecure = UseAxiosSecure();
  const [adress] = Useadress();

  // Check if the address exists
  const hasAddress = adress.length > 0;

  useEffect(() => {
    if (hasAddress) {
      const userAddress = adress[0]; 
      setValue("name", userAddress.name || "");
      setValue("adress", userAddress.adress || "");
      setValue("city", userAddress.city || "");
      setValue("phone", userAddress.phone || "");
      setValue("country", userAddress.country || "");
    }
  }, [adress, setValue, hasAddress]);

  const onSubmit = (data) => {
    if (!user) {
      alert("please Log In");
      return;
    }

    const userInfo = {
      name: data.name,
      adress: data.adress,
      city: data.city,
      phone: data.phone,
      country: data.country,
      user: user.email,
    };

    axiosSecure.post("/adress", userInfo)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="grid md:grid-cols-10 md:shadow-lg p-4 md:ml-4 md:px-11 py-11 md:mt-2">

      <div className="md:col-span-7">
      <div className="flex md:pt-6 pb-3 md:pr-[250px]">
          <h1 className="md:text-[100px] text-[60px] text-emerald-600">
            <FaHome />
          </h1>
          <div className="pl-4 mdpt-3">
            <h1 className="md:text-3xl text-xl font-semibold">Personal Information</h1>
            <p className="md:text-md text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Exercitationem soluta alias, quod quos nisi fuga illo consectetur
              voluptatum ex dolor?
            </p>
          </div>
        </div>

      <form className="mt-7" onSubmit={handleSubmit(onSubmit)}>
      <label className="">Name:</label>
        <input
          className="bg-white border p-3 rounded-md w-full mb-4"
          {...register("name")}
          placeholder="Your Name"
          disabled={hasAddress} // Disable if address exists
        />
        <label className="">Adress:</label>
        <input
          className="bg-white border p-3 rounded-md w-full mb-4"
          {...register("adress")}
          placeholder="Your Address"
          disabled={hasAddress}
        />
        <label className="">City:</label>
        <input
          className="bg-white border p-3 rounded-md w-full mb-4"
          {...register("city")}
          placeholder="Your City"
          disabled={hasAddress}
        />
        <label className="">Phone:</label>
        <input
          className="bg-white border p-3 rounded-md w-full mb-4"
          {...register("phone")}
          placeholder="Your Phone Number"
          disabled={hasAddress}
        />
        <label className="">Country:</label>
        <input
          className="bg-white border p-3 rounded-md w-full mb-4"
          {...register("country")}
          placeholder="Your Country"
          disabled={hasAddress}
        />
        
        <input className="bg-red-600 mt-5 text-white px-6 py-3" type="submit" disabled={hasAddress} /> 
      </form>

      </div>
      <div className="md:col-span-3 md:ml-4 md:mt-[188px] mt-9">
      <div className=" border bg-white rounded-md p-4">
        <h1 className="text-3xl">My Address:</h1>
        {adress.map((adres) => (
          <div className="py-2" key={adres._id}>
            <h1>Name : {adres.name}</h1>
            <h1 className="py-1">Phone: {adres.phone}</h1>
            <h1>Adress: {adres.adress}</h1>
            <h1 className="py-1">City: {adres.city}</h1>
            <h1>Country: {adres.country}</h1>
          </div>
        ))}
        <Link className="bg-sky-600 text-white px-5 py-2" to='/userhome'><button>Edit</button></Link>
      </div>
      </div>
    </div>
  );
};

export default MyAdress;
