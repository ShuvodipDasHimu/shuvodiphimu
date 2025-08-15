import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className='w-full md:max-w-4/5 md:mx-auto'>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

<Navbar></Navbar>
export default MainLayout;<Outlet></Outlet>