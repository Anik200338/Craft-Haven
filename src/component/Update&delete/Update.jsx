import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
  const { id } = useParams();
  console.log(id);
  const [craft, setCraft] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/AddCraft/${id}`)
      .then(res => res.json())
      .then(data => {
        setCraft(data);
        console.log(data);
      });
  }, [id]);
  // ?dsad
  const handleUpdate = () => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const Itemname = form.Itemname.value;
    const subcategory_Name = form.subcategory_Name.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time = form.processing_time.value;
    const stockStatus = form.stockStatus.value;
    const UpdateCraft = {
      image,
      Itemname,
      subcategory_Name,
      description,
      price,
      rating,
      customization,
      processing_time,
      stockStatus,
    };
    fetch(`http://localhost:5000/updateCraft/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(UpdateCraft),
    })
      .then(res => res.json())
      .then(data => {
        setCraft(data);
        // Set loading to false when data is fetched
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
    form.reset();
  };
  return (
    <div>
      <div>
        <Helmet>
          <title>Craft Haven | Update</title>
        </Helmet>
        <div className="bg-warning rounded-2xl p-20 m-20">
          <h2 className="text-3xl font-extrabold text-center mb-5">
            Update Craft
          </h2>
          <form onSubmit={handleUpdate}>
            {/* form name and quantity row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold"> Image </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="image"
                    placeholder=" image URL"
                    className="input input-bordered w-full"
                    defaultValue={craft.image}
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text font-bold"> Item name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="Itemname"
                    placeholder="Item name"
                    className="input input-bordered w-full"
                    defaultValue={craft.Itemname}
                  />
                </label>
              </div>
            </div>
            {/* form supplier row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Subcategory Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="subcategory_Name"
                    placeholder="Subcategory Name"
                    className="input input-bordered w-full"
                    defaultValue={craft.subcategory_Name}
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text font-bold">
                    Short description
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="description"
                    placeholder="Short description"
                    className="input input-bordered w-full"
                    defaultValue={craft.description}
                  />
                </label>
              </div>
            </div>
            {/* form category and details row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Price</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="price"
                    placeholder="price"
                    className="input input-bordered w-full"
                    defaultValue={craft.price}
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text font-bold">Rating</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="rating"
                    placeholder="rating"
                    className="input input-bordered w-full"
                    defaultValue={craft.rating}
                  />
                </label>
              </div>
            </div>
            {/* form category and details row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Customization</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="customization"
                    placeholder="customization"
                    className="input input-bordered w-full"
                    defaultValue={craft.customization}
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text font-bold">Processing Time</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="processing_time"
                    placeholder="processing_time"
                    className="input input-bordered w-full"
                    defaultValue={craft.processing_time}
                  />
                </label>
              </div>
            </div>
            {/* form category and details row */}
            <div className="md:flex mb-8">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">StockStatus</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="stockStatus"
                    placeholder="stockStatus"
                    className="input input-bordered w-full"
                    defaultValue={craft.stockStatus}
                  />
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Update Craft"
              className="btn btn-block"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
