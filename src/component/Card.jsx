import React from 'react';

const Card = ({ Craft }) => {
  const { image } = Craft;
  return (
    <div className="card card-compact md:w-96 h-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{}</h2>
        <p className="text-lg ">{}</p>
        <p className="">{}</p>
        <h1 className="text-lg font-bold">{}</h1>
        <div className="card-actions justify-between">
          <button className="btn">{}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
