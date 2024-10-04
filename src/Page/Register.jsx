import { useContext, useState } from "react";
import { AuthContext } from "../Autentication/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import UsePublic from "../UseHook/UsePublic";
import { updateProfile } from "firebase/auth"; // Import updateProfile
import imglogin from "../assets/home/login1.jpg"

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState(""); // State for error messages
    const axiosPublic = UsePublic();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        setErrorMessage(""); // Reset error message on new submission
        try {
            // Create user with email and password
            const result = await createUser(data.email, data.password);
            console.log(result.user);
            
            // Update user's display name

            await updateProfile(result.user, {
                displayName: data.name // Set display name here
            });

            // Send user info to your backend
            const userInfo = {
                email: data.email,
                name: data.name, // Include name in user info
            };

            await axiosPublic.post('/users', userInfo)
                .then(res => {
                    console.log(res.data);
                })
                .catch(error => {
                    console.error(error);
                });

            navigate('/'); // Redirect on success

        } catch (error) {
            console.error(error);
            // Set custom error messages for specific Firebase errors
            
            if (error.code === "auth/email-already-in-use") {
                setErrorMessage("ইমেইলটি আগে থেকেই ব্যবহৃত হচ্ছে। অনুগ্রহ করে একটি ভিন্ন ইমেইল ব্যবহার করুন।");
            } else {
                setErrorMessage("একটি ত্রুটি ঘটেছে। অনুগ্রহ করে আবার চেষ্টা করুন।");
            }

            // Clear the error message after 2 seconds
            setTimeout(() => {
                setErrorMessage("");
            }, 2000);
        }
    };

    return (
        <div className="grid grid-cols-2">
            <div className="flex justify-center">
                <img className="w-[500px]" src={imglogin} alt="" />
            </div>
            <div>
            <div className="mt-[70px]">
            <h1 className="text-3xl mb-3 font-semibold">Login Now!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="bg-gray-100 w-[60%] p-2"
                    {...register("name", { required: "অনুগ্রহ করে আপনার নাম লিখুন" })}
                    placeholder="নাম"
                />
                {errors.name && <p>{errors.name.message}</p>} {/* Display name validation error */}

                <input
                    className="bg-gray-100 w-[60%] p-2 mt-4"
                    {...register("email", { required: "অনুগ্রহ করে আপনার ইমেইল লিখুন" })}
                    placeholder="ইমেইল"
                />
                {errors.email && <p>{errors.email.message}</p>} {/* Display email validation error */}

                <input
                    className="bg-gray-100 w-[60%] p-2 mt-4"
                    type="password"
                    {...register("password", {
                        required: "অনুগ্রহ করে আপনার পাসওয়ার্ড লিখুন",
                        minLength: {
                            value: 6,
                            message: "পাসওয়ার্ড অন্তত 6 অক্ষরের হতে হবে"
                        },
                        validate: {
                            hasUpperCase: value => /[A-Z]/.test(value) || "পাসওয়ার্ডে অন্তত একটি বড় হাতের অক্ষর থাকতে হবে",
                            hasNumber: value => /[0-9]/.test(value) || "পাসওয়ার্ডে অন্তত একটি সংখ্যা থাকতে হবে",
                            hasSpecialChar: value => /[!@#$%^&*]/.test(value) || "পাসওয়ার্ডে অন্তত একটি বিশেষ চিহ্ন থাকতে হবে"
                        }
                    })}
                    placeholder="পাসওয়ার্ড"
                />
                {errors.password && <p>{errors.password.message}</p>} {/* Display password validation error */}

                <input className="bg-red-600 text-white w-[60%] mt-4 p-2" type="submit" />
            </form>
            </div>
            {errorMessage && <p>{errorMessage}</p>} {/* Display error message */}
            <div className="py-3">
            <Link className="text-green-600 " to='/login'>Already Acount?</Link>
            </div>
            </div>
        </div>
    );
};

export default Register;
