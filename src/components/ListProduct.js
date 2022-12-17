import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ListProduct() {
  const [products, setProducts] = useState({
    loading: false,
    data: null,
  });
  const URL_API = 'https://fakestoreapi.com/products';

  useEffect(() => {
    setProducts({
      loading: true,
      data: null,
    });
    axios.get(URL_API).then((response) =>
      setProducts({
        loading: false,
        data: response.data,
      })
    );
  }, [URL_API]);

  if (products.loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  if (products.data) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">List Product</h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.data.map((product) => (
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img src={product.image} alt={product.title} className="h-full w-full lg:h-full lg:w-full" />
                </div>
                <div className="mt-4">
                  <h3 className="text-sm text-gray-700">
                    <p>{product.title}</p>
                  </h3>
                  <p className="text-lg font-medium text-gray-900">${product.price}</p>
                </div>
                <Link to={`product/${product.id}`}>
                  <button className="bg-cyan-500 rounded-md p-2 w-full text-md font-medium text-white my-2 hover:bg-white hover:text-slate-700 hover:border-solid hover:border-2 hover:border-cyan-600 ">View Product</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ListProduct;
