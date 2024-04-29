import React from 'react';
import { Link } from 'react-router-dom';

const AllSubcategory = ({ Subcategory }) => {
  const { image, subcategory_Name, origins, key_elements, _id } = Subcategory;

  return (
    <Link
      to={`/Subcategory/${_id}`}
      className="card card-compact  h-[500px] bg-base-100 shadow-xl"
    >
      <figure className="h-40">
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{subcategory_Name}</h2>
        <p className="text-sm ">{origins}</p>
        <p className="">{key_elements}</p>
      </div>
    </Link>
  );
};

export default AllSubcategory;
