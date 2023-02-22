import React, { useState } from "react";
import { Link } from "react-router-dom";
import { validation } from "../../Validation/validation";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/actions";

const AddProductForm = ({ onAdd }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    password: "",
    category: "",
  });


  const handleInputChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validation({
        ...newProduct,
        [e.target.name]: e.target.value,
      })
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newProduct);
  };
  return (
    <div>
      <Link to="/">
        <button className="bg-transparent hover:bg-purple-700 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-700 hover:border-transparent rounded uppercase transition duration-400 cursor-pointer">
          Regresar al Home
        </button>
      </Link>
      <div className="flex flex-col content-center h-screen w-full justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col  justify-between self-center h-1/3 text-violet-100 p-2 rounded-xl bg-purple-700 bg-opacity-40"
        >
          <div className="self-center">
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Product Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={newProduct.name}
                onChange={handleInputChange}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Category
              </label>
              <input
                type="text"
                name="category"
                id="category"
                value={newProduct.category}
                onChange={handleInputChange}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                min="0"
                step="0.01"
                value={newProduct.price}
                onChange={handleInputChange}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
