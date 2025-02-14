
import React from 'react';
import NavigationBar from './NavigationBar';
import Uploader from './Uploader';
import Footer from './Footer';
import UploaderHeader from './UploaderHeader'

//ホーム画面


function MainPage() {


    return (
      
        
        <div className="App app-wrapper">
        
        
        <NavigationBar/>
        <UploaderHeader/>
        <Uploader/>
      
        <Footer/>
  
      </div>

      
      
    );
  }
  
  export default MainPage;
  