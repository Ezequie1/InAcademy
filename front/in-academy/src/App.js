import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PathRouter } from './Router';

function App() {
  return (
    <BrowserRouter>
      <PathRouter/>
    </BrowserRouter>
  );
}

export default App;
