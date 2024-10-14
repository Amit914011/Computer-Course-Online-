import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleCourse() {
    const tableData = [
        {
          image: 'https://via.placeholder.com/50',  // Replace with actual image URLs
          language: 'English',
          discount: '20%',
          courseTitle: 'React for Beginners',
          regularPrice: '₹5000',
          salePrice: '₹4000',
        },
        {
          image: 'https://via.placeholder.com/50', 
          language: 'Hindi',
          discount: '10%',
          courseTitle: 'Advanced JavaScript',
          regularPrice: '₹7000',
          salePrice: '₹6300',
        },
        // Add more course data as needed
      ];
      
  return (
    <>
    <div>
      <h1 className='w-[200px] bg-gray-500 rounded-lg mt-3 text-center text-xl uppercase ml-2  py-2 px-5 text-white'>Single Course</h1>
        <div className='w-full flex items-center justify-center'>
        <Link to='/admin/singlecourseform' className='w-[250px] bg-green-500 rounded-lg mt-3 text-center text-xl uppercase   py-2 px-5 mx-auto text-white'>Add New Course</Link>
        </div>
    </div>
    <div className="overflow-x-auto mt-5">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Language</th>
            <th className="px-4 py-2">Discount</th>
            <th className="px-4 py-2">Course Title</th>
            <th className="px-4 py-2">Regular Price</th>
            <th className="px-4 py-2">Sale Price</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-500 text-white' : 'bg-slate-900 text-white'}>
              <td className="px-4 py-2">
                <img src={row.image} alt={row.courseTitle} className="h-12 w-12 object-cover"/>
              </td>
              <td className="px-4 py-2">{row.language}</td>
              <td className="px-4 py-2">{row.discount}</td>
              <td className="px-4 py-2">{row.courseTitle}</td>
              <td className="px-4 py-2">{row.regularPrice}</td>
              <td className="px-4 py-2">{row.salePrice}</td>
              <td className="px-4 py-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded mr-2">Delete</button>
                <button className="bg-green-500 text-white px-2 py-1 rounded mr-2">View</button>
                <button className="bg-yellow-500 text-white px-2 py-1 rounded">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}
