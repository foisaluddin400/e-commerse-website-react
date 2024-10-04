import { useEffect, useState } from "react";
import UseAxiosSecure from "../UseHook/UseAxiosSecure";

import UseWish from "../UseHook/UseWish";

const WishList = () => {

    const [wishlist, refetch] = UseWish();
    const axiosSecure = UseAxiosSecure();
  
  
    const handleDelete = (id) => {
      axiosSecure.delete(`/wishlist/${id}`).then(() => {
        alert("Item successfully deleted");
        refetch();
      });
    };
  
  
  
   
  
    
    return (
        <div className="md:shadow-lg md:p-4 md:ml-4 md:px-11 py-11 md:mt-2">
     

      <div className="">
        <div className=" md:mr-6">
          {wishlist.map((item) => {
            
            return (
              <div>
                <div key={item._id} className="border p-2 m-2 flex justify-between items-center h-[120px]">
                  <div className="flex items-center">
                    <img className="w-[80px]" src={item.image} alt={item.name} />
                    <div className="pl-3">
                      <h1 className="text-xl font-semibold">{item.name}</h1>
                      <h1 className=" pt-2">Price: <span className="text-red-600 ">${item.price}</span></h1>
                    </div>
                  </div>
                  <div className="flex gap-7">
                    <button onClick={() => handleDelete(item._id)} className="bg-red-600 h-7 px-3 rounded-md text-white">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
    );
};

export default WishList;