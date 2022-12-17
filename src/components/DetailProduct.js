import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DetailProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({
    loading: false,
    data: null,
  });
  const URL_Product = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    setProduct({
      loading: true,
      data: null,
    });
    axios.get(URL_Product).then((response) =>
      setProduct({
        loading: false,
        data: response.data,
      })
    );
  }, [URL_Product]);

  if (product.loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  if (product.data) {
    return (
      <div className="container w-4/5 bg-white rounded-md drop-shadow-lg mx-auto my-4 p-4 grid grid-cols-1 lg:grid-cols-2 mx-auto h-auto">
        <img src={product.data.image} alt={product.data.title} className="mx-auto h-80" />
        <div className="p-3">
          <p className="text-xl font-medium text-slate-700">{product.data.title}</p>
          <p className="text-sm text-slate-700 py-2 border-b-2 border-t-2 border-gray-100">{product.data.description}</p>
          <p className="text-lg font-semibold text-slate-700">${product.data.price}</p>
          <button className="bg-cyan-500 rounded-md p-2 w-1/2 lg:w-2/5 text-md font-medium text-white my-2 hover:bg-white hover:text-slate-700 hover:border-solid hover:border-2 hover:border-cyan-600">Buy Now</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container w-4/5 bg-white rounded-md drop-shadow-lg mx-auto my-4 p-4 mx-auto h-auto">
      <p className="text-xl font-medium text-center text-slate-700">Maaf, produk tidak ditemukan...</p>
    </div>
  );
}

export default DetailProduct;
