import { Link } from 'react-router-dom';

const CraftALL = ({ Craft }) => {
  const { image, Itemname, stockStatus, _id, price, rating, customization } =
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

export default CraftALL;
