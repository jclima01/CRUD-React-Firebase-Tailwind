import React from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate} from "react-router-dom"

const Nav = () => {

  const auth = getAuth();
  const navigate = useNavigate()
const logout = () => {

signOut(auth).then(() => {
  console.log('Logout completed')
  navigate('/')
}).catch((error) => {
  console.log(error)
});
}

  return (
    <div>
      <Link to='/addproducts'>
      <button className="bg-transparent hover:bg-purple-700 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-700 hover:border-transparent rounded uppercase transition duration-400 cursor-pointer">
  Add Product
</button>
      </Link>

      <button onClick={logout} className="bg-transparent hover:bg-purple-700 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-700 hover:border-transparent rounded uppercase transition duration-400 cursor-pointer">
  Logout
</button>
    </div>
  );
};

export default Nav;
