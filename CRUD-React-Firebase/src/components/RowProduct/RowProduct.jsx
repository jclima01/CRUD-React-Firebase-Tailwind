import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../redux/actions/actions'

const RowProduct = ({id,name,price,category}) => {
  const dispatch = useDispatch()

  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {name}
            </th>
            <td className="px-6 py-4">{category}</td>
            <td className="px-6 py-4">${price}</td>
            <td className="px-6 py-4">
              <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit
              </button>
              <button className="font-medium text-red-600 dark:text-red-500 hover:underline m-2"
              onClick={()=>dispatch(deleteProduct(id))}>
                Delete
              </button>
            </td>
          </tr>
  )
}

export default RowProduct