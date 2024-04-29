import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CraftTbody from './CraftTbody';

const AllArtcraft = () => {
  const crafts = useLoaderData();

  return (
    <div className="overflow-x-auto mb-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Price & Rating</th>
            <th>Stock Status</th>
            <th>Customization</th>
            <th>Processing Time</th>
          </tr>
        </thead>
        {crafts.map((craft, index) => (
          <CraftTbody key={craft.id} Craft={craft} index={index}></CraftTbody>
        ))}
      </table>
    </div>
  );
};

export default AllArtcraft;
