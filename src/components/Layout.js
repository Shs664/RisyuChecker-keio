import React from 'react';
import NavigationBar from './NavigationBar'
import Footer from './Footer';
import {Outlet} from 'react-router-dom';




function Layout() {
  return (
    <div>
      <NavigationBar />

       
         <Outlet />

        
      <Footer />
    </div>
  );
}

export default Layout;