import React, { useState } from 'react';

// styles
import './App.css'

// components
import Header from './components/header';
import Sidebar from './components/sidebar';
import MainContent from './components/mainContent';

function App() {
  const [showMenu, setShowMenu] = useState(true);

  const handleMenu = () => {
    setShowMenu(prev => !prev);
    console.log(showMenu);
  };

  return (
    <>
      <Header handleMenu={handleMenu} />
      <div className="dashboard">
        <Sidebar showMenu={showMenu} />
        <MainContent showMenu={showMenu} />
      </div>
    </>
  );
}

export default App;
