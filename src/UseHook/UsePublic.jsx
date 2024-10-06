import axios from "axios";

const axiosPublic = axios.create({
    baseURL : 'https://ecommerce-website-server-side2-fy6lu9yjk-foisal-uddins-projects.vercel.app'
})
const UsePublic = () => {
    return (
        axiosPublic
    );
};

export default UsePublic;