import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, replace, useLocation } from "react-router-dom";
import { AuthContext } from "../Autentication/AuthProvider";
import imglogin from "../assets/home/login1.jpg"
import google from "../assets/home/google.png"

const Login = () => {
    const { signInUser,googleCreateUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState(""); // State to store error messages

    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const onSubmit = async (data) => {
        setErrorMessage(""); // Reset error message on new submission
        try {
            const result = await signInUser(data.email, data.password);
            console.log(result.user);
            Navigate(from, {replace: true})
            // You may want to redirect the user or show a success message here
        } catch (error) {
            console.error(error);
            // Set a generic error message for login failure
            setErrorMessage("Invalid email or password."); // Customize this message based on your requirements
            
            // Reset the error message after 2 seconds
            setTimeout(() => {
                setErrorMessage("");
            }, 2000);
        }
    };

    const handleGoogle = async () => {
        try {
            const result = await googleCreateUser();
            console.log(result.user);
            Navigate(from, {replace: true}); // Redirect after successful login
        } catch (error) {
            console.error(error);
            setErrorMessage("Google login failed."); // Optional error message
        }
    };
    


    return (
        <div className="grid grid-cols-2">
            <div className="flex justify-center">
                <img className="w-[500px]" src={imglogin} alt="" />
            </div>
            <div className="mt-[70px]">
                <div>
                <h1 className="text-3xl mb-3 font-semibold">Login Now!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="bg-gray-100 w-[60%] p-2"
                    {...register("email", { required: "Please enter your email." })}
                    placeholder="Email"
                />
                {errors.email && <p>{errors.email.message}</p>} {/* Display email validation error */} <br />

                <input
                     className="bg-gray-100 w-[60%] p-2 mt-4"
                    type="password"
                    {...register("password", { required: "Please enter your password." })}
                    placeholder="Password"
                />
                {errors.password && <p>{errors.password.message}</p>} {/* Display password validation error */}
<br />
                <input className="bg-red-600 text-white w-[60%] mt-4 p-2" type="submit" />
            </form>
            {errorMessage && <p>{errorMessage}</p>} {/* Display error message */}
            <div className="py-3">
            <Link className="text-green-600 " to='/register'>Create a new Account</Link>
            </div>
            
            <div className="">
                <button onClick={handleGoogle} className="shadow-md w-[200px] flex justify-center rounded-md text-white p-2"><img className="w-[30px]" src={google} alt="" /></button>
            </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
