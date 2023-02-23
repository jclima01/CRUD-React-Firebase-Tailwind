import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/actions";
import RowProduct from "../RowProduct/RowProduct";

const TableContainer = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products)
    console.log(products)
    useEffect(() => {
        dispatch(getProducts())
    },[])
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
         {products?.map(product => {
          return <RowProduct 
          key={product.id} 
          id={product.id}
          name={product.name}
          category={product.category}
          price={product.price}
          /> 
         })}
          
        </tbody>
      </table>
    </div>
  );
};

export default TableContainer;
