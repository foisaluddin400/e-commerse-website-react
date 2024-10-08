import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import UseAxiosSecure from "../UseHook/UseAxiosSecure";
import Swal from "sweetalert2";
import UsePublic from "../UseHook/UsePublic";
import { motion } from "framer-motion"; // Import motion from framer-motion

const image_hosting_key = "890ca6da48f661d37c06be20025ffbf9";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddminMenuUpdate = () => {
    const loader = useLoaderData();
    const { name, category, recipe, price, _id } = loader;
    const { register, handleSubmit } = useForm();
    const axiosPublic = UsePublic();
    const axiosSecure = UseAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);
        const imgFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imgFile, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        console.log(res.data);
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                price: parseFloat(data.price),
                category: data.category,
                recipe: data.recipe,
                image: res.data.data.display_url,
            };
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "আপনার কাজ সংরক্ষণ করা হয়েছে",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        }
    };

    return (
        <div>
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }} // Start small and invisible
                animate={{ scale: 1, opacity: 1 }} // Animate to full size and visible
                transition={{ duration: 0.5 }} // Animation duration
            >
                <form onSubmit={handleSubmit(onSubmit)} className="shadow-lg m-3 py-20 px-10 space-y-5 ">
                    <div>
                        <label htmlFor="name">পণ্য শিরোনাম</label>
                        <input
                            className="bg-white w-full p-2 rounded-md outline-none border "
                            defaultValue={name}
                            {...register("name")}
                        />
                    </div>
                    <div className="grid lg:grid-cols-2 lg:gap-10">
                        <div>
                            <label htmlFor="Price">মূল্য</label>
                            <input
                                className="bg-white w-full p-2 rounded-md outline-none border "
                                defaultValue={price}
                                {...register("price")}
                            />
                        </div>
                        <div>
                            <label htmlFor="Name">শ্রেণী*</label>
                            <select
                                className="bg-white w-full p-2 rounded-md outline-none border "
                                defaultValue={category}
                                {...register("category")}
                            >
                                <option value="computer">Computer</option>
                                <option value="gaming">Gaming</option>
                                <option value="camera">Camera</option>
                                <option value="popular">Popular</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="recipe">বিবরণ</label>
                        <textarea
                            className="outline-none p-2 rounded-md w-[100%] h-[100px] bg-white"
                            defaultValue={recipe}
                            {...register("recipe")}
                        ></textarea>

                        <div className="mt-5">
                            <label className="custom-file-input">
                                Choose File
                                <input
                                    type="file"
                                    {...register("image")}
                                />
                            </label>
                        </div>
                        <div className="mt-8">
                            <input className="bg-red-600 border-none text-white btn" type="submit" value='আইটেম আপডেট করুন' />
                        </div>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default AddminMenuUpdate;
