import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Singlecraft = () => {
  const { id } = useParams();
  console.log(id);
  const [craft, setCraft] = useState({});

  useEffect(() => {
    // Set loading to true when starting to fetch data
    fetch(`http://localhost:5000/Single/${id}`)
      .then(res => res.json())
      .then(data => {
        setCraft(data);
        // Set loading to false when data is fetched
        console.log(data);
      });
  }, [id]);

  return (
    <div>
      <h2>dada{craft.price}</h2>
    </div>
  );
};

export default Singlecraft;
