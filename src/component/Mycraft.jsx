import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider/AuthProvider';

import AllCraft from './AllCraft';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const Mycraft = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [filterValue, setFilterValue] = useState(''); // State for filter value
  const [control, setcontrol] = useState(false);

  useEffect(() => {
    fetch(
      `https://assignment-10-server-five-delta.vercel.app/craft/${user?.email}`
    )
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
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-10-server-five-delta.vercel.app/delete/${id}`,
          {
            method: 'DELETE',
          }
        )
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your card has been deleted.', 'success');
              setcontrol(!control);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="text-center mb-5">
        <Helmet>
          <title>Craft Haven | My Item</title>
        </Helmet>
        {/* Dropdown menu for filtering */}
        <select
          className="bg-info h-10 rounded-xl font-bold pl-2 "
          value={filterValue}
          onChange={handleFilterChange}
        >
          <option className="font-bold" value="">
            All Crafts
          </option>
          <option className="font-bold" value="yes">
            Customized
          </option>
          <option className="font-bold" value="no">
            Not Customized
          </option>
        </select>
      </div>

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
