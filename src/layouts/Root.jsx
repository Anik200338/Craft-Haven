import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';

const Root = () => {
  return (
    <>
      <div className="h-16 mb-16">
        <Navbar></Navbar>
      </div>
      <div className="container mx-auto p-5">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Root;
