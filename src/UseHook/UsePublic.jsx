import axios from "axios";

const axiosPublic = axios.create({
    baseURL : 'http://localhost:5000'
})
const UsePublic = () => {
    return (
        axiosPublic
    );
};

export default UsePublic;