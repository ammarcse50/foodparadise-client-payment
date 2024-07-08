import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex text-white ">
      <div className="w-64 min-h-full  bg-orange-500 ">
        <ul className="menu p-4">
          <li>
          
            <NavLink to={"/dashboard/userHome"}>  <FaHome></FaHome>User Home</NavLink>
          </li>

          <li>
           
            <NavLink to={"/dashboard/reservation"}> <FaCalendar></FaCalendar>Resevation</NavLink>
          </li>
          <li>
          
            <NavLink to={"/dashboard/cart"}>  <FaShoppingCart />My Cart</NavLink>
          </li>
          <li>
          
            <NavLink to={"/dashboard/review"}>  <FaAd/>Add a Review</NavLink>
          </li>
          <li>
           
            <NavLink to={"/dashboard/review"}> <FaList/>My Bookings</NavLink>
          </li>
          <div className="divider divider-neutral"></div>
          <li>
            <NavLink to={"/"}> <FaHome></FaHome> Home</NavLink>
          </li>
          <li>
            <NavLink to={"/order/coffee"}>  <FaSearch/>Menu</NavLink>
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
