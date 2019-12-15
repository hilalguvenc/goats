import React from 'react';
import { Home } from './containers/home';
import './style/App.css';
import { NavBar } from './containers/navbar';

const App = () => {

  return (
    <>
      <NavBar />
      <Home />
    </>
  );
}

export default App;