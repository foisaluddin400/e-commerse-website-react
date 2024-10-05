import React, { useContext } from 'react';
import UseCart from '../UseHook/UseCart';
import { AuthContext } from '../Autentication/AuthProvider';
import UseAxiosSecure from '../UseHook/UseAxiosSecure';
import { Rating } from '@mui/material';
import { IoCartOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion

const OurShopItem = ({ item }) => {
    const { image, price, name, _id, rating } = item;

    const [, refetch] = UseCart();
    const { user } = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const navigate = useNavigate(); // Use navigate to redirect users

    const handleAddCart = (cart) => {
        console.log(cart);
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
            };
            axiosSecure.post('/carts', cartItem).then((res) => {
                console.log(res.data);
                if (res.data.insertedId) {
                    alert('success');
                    refetch();
                }
            });
        } else {
            // Redirect to the login page and pass the current location as state
            navigate('/login'); // Change this path to your shop page path
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }} // Start from small and invisible
            whileInView={{ opacity: 1, scale: 1 }} // Animate to normal size and visible
            transition={{ duration: 0.7 }} // Animation duration
            className="m-3 relative"
        >
            <div className="bg-zinc-100 p-8 h-[250px] flex items-center justify-center">
                <img className="w-[180px]" src={image} alt={name} />
            </div>
            <div className="top-2 absolute right-2">
                <span>
                    <div onClick={() => handleAddCart(item)}>
                        <button className="rounded-full w-[30px] h-[30px] bg-white text-[16px] pl-[7px]">
                            <IoCartOutline />
                        </button>
                    </div>
                </span>
                <span>
                    <div>
                        <Link to={`/product/${_id}`}>
                            <button className="rounded-full w-[30px] h-[30px] bg-white text-[19px] pl-[5px]">
                                <FaRegEye />
                            </button>
                        </Link>
                    </div>
                </span>
            </div>
            <div className='pl-4'>
                <h1>{name}</h1>
                <Rating size="small" name="read-only" value={rating} readOnly />
                <h2 className="text-red-500 font-semibold">${price}</h2>
            </div>
        </motion.div>
    );
};

export default OurShopItem;
