import { useContext, useState } from "react";
import gmail from "../assets/home/gmail.png";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "../Autentication/AuthProvider";

const Footer = () => {
  const { user } = useContext(AuthContext); // AuthContext থেকে user বের করা

  const [formData, setFormData] = useState({
    name: "",
    email: user ? user.email : "", // ডিফল্ট হিসেবে ব্যবহারকারীর ইমেইল সেট করা হচ্ছে
    phone: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Submit করার আগে error reset করা

    // Client-side email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Invalid email address."); // Invalid email এর জন্য error message সেট করা
      return;
    }

    try {
      const response = await fetch("https://ecommerce-website-server-side2-fy6lu9yjk-foisal-uddins-projects.vercel.app/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.error); // Server থেকে error message সেট করা
      } else {
        // সফল হলে (যেমন, একটি সফল message দেখানো বা ফর্ম reset করা)
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: user ? user.email : "", // সফলভাবে সাবমিট করার পর ব্যবহারকারীর ইমেইল পুনরায় সেট করা
          phone: "",
          message: "",
        });
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      console.error("Error:", err);
    }
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button className="fixed bottom-[70px] z-50" onClick={() => document.getElementById('my_modal_1').showModal()}>
        <img className="w-[60px] spin-slow ml-3 mb-3" src={gmail} alt="" />
      </button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Contact Us!</h3>
          <p className="py-4">
            <form onSubmit={handleSubmit} className='bg-white'>
              <div className='grid lg:grid-cols-2 '>
                <div>
                  <label htmlFor="name">Name*</label> <br />
                  <input
                    value={formData.name}
                    onChange={handleChange}
                    className='bg-white w-full p-2 rounded-md outline-none border'
                    type="text"
                    name="name"
                    placeholder='Enter your name'
                  />
                </div>

                <div>
                  <label htmlFor="email">Email*</label> <br />
                  <input
                    value={formData.email}
                    onChange={handleChange}
                    className='bg-white w-full md:ml-1 p-2 rounded-md outline-none border'
                    type="email"
                    name="email"
                    placeholder='Enter your email'
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone">Phone*</label>
                <input
                  value={formData.phone}
                  onChange={handleChange}
                  className='bg-white w-full p-2 rounded-md outline-none border'
                  type="text"
                  name="phone"
                  placeholder='Enter Your Phone number'
                />
              </div>

              <div>
                <label htmlFor="message">Message*</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="outline-none p-2 rounded-md w-[100%] h-[100px] border bg-white"
                  placeholder='Write your message'
                ></textarea>
                <div className="flex justify-center ">
                  <button type="submit" className="bg-orange-700 text-white btn">Send a message</button>
                  {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}
                </div>
              </div>
            </form>
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="text-3xl"><RxCross2 /></button>
            </form>
          </div>
        </div>
      </dialog>

      <div className="mt-9">
        <footer className="footer bg-base-200 text-base-content p-10">
          <aside>
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current">
              <path
                d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <p>
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
