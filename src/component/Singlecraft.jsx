import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData, useParams } from 'react-router-dom';

const Singlecraft = () => {
  const { id } = useParams();
  console.log(id);
  const [craft, setCraft] = useState({});

  useEffect(() => {
    // Set loading to true when starting to fetch data
    fetch(`https://assignment-10-server-five-delta.vercel.app/Single/${id}`)
      .then(res => res.json())
      .then(data => {
        setCraft(data);
        // Set loading to false when data is fetched
        console.log(data);
      });
  }, [id]);
  const {
    image,
    Itemname,
    stockStatus,
    processing_time,
    price,
    rating,
    customization,
    description,
    subcategory_Name,
  } = craft;
  return (
    <div className="max-w-4xl px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8  text-gray-800">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
            {Itemname}.
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
            <div>
              <img src={image} alt="" className="w-full h-96 bord" />
            </div>
          </div>
        </div>
        <div className="text-black font-bold text-xl">
          <p>{subcategory_Name}</p>
        </div>
      </article>
      <div>
        <div className="text-2xl mt-5 mb-5">{description}</div>

        <div className="space-y-7 flex flex-col justify-between items-start">
          <h4 className=" text-xl font-semibold">
            <span className="text-2xl">Customization : </span>
            {customization}
          </h4>
          <h2 className="text-xl  font-semibold">
            <span className="text-2xl">Rating : </span>
            {rating}
          </h2>
          <h2 className="text-xl font-semibold">
            <span className="text-2xl">StockStatus : </span>
            {stockStatus}
          </h2>
          <h2 className="text-xl font-semibold">
            <span className="text-2xl">Processing Time : </span>
            {processing_time}
          </h2>
          <h2 className="text-4xl ">{price}</h2>
        </div>
      </div>
    </div>
  );
};

export default Singlecraft;
