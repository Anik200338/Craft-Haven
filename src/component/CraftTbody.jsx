import React from 'react';
import { Link } from 'react-router-dom';

const CraftTbody = ({ Craft, index }) => {
  const {
    Itemname,
    _id,
    price,
    rating,
    subcategory_Name,
    stockStatus,
    customization,
    processing_time,
  } = Craft;
  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <th>{index + 1}</th>
            </div>
            <div>
              <div className="font-bold">{Itemname}</div>
              <div className="text-sm opacity-50">{subcategory_Name}</div>
            </div>
          </div>
        </td>
        <td>
          {price}
          <br />
          <span className="badge badge-ghost badge-sm">{rating}</span>
        </td>
        <td>{stockStatus}</td>
        <td>{customization}</td>
        <td>{processing_time}</td>
        <th>
          <Link to={`/craft/${_id}`}>
            <button className="btn btn-ghost btn-xs font-bold">
              View Details
            </button>
          </Link>
        </th>
      </tr>
    </tbody>
  );
};

export default CraftTbody;
