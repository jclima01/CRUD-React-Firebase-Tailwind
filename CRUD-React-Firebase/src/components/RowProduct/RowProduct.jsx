import React from 'react'

const RowProduct = ({id,name,price,category}) => {
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
              <button className="font-medium text-red-600 dark:text-red-500 hover:underline m-2">
                Delete
              </button>
            </td>
          </tr>
  )
}

export default RowProduct