import axios from "axios";


const axiosSecure = axios.create({
    baseURL : 'https://ecommerce-website-server-side2-fy6lu9yjk-foisal-uddins-projects.vercel.app'
})

const UseAxiosSecure = () => {
    return (
       axiosSecure
    );
};

export default UseAxiosSecure;