import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <Link to='/addproducts'>
      <button className="bg-transparent hover:bg-purple-700 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-700 hover:border-transparent rounded uppercase transition duration-400 cursor-pointer">
  Add Product
      </button>
      </Link>
    </div>
  );
};

export default Nav;
