import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart, FaRegUserCircle, FaBars } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Autentication/AuthProvider";
import UseCart from "../UseHook/UseCart";
import UseWish from "../UseHook/UseWish";

const Navbar = () => {
  const [cart] = UseCart();
  const [wishlist] = UseWish();
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isFixed, setIsFixed] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("logout");
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const menu = (
    <>
    
      <NavLink className={"p-2 "} to={"/"}>
        Home
      </NavLink>
      <NavLink className={"p-2"} to={"/about"}>
        About
      </NavLink>
      <NavLink className={"p-2"} to={"/contact"}>
        Contact
      </NavLink>
      <NavLink className={"p-2"} to={"/shop"}>
        Shop
      </NavLink>
    </>
  );

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.2) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${isFixed ? 'fixed top-0 left-0 w-full z-50 transition-all duration-300' : ''}`}>
      <div className={`bg-black p-2 text-center text-sm text-white`}>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </div>
      <div className={`py-[10px] pt-[20px] bg-white px-2 transition-all duration-300 ${isFixed ? 'shadow-xl' : 'shadow-none'} max-w-screen-2xl mx-auto`}>
        <div className="flex justify-between">
          <div>
            <div className="flex">
              <div className="lg:hidden z-20">
                <div className="drawer z-20">
                  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                  <div className="drawer-content mt-2 mr-3 ml-2">
                    <label htmlFor="my-drawer" className=" text-2xl drawer-button">
                      <FaBars />
                    </label>
                  </div>
                  <div className="drawer-side ">
                    <label
                      htmlFor="my-drawer"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    ></label>
                    <ul className="menu bg-white text-black min-h-full w-80 p-4">
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
              </h1> <hr />
                      <div className="flex flex-col mt-4">
                      {menu}
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
              <h1 className="font-bold text-3xl">laptop</h1>
            </div>
          </div>
          <div className="mt-2">
            <h1 className="hidden lg:block">{menu}</h1>
          </div>
          <div className="flex ">
            <details className="dropdown">
              <summary className="btn border-none rounded-full bg-white p-0 mr-3 hover:bg-white shadow-none">
                <div className="indicator">
                  {user && user.photoURL ? (
                    <img
                      className="rounded-full w-[40px] border-blue-800 border-2"
                      src={user.photoURL}
                      alt=""
                    />
                  ) : (
                    <FaRegUserCircle className="rounded-full w-[40px] h-[40px] text-3xl text-black border-2" />
                  )}
                </div>
              </summary>
              <ul className="menu dropdown-content bg-white z-10 w-40 shadow ">
                {user ? (
                  <>
                    
                    <NavLink to="userhome">
                      <li className="border-b border-gray-200">
                        <a>My Profile</a>
                      </li>
                    </NavLink>
                    <NavLink to="mycart">
                      <li className="border-b border-gray-200">
                        <a>My Cart</a>
                      </li>
                    </NavLink>
                    <li>
                      <button onClick={handleLogout} className="bg-green">
                        Log out
                      </button>
                    </li>
                  </>
                ) : (
                  <NavLink to="/login">
                    <li>Login</li>
                  </NavLink>
                )}
              </ul>
            </details>

            <span>
              <Link to='/wishlist'>
                <div className="indicator mt-1 mr-5">
                  <span className="indicator-item badge bg-red-600 text-white border-none">+{wishlist.length}</span>
                  <button className="rounded-full w-[38px] h-[38px] border border-black bg-white text-2xl pl-[6px]">
                    <FaRegHeart />
                  </button>
                </div>
              </Link>
            </span>
            <span>
              <Link to="/mycart">
                <div className="indicator mt-1 mr-5">
                  <span className="indicator-item badge bg-red-600 text-white border-none">
                    +{cart.length}
                  </span>
                  <button className="rounded-full w-[38px] h-[38px] border border-black bg-white text-2xl pl-[6px]">
                    <IoCartOutline />
                  </button>
                </div>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
