import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensilSpoon,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = true;

  return (
    <div className="flex text-white ">
      <div className="w-64 min-h-full  bg-orange-500 ">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
       
              <li>
                <NavLink to={"/dashboard/adminHome"}>
             
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addItems"}>
             
                  <FaUtensilSpoon></FaUtensilSpoon>Add Item
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageItems"}>
               
                  <FaList />
                  Manage Item
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/bookings"}>
                
                  <FaAd />
                  Manage Bookings
                </NavLink>
              </li>
              <li >
                <NavLink  to={"/dashboard/allUsers"}>
                 
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
             
              <li>
                <NavLink to={"/dashboard/userHome"}>
                 
                  <FaHome></FaHome>User Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/reservation"}>
                  {" "}
                  <FaCalendar></FaCalendar>Resevation
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/cart"}>
                  {" "}
                  <FaShoppingCart />
                  My Cart
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/review"}>
                  {" "}
                  <FaAd />
                  Add a Review
                </NavLink>
              </li>
              <li  >
                <NavLink  to={"/dashboard/review"}>
                  {" "}
                  <FaList />
                  My Bookings
                </NavLink>
              </li>
            </>
          )}
          {/* shared  content */}
          <div className="divider divider-neutral"></div>
          <li>
            <NavLink to={"/"}>
              {" "}
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/coffee"}>
              {" "}
              <FaSearch />
              Menu
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="p-8 flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
