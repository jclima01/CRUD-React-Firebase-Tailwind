import { Route, Routes, useLocation } from "react-router-dom";
import AddProductForm from "./components/AddProductForm/AddProductForm";
import Nav from "./components/Nav/Nav";
import TableContainer from "./components/TableContainer/TableContainer";
import Login from "./pages/login";
import Register from "./pages/register";



function App() {
  const location = useLocation();
  return (
    <div className="App">
      
      {location.pathname === "/home"  && <Nav />}
       
      <Routes>
        <Route index  path="/home" element={<TableContainer />} />
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/addproducts" element={<AddProductForm />} />
        <Route exact path="/editproduct/:id" element={<AddProductForm />} />
      </Routes>
    </div>
  );
}

export default App;
