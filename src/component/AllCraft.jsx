import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AllCraft = ({ Craft, handleDelete }) => {
  const { image, item_name, _id, price, rating, customization } = Craft;

  return (
    <div className="card card-compact lg:w-96 h-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{item_name}</h2>
        <p className="text-lg ">{}</p>
        <p className="">{rating}</p>
        <h1 className="text-lg font-bold">{price}</h1>
        <div className="card-actions justify-between">
          <button className="btn">{customization}</button>
          <Link to={`/Update/${_id}`}>
            <button className="btn btn-accent">U</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-accent">
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllCraft;
