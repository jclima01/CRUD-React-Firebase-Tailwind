import { Route, Routes, useLocation } from "react-router-dom";
import AddProductForm from "./components/AddProductForm/AddProductForm";
import Nav from "./components/Nav/Nav";
import TableContainer from "./components/TableContainer/TableContainer";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/addproducts" && <Nav />}
      <Routes>
        <Route path="/" element={<TableContainer />} />
        <Route path="/addproducts" element={<AddProductForm />} />
        <Route path="/editproduct/:id" element={<AddProductForm />} />
      </Routes>
    </div>
  );
}

export default App;
