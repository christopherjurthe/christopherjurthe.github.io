import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Band from './Components/Band/Band';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header></Header>
      </div>
      <div className="main">
        <Band></Band>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
