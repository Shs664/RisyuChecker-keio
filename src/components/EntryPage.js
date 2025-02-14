
import React from 'react';
import NavigationBar from './components/NavigationBar';
import Uploader from './components/Uploader';
import Footer from './components/Footer';
import UploaderHeader from './components/UploaderHeader'

function EntryPage() {
    return (

    <div className="App app-wrapper">
      
      <NavigationBar/>
      <UploaderHeader/>
      <Uploader></Uploader>
     
      <Footer/>

    </div>

    )
  }
  
  export default EntryPage;