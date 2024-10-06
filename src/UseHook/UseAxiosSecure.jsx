import axios from "axios";


const axiosSecure = axios.create({
    baseURL : 'https://ecommerce-website-server-side2.vercel.app'
})

const UseAxiosSecure = () => {
    return (
       axiosSecure
    );
};

export default UseAxiosSecure;