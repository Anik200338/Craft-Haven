import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Members = () => {
  return (
    <div className="text-center container mx-auto">
      <Fade direction="down">
        <h2 className="text-center font-bold text-5xl mt-32 text-info ">
          Members
        </h2>
        <p className=" text-xl mt-5">
          we are more than a company,it is a solid & professionals team.
        </p>
      </Fade>
      <div
        className="grid grid-cols-1  lg:grid-cols-3 gap-10 mb-20 lg:p-20 mt-10"
        data-aos="fade-right"
      >
        <div className="card lg:w-96 h-80 bg-base-100 shadow-xl">
          <figure>
            <div className="avatar">
              <div className="w-32 rounded-full">
                <img src="https://i.ibb.co/pygyFB5/jurica-koletic-7-YVZYZe-ITc8-unsplash.jpg" />
              </div>
            </div>
          </figure>
          <div className="">
            <h2 className="card-title justify-center">lana clark</h2>
            <p className="text-center">Art & Craft </p>
            <div className="flex flex-col items-center mt-10">
              <span>adgkagd@company.com</span>
              <span>+8902748270478</span>
              <span>http://www.cpmpany.com</span>
            </div>
          </div>
        </div>
        <div className="card lg:w-96  h-80 bg-base-100 shadow-xl">
          <figure>
            <div className="avatar">
              <div className="w-32 rounded-full">
                <img src="https://i.ibb.co/JmyzzFQ/matheus-ferrero-W7b3e-DUb-2-I-unsplash-1.jpg" />
              </div>
            </div>
          </figure>
          <div className="">
            <h2 className="card-title justify-center">emmy doe</h2>
            <p className="text-center">Art & Craft</p>
            <div className="flex flex-col items-center mt-10">
              <span>adgkagd@company.com</span>
              <span>+8902748270478</span>
              <span>http://www.cpmpany.com</span>
            </div>
          </div>
        </div>
        <div className="card lg:w-96 h-80 bg-base-100 shadow-xl">
          <figure>
            <div className="avatar">
              <div className="w-32 rounded-full">
                <img src="https://i.ibb.co/9swbHhc/podmatch-Upi-F461-EAHU-unsplash.jpg" />
              </div>
            </div>
          </figure>
          <div className="">
            <h2 className="card-title justify-center">john smith</h2>
            <p className="text-center">Art & Craft</p>
            <div className="flex flex-col items-center mt-10">
              <span>adgkagd@company.com</span>
              <span>+8902748270478</span>
              <span>http://www.cpmpany.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
