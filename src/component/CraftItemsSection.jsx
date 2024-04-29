// import { useContext, useEffect, useState } from 'react';

// import { AuthContext } from './AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import CraftALL from './CraftALL';

const CraftItemsSection = () => {
  // const { user } = useContext(AuthContext);
  // const [item, setitem] = useState([]);
  const { crafts } = useLoaderData();
  const limitedCrafts = crafts.slice(0, 6);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/mycraft/${user?.email}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setitem(data);
  //     });
  // }, [user]);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 lg:p-20"
      data-aos="fade-down-right"
    >
      {limitedCrafts.map(Craft => (
        <CraftALL key={Craft.id} Craft={Craft} />
      ))}
    </div>
  );
};

export default CraftItemsSection;
