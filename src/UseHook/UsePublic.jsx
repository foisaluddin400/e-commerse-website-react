import axios from "axios";

const axiosPublic = axios.create({
    baseURL : 'https://ecommerce-website-server-side2.vercel.app'
})
const UsePublic = () => {
    return (
        axiosPublic
    );
};

export default UsePublic;