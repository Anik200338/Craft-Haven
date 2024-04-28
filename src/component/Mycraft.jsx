import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider/AuthProvider';

import AllCraft from './AllCraft';

const Mycraft = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [filterValue, setFilterValue] = useState(''); // State for filter value
  const [control, setcontrol] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/craft/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, [user, control]);

  const handleFilterChange = event => {
    setFilterValue(event.target.value);
  };

  const filteredItems = items.filter(craft => {
    // Filter crafts based on customization value
    const lowercaseFilterValue = filterValue.toLowerCase();
    const lowercaseCustomization = craft.customization.toLowerCase();
    return (
      lowercaseFilterValue === '' ||
      lowercaseCustomization === lowercaseFilterValue
    );
  });
  const handleDelete = id => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          setcontrol(!control);
        }
      });
  };
  return (
    <div>
      {/* Dropdown menu for filtering */}
      <select value={filterValue} onChange={handleFilterChange}>
        <option value="">All Crafts</option>
        <option value="yes">Customized</option>
        <option value="no">Not Customized</option>
      </select>

      {/* Render filtered items */}
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20 lg:p-20"
        data-aos="fade-down-right"
      >
        {filteredItems.map(craft => (
          <AllCraft key={craft.id} Craft={craft} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Mycraft;
