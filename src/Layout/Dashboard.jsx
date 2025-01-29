import {FaHome, FaShoppingCart, FaUser}  from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

import { Outlet, NavLink } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-96 h-screen bg-orange-400 flex flex-col gap-5">
        <li className="flex justify-center items-center gap-3">
          <FaHome className="text-white"></FaHome>
          <NavLink className="text-white text-2xl" to="/">Home</NavLink>
        </li>
        <li className="flex justify-center items-center gap-3">
          <FaUser className="text-white"></FaUser>
          <NavLink className="text-white text-2xl" to="userProfile">profile</NavLink>
        </li>
        <li className="flex justify-center items-center gap-3">
          <FaShoppingCart className="text-white"></FaShoppingCart>
          <NavLink className="text-white text-2xl" to="cart">Cart</NavLink>
        </li>
        <li className="flex justify-center items-center gap-3">
        <IoLogOut className="text-white"  />
          <NavLink className="text-white text-2xl" to="cart">Logout</NavLink>
        </li>
        <li className="flex justify-center items-center gap-3">
          <NavLink className="text-white text-2xl" to="toDo">ToDo</NavLink>
        </li>
      </div> 
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;