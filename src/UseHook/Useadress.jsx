import { useEffect, useState } from "react";
import UseAxiosSecure from "./UseAxiosSecure"; // Assuming this is the hook for making secure Axios requests
import { useContext } from "react";
import { AuthContext } from "../Autentication/AuthProvider";

const Useadress = () => {
  const { user } = useContext(AuthContext);
  const [adress, setAdress] = useState([]);
  const axiosSecure = UseAxiosSecure(); // Use the secure Axios hook

  useEffect(() => {
    const fetchAddress = async () => {
      if (user) {
        try {
          const response = await axiosSecure.get(`/adress?email=${user.email}`); // Fetch address based on user email
          setAdress(response.data); // Update state with fetched address
        } catch (error) {
          console.error("Error fetching address:", error);
        }
      }
    };

    fetchAddress();
  }, [user, axiosSecure]); // Dependency array to refetch if user changes

  return [adress, setAdress]; // Return the address and setAdress function
};

export default Useadress;
