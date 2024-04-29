import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ Craft }) => {
  const {
    image,
    Itemname,
    stockStatus,
    _id,
    price,
    rating,
    customization,
    subcategory_Name,

    description,

    processing_time,
  } = Craft;
  return (
    <div className="card card-compact  h-[500px] bg-base-100 shadow-2xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{Itemname}</h2>
        <p className="text-lg font-semibold">{subcategory_Name}</p>
        <p className="text-sm font-semibold">{description}</p>
        <h1 className="text-lg font-semibold">{price}</h1>
        <h1 className="text-xl font-bold ">{processing_time}</h1>
        <h1 className="text-xl font-bold text-gray-400">{stockStatus}</h1>
        <div className="card-actions justify-between">
          <button className="btn bg-info">{customization}</button>
          <button className="btn bg-info">{rating}</button>
          <Link to={`/craft/${_id}`}>
            <button className="btn btn-accent">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
