import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Root = () => {
  return (
    <>
      <div className="h-16 mb-16">
        <Navbar></Navbar>
      </div>
      <div className="container mx-auto p-5">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Root;
