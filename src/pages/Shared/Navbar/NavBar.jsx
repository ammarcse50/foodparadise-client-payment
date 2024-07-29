import { NavLink } from "react-router-dom";
import logo from "/images/logo/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart]= useCart();

  const handleLogOut = () => {
    logOut().then(() => {
      Swal.fire("Logged Out User!");
    });
  };
  const navNavLinks = (
    <>
      <NavLink>
        <li>
          <a>HOME</a>
        </li>
      </NavLink>
      <NavLink>
        <li>
          <a>CONTACT US</a>
        </li>
      </NavLink>
      <NavLink>
        <li>
          <a>DASHBOARD</a>
        </li>
      </NavLink>
      <NavLink to={"/menu"}>
        <li>
          <a>OUR MENU</a>
        </li>
      </NavLink>
      <NavLink to={"/orders"}>
        <li>
          <a>Orders</a>
        </li>
      </NavLink>
      <NavLink to={'/dashboard/cart'}>
        <li>
          <button className="">
            <FaShoppingCart />

            <div className="badge badge-secondary">{cart.length}</div>
          </button>
        </li>
      </NavLink>
      {user ? (
        <>
          {" "}
          <span className="mt-2">{user?.displayName} </span>
          <NavLink className="m-2" onClick={handleLogOut}>
            LogOut
          </NavLink>
        </>
      ) : (
        <>
          {" "}
          <NavLink className="m-2" to={"/login"}>
            <li>
              <a>Login</a>
            </li>
          </NavLink>{" "}
        </>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl   bg-black ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm text-white font-bold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navNavLinks}
          </ul>
        </div>
        <img src={logo} className="w-20 rounded-full " alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  text-white font-bold px-1">
          {navNavLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavBar;
