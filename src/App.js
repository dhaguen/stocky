// import { useState } from 'react';
// import MainContainer from "./components/OLD_MainContainer";

import './App.css';

function App() {

  return (
    <div className="App">
      <div>
        <div className="navbar">
          <div className="item">logo</div>
          <div className="item">search</div>
          <div className="item">menu</div>
          <div className="item">message_center</div>
          <div className="item">login</div>
          <div className="item">setup</div>
        </div>

        <div className="wrapper">
          <div className="styleswitcher">Style Switcher</div>
          <div className="banner">Banner</div>
          <div className="recommanedforyou">Recommanded For You</div>
          <div className="gallery">Gallery</div>
          <div className="bottommenu">Bottom Menu</div>
        </div>
      </div>
    </div>
  );
}

export default App;
