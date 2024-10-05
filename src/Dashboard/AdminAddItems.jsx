import { useForm } from "react-hook-form";
import UseAxiosSecure from "../UseHook/UseAxiosSecure";
import UsePublic from "../UseHook/UsePublic";
import Swal from "sweetalert2"; // Make sure to import Swal
import { motion } from "framer-motion"; // Import motion from framer-motion

const image_hosting_key = "890ca6da48f661d37c06be20025ffbf9";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AdminAddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = UsePublic();
  const axiosSecure = UseAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    const imgFile = { image: data.image[0] }; // Image upload to imgbb
    const res = await axiosPublic.post(image_hosting_api, imgFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(res.data);
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        price: parseFloat(data.price),
        category: data.category,
        recipe: data.recipe,
        rating: data.rating,
        image: res.data.data.display_url,
      };

      await axiosSecure.post("/menu", menuItem).then((res) => {
        if (res.data.modifiedCount > 0) {
          // Assuming 'refetch()' is defined elsewhere
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(res.data);
      });
    }
  };

  return (
    <div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }} // Start small and invisible
        animate={{ scale: 1, opacity: 1 }} // Animate to full size and visible
        transition={{ duration: 0.5 }} // Animation duration
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-lg m-3 py-20 px-10 space-y-5"
        >
          <div>
            <label htmlFor="name">Product Title</label>
            <input
              className="bg-white w-full p-2 rounded-md outline-none border"
              {...register("name")}
              placeholder="Enter Your Product Title"
            />
          </div>
          <div className="grid lg:grid-cols-3 lg:gap-10">
            <div>
              <label htmlFor="Price">Price</label> <br />
              <input
                className="bg-white w-full p-2 rounded-md outline-none border"
                {...register("price")}
                placeholder="Enter Price"
              />
            </div>
            <div>
              <label htmlFor="Name">Category*</label> <br />
              <select
                className="bg-white w-full p-2 rounded-md outline-none border"
                {...register("category")}
              >
                <option value="computer">Computer</option>
                <option value="gaming">Gaming</option>
                <option value="camera">Camera</option>
                <option value="popular">Popular</option>
              </select>
            </div>
            <div>
              <label htmlFor="Price">Rating</label> <br />
              <input
                className="bg-white w-full p-2 rounded-md outline-none border"
                {...register("rating")}
                placeholder="Enter Rating"
              />
            </div>
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <textarea
              className="outline-none p-2 rounded-md w-[100%] h-[100px] bg-white"
              {...register("recipe")}
              placeholder="Product Description"
            ></textarea>
            <div className="mt-5">
              <label className="custom-file-input">
                Choose File
                <input type="file" {...register("image")} />
              </label>
            </div>

            <div className="mt-8">
              <input
                className="bg-red-600 border-none text-white btn"
                type="submit"
                value="Add Items"
              />
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminAddItems;
