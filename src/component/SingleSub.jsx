import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';

const SingleSub = () => {
  const { id } = useParams();
  console.log(id);

  const [craftOne, setCraftOne] = useState({});
  console.log(craftOne);
  useEffect(() => {
    fetch(`https://assignment-10-server-five-delta.vercel.app/category/${id}`)
      .then(res => res.json())
      .then(data => {
        setCraftOne(data);

        console.log(data);
      });
  }, [id]);

  const [item, setItem] = useState([]);
  console.log(item);
  useEffect(() => {
    fetch(
      `https://assignment-10-server-five-delta.vercel.app/subcategory/${craftOne?.subcategory_Name}`
    )
      .then(res => res.json())
      .then(data => {
        setItem(data);
        console.log(data);
      });
  }, [craftOne]);

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 lg:p-20"
      data-aos="fade-down-right"
    >
      {item.map(craft => (
        <Card key={craft.id} Craft={craft} />
      ))}
    </div>
  );
};

export default SingleSub;
