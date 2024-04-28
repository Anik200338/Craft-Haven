import React from 'react';
import { Link } from 'react-router-dom';

const AllSubcategory = ({ Subcategory }) => {
  const { image, subcategory_Name, origins, key_elements, _id } = Subcategory;

  return (
    <Link
      to={`/Subcategory/${_id}`}
      className="card card-compact lg:w-96 h-96 bg-base-100 shadow-xl"
    >
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{subcategory_Name}</h2>
        <p className="text-lg ">{origins}</p>
        <p className="">{key_elements}</p>
        <div className="card-actions justify-between">
          <button className="btn">view</button>
        </div>
      </div>
    </Link>
  );
};

export default AllSubcategory;
