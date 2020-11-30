import React from 'react';
import './App.css';
import {Container} from 'react-bootstrap';

import TopBar from './components/TopBar';
import Main from './components/Main';
import HexMobile from './components/HexMobile';
import HexCredit from './components/HexCredit';
import HexMoney from './components/HexMoney';
import HexPlay from './components/HexPlay';
import OtherProjects from './components/OtherProjects';
import Social from './components/Social';


function App() {

  return (
 
    <div className="App">
     <TopBar/>
     <Container fluid>
        <Main />
        <HexMobile />
        <HexCredit />
        <HexMoney/>
        <OtherProjects />
        <HexPlay />
        <Social />
      </Container>
    </div>
  );
}

export default App;
