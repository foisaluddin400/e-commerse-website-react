import { useContext, useState } from "react"; 
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Autentication/AuthProvider";
import imglogin from "../assets/home/login1.jpg";
import google from "../assets/home/google.png";
import { motion } from "framer-motion"; // Import motion

const Login = () => {
    const { signInUser, googleCreateUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState(""); 
    const [redirectToReferrer, setRedirectToReferrer] = useState(false); // State to handle redirection

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const onSubmit = async (data) => {
        setErrorMessage(""); 
        try {
            const result = await signInUser(data.email, data.password);
            console.log(result.user);
            setRedirectToReferrer(true); // Set redirection state to true
        } catch (error) {
            console.error(error);
            setErrorMessage("Invalid email or password."); 
            setTimeout(() => {
                setErrorMessage("");
            }, 2000);
        }
    };

    const handleGoogle = async () => {
        try {
            const result = await googleCreateUser();
            console.log(result.user);
            setRedirectToReferrer(true); // Set redirection state to true
        } catch (error) {
            console.error(error);
            setErrorMessage("Google login failed."); 
        }
    };

    if (redirectToReferrer) {
        return <Navigate to={from} replace />; // Navigate to the intended route
    }

    const animationProps = {
        initial: { scale: 0.8, opacity: 0 }, // Start small and invisible
        animate: { scale: 1, opacity: 1 }, // Animate to full size and visible
        transition: { duration: 0.5 }, // Animation duration
    };

    return (
        <div className="md:w-[400px] md:m-auto bg-white shadow-lg m-3 p-4 md:mt-[120px] pb-11 pt-11 md:mb-[120px] rounded-xl mt-11 mb-11">
            {/* Image with animation */}
            

            {/* Login form with animation */}
            <motion.div
                {...animationProps}
                className=""
            >
                <div>
                    <h1 className="text-3xl mb-3 font-semibold">Login Now!</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className="bg-gray-100 w-[100%] p-3"
                            {...register("email", { required: "Please enter your email." })}
                            placeholder="Email"
                        />
                        {errors.email && <p className="text-red-600">{errors.email.message}</p>} {/* Display email validation error */} 
                        <br />

                        <input
                            className="bg-gray-100 w-[100%] p-3 mt-4"
                            type="password"
                            {...register("password", { required: "Please enter your password." })}
                            placeholder="Password"
                        />
                        {errors.password && <p className="text-red-600">{errors.password.message}</p>} {/* Display password validation error */}
                        <br />

                        <input className="bg-red-600 text-white w-[100%] mt-4 p-3" type="submit" />
                    </form>
                    {errorMessage && <p className="text-red-600">{errorMessage}</p>} {/* Display error message */}
                    <div className="py-3">
                        <Link className="text-green-600" to='/register'>Create a new Account</Link>
                    </div>
                    <div>
                        <button onClick={handleGoogle} className=" border w-[100%] flex justify-center text-white p-2">
                            <img className="w-[30px]" src={google} alt="" />
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
