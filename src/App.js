import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavBar from './components/AppNavBar';
import FTStatusList from './components/FTStatusList';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const showDeleteIcons = urlParams.get('showDelete') === 'true';

  return (
    <div className='App'>
      <AppNavBar />
      <FTStatusList showDeleteIcons={showDeleteIcons} />
    </div>
  );
}

export default App;
