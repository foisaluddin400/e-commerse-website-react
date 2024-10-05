import { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Autentication/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion from framer-motion

const DashboardNavbar = () => {
  const isAdmin = true; // Replace with actual admin check
  const { user } = useContext(AuthContext);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }} // Start small and invisible
      whileInView={{ scale: 1, opacity: 1 }} // Animate to full size and visible
      transition={{ duration: 0.5 }} // Animation duration
    >
      <div>
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-2">
            <div className="mt-2">
              <h1 className="bg-white md:px-5 py-6 shadow-sm">
                <div className="flex justify-center">
                  {user && user.photoURL ? (
                    <img
                      className="rounded-full w-[100px] border-blue-800 border-2"
                      src={user.photoURL}
                      alt=""
                    />
                  ) : (
                    <FaRegUserCircle className="rounded-full w-[100px] h-[100px] text-3xl text-black border-2" />
                  )}
                </div>
                <h1 className="text-center text-xl mt-3">
                  Name:
                  {user ? (
                    user.displayName
                  ) : (
                    <Link to="/login">Login</Link>
                  )}
                </h1>
              </h1>
              <div className="mt-2 md:text-start text-sm shadow-md md:flex md:flex-col space-y-2 text-center">
                {isAdmin ? (
                  <>
                    <NavLink 
                      to="/userhome"
                      className={({ isActive }) =>
                        isActive ? "p-3 border-b-2 border-red-600" : "p-2"
                      }
                    >
                      My Profile
                    </NavLink>
                    <NavLink
                      to="/payment"
                      className={({ isActive }) =>
                        isActive ? "p-3 border-b-2 border-red-600" : "p-2"
                      }
                    >
                      Payment
                    </NavLink>
                    <NavLink
                      to="/mycart"
                      className={({ isActive }) =>
                        isActive ? "p-3 border-b-2 border-red-600" : "p-2"
                      }
                    >
                      My Cart
                    </NavLink>
                    <NavLink
                      to="/wishlist"
                      className={({ isActive }) =>
                        isActive ? "p-3 border-b-2 border-red-600" : "p-2"
                      }
                    >
                      Wishlist
                    </NavLink>
                    <NavLink
                      to="/myadress"
                      className={({ isActive }) =>
                        isActive ? "p-3 border-b-2 border-red-600" : "p-2"
                      }
                    >
                      My Address
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/adminhome"
                      className={({ isActive }) =>
                        isActive ? "p-3 border-b-2 border-red-600" : "p-3"
                      }
                    >
                      Admin Home
                    </NavLink>
                    <NavLink
                      to="/adminadditems"
                      className={({ isActive }) =>
                        isActive ? "p-3 border-b-2 border-red-600" : "md:p-3"
                      }
                    >
                      Add Items
                    </NavLink>
                    <NavLink
                      to="/edititems"
                      className={({ isActive }) =>
                        isActive ? "p-3 border-b-2 border-red-600" : "md:p-3"
                      }
                    >
                      Manage Item
                    </NavLink>
                    <NavLink
                      to="/adminalluser"
                      className={({ isActive }) =>
                        isActive ? "p-3 border-b-2 border-red-600" : "md:p-3"
                      }
                    >
                      All User
                    </NavLink>
                    <NavLink
                      to="/adminorder"
                      className={({ isActive }) =>
                        isActive ? "p-3 border-b-2 border-red-600" : "md:p-3"
                      }
                    >
                      Order List
                    </NavLink>
                  </>
                )}
                <hr />
                <div className="hidden md:block">
                  <div className="flex flex-col">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "p-3 border-l-2 border-red-600" : "p-3"
                      }
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive ? "p-3 border-l-2 border-red-600" : "p-3"
                      }
                    >
                      About
                    </NavLink>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        isActive ? "p-3 border-l-2 border-red-600" : "p-3"
                      }
                    >
                      Contact
                    </NavLink>
                    <NavLink
                      to="/shop"
                      className={({ isActive }) =>
                        isActive ? "p-3 border-l-2 border-red-600" : "p-3"
                      }
                    >
                      Shop
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-10">
            <Outlet />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardNavbar;
