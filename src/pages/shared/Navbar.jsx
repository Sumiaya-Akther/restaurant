import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useCart from "../../hooks/useCart";



const Navbar = () => {
  const [cart] = useCart()
  const {user, logOut} = useContext(AuthContext)
  console.log(user)
  const handleLogOut = () =>{
   logOut()
  }
    const navLink = 
    <div className="flex md:flex-row flex-col gap-5 uppercase text-black md:text-white">  
      <Link to="/">Home</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/ourMenu">Our Menu</Link>
      <Link to="/ourShop">Our Shop</Link>
      {
        user?
        <Link to="/dashboard">Dashboard</Link>
        :
        <></>
      }
      <Link to="/dashboard/cart">
          <FaShoppingCart className="text-2xl"></FaShoppingCart>      
          <div className="badge badge-secondary absolute top-0 mt-2 ml-3">+{cart.length}</div>
      </Link>
      
      {
        user ?
        <button onClick={handleLogOut} className="pb-1">LOGOUT</button>
        :
        <Link to="/login">Login</Link>
      }
      
      
    </div>
  return (
    <div className="bg-black bg-opacity-30 fixed z-10 w-full">
      <div className="navbar text-white max-w-7xl mx-auto">
        
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
     {navLink}
      </ul>
    </div>
    <Link to="" className=" text-xl">
      <h1 className="text-white">Seven Star <br /> <span className="text-xs">Restaurant</span></h1>
    </Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLink}
    </ul>
  </div>
</div>
    </div>
  );
};

export default Navbar;