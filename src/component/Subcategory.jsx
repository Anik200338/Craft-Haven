import { useLoaderData } from 'react-router-dom';

import AllSubcategory from './AllSubcategory';

const Subcategory = () => {
  const { Subcategorys } = useLoaderData();

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20 lg:p-20"
      data-aos="fade-down-right"
    >
      {Subcategorys.map(Subcategory => (
        <AllSubcategory key={Subcategory.id} Subcategory={Subcategory} />
      ))}
    </div>
  );
};

export default Subcategory;
