import React from 'react';

function Productcard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex justify-center flex-col items-center text-center m-5 pt-5">
      <img src={product.image} alt={product.title} className=" w-36 h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{product.title}</h2>
        <p className="text-gray-700 mb-2">${product.price}</p>
        <div className="flex justify-center ">
          <span className="text-yellow-500">★</span>
          <span className="ml-1">{product.rating?.rate || 'N/A'}</span>
          <span className="ml-2 text-gray-600">({product.rating?.count || 0})</span>
        </div>
      </div>
    </div>
  );
}

export default Productcard;

