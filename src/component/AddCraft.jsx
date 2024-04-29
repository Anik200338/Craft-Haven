import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const AddCraft = () => {
  const { user } = useContext(AuthContext);
  const handleAddCraft = event => {
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
    const email = form.email.value;
    const name = form.name.value;

    const newCraft = {
      image,
      Itemname,
      subcategory_Name,
      description,
      price,
      rating,
      customization,
      processing_time,
      stockStatus,
      email,
      name,
    };
    console.log(newCraft);
    // send data to the server
    fetch('http://localhost:5000/AddCraft', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newCraft),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'success!',
            text: 'User Added successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
    form.reset();
  };

  return (
    <div className="bg-info rounded-2xl p-24 mb-20">
      <h2 className="text-3xl font-extrabold text-center mb-5">Add Craft</h2>
      <form onSubmit={handleAddCraft}>
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
            <label className="">
              <select
                name="subcategory_Name"
                className="select select-bordered w-full"
              >
                <option value="">Select Subcategory</option>
                <option value="Landscape Painting">Landscape Painting</option>
                <option value="Portrait Drawing">Portrait Drawing</option>
                <option value="Watercolour Painting">
                  Watercolour Painting
                </option>
                <option value="Oil Painting">Oil Painting</option>
                <option value="Charcoal Sketching">Charcoal Sketching</option>
                <option value="Cartoon Drawing">Cartoon Drawing</option>
              </select>
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-bold">Short description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Short description"
                className="input input-bordered w-full"
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
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-bold">Processing_time</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="processing_time"
                placeholder="processing_time"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">StockStatus</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="stockStatus"
                placeholder="stockStatus"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-bold">User Email</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="email"
                placeholder="User Email"
                className="input input-bordered w-full"
                defaultValue={user.email}
                disabled
              />
            </label>
          </div>
        </div>
        {/* form Photo url row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">User Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="User Name"
                defaultValue={user.displayName}
                disabled
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Craft" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddCraft;
