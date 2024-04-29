import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AllCraft = ({ Craft, handleDelete }) => {
  const { image, _id, price, rating, customization, Itemname, stockStatus } =
    Craft;

  return (
    <div className="card card-compact  h-96 bg-base-100 shadow-2xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{Itemname}</h2>
        <h1 className="text-lg font-semibold">{price}</h1>
        <h1 className="text-xl font-bold text-gray-400">{stockStatus}</h1>
        <div className="card-actions justify-between">
          <button className="btn bg-info">
            Customization : {customization}
          </button>
          <button className="btn bg-info">{rating}</button>
        </div>
        <div className="card-actions justify-between">
          <Link to={`/Update/${_id}`}>
            <button className="btn btn-warning">Update</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-error">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllCraft;
