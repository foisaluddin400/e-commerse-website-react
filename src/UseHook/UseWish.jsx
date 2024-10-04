import { useContext } from "react";
import UseAxiosSecure from "./UseAxiosSecure";
import { AuthContext } from "../Autentication/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const UseWish = () => {
    const axiosSecure = UseAxiosSecure();
    const{user} = useContext(AuthContext);

    const {refetch, data: wishlist = []} = useQuery({
        queryKey:['wish',user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/wishlist?email=${user.email}`)
            return res.data;
        }
    })
    return [wishlist,refetch]
};

export default UseWish;