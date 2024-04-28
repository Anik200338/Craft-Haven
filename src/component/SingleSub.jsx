import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';

const SingleSub = () => {
  const { id } = useParams();
  console.log(id);

  const [craftOne, setCraftOne] = useState({});
  console.log(craftOne);
  useEffect(() => {
    fetch(`http://localhost:5000/category/${id}`)
      .then(res => res.json())
      .then(data => {
        setCraftOne(data);

        console.log(data);
      });
  }, [id]);

  const [item, setItem] = useState([]);
  console.log(item);
  useEffect(() => {
    fetch(`http://localhost:5000/subcategory/${craftOne?.subcategory_Name}`)
      .then(res => res.json())
      .then(data => {
        setItem(data);
        console.log(data);
      });
  }, [craftOne]);

  return (
    <div>
      <h2>this is single sub{item.length}</h2>
      {item.map(craft => (
        <Card key={craft.id} Craft={craft} />
      ))}
    </div>
  );
};

export default SingleSub;
