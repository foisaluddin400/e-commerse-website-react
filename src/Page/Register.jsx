import { useContext, useState } from "react";
import { AuthContext } from "../Autentication/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import UsePublic from "../UseHook/UsePublic";
import { updateProfile } from "firebase/auth"; 
import imglogin from "../assets/home/login1.jpg";
import { motion } from "framer-motion"; // Import motion

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState(""); 
    const axiosPublic = UsePublic();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        setErrorMessage(""); 
        try {
            const result = await createUser(data.email, data.password);
            await updateProfile(result.user, { displayName: data.name });
            const userInfo = { email: data.email, name: data.name };
            await axiosPublic.post('/users', userInfo);
            navigate('/'); 
        } catch (error) {
            console.error(error);
            if (error.code === "auth/email-already-in-use") {
                setErrorMessage("The email is already in use. Please use a different email.");
            } else {
                setErrorMessage("An error occurred. Please try again.");
            }
            setTimeout(() => {
                setErrorMessage("");
            }, 2000);
        }
    };

    const animationProps = {
        initial: { scale: 0.8, opacity: 0 }, // Start small and invisible
        animate: { scale: 1, opacity: 1 }, // Animate to full size and visible
        transition: { duration: 0.5 }, // Animation duration
    };

    return (
        <div className=" md:w-[400px] md:m-auto  bg-white shadow-lg m-3 p-4 md:mt-[120px] pb-11 pt-11 md:mb-[120px] rounded-xl mt-11 mb-11">
            {/* Image with animation */}
            

            {/* Registration form with animation */}
            <motion.div
                {...animationProps}
            >
                <div className="">
                    <h1 className="text-3xl mb-3  font-semibold">Register Now!</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className="bg-gray-100 w-[100%] p-2"
                            {...register("name", { required: "Please enter your name" })}
                            placeholder="Name"
                        />
                        {errors.name && <p className="text-red-600">{errors.name.message}</p>} 

                        <input
                            className="bg-gray-100 w-[100%] p-3 mt-4"
                            {...register("email", { required: "Please enter your email" })}
                            placeholder="Email"
                        />
                        {errors.email && <p className="text-red-600">{errors.email.message}</p>} 

                        <input
                            className="bg-gray-100 w-[100%] p-3 mt-4"
                            type="password"
                            {...register("password", {
                                required: "Please enter your password",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                                },
                                validate: {
                                    hasUpperCase: value => /[A-Z]/.test(value) || "Password must contain at least one uppercase letter",
                                    hasNumber: value => /[0-9]/.test(value) || "Password must contain at least one number",
                                    hasSpecialChar: value => /[!@#$%^&*]/.test(value) || "Password must contain at least one special character"
                                }
                            })}
                            placeholder="Password"
                        />
                        {errors.password && <p className="text-red-600">{errors.password.message}</p>} 

                        <input className="bg-red-600 text-white w-[100%] mt-4 p-3" type="submit" />
                    </form>
                </div>
                {errorMessage && <p className="text-red-600">{errorMessage}</p>} 
                <div className="py-3">
                    <Link className="text-green-600" to='/login'>Already have an account?</Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Register;
