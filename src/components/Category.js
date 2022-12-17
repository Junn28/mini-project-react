import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';

function Category() {
  const [category, setCategory] = useState(null);
  const URL_Category = 'https://fakestoreapi.com/products/categories';

  useEffect(() => {
    axios.get(URL_Category).then((response) => setCategory(response.data));
  }, [URL_Category]);

  if (category) {
    return (
      <div className="container mx-auto p-5">
        {category.map((item, index) => (
          <button key={index} className="bg-gray-100 border-solid border-cyan-500 rounded-md border-2 p-3 my-3 flex justify-between w-full hover:scale-105">
            <p className="text-xl font-semibold capitalize">{item}</p>
            <ChevronDoubleRightIcon className="h-6 w-6 text-blue-500" />
          </button>
        ))}
      </div>
    );
  }
  return <h1>Ini adalah halaman Product...</h1>;
}

export default Category;
