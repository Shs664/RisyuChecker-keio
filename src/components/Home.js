import React from 'react';
import NavigationBar from './NavigationBar';
import Uploader from './Uploader';
import Footer from './Footer';
import UploaderHeader from './UploaderHeader'

//ホーム画面


function Home() {


    return (
      <div className="App app-wrapper">

        <UploaderHeader/>
        <Uploader/>

      </div>
    );
  }
  
  export default Home;
  