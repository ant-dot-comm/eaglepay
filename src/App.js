import React from 'react';

import { Header, Footer } from './components';
import { Landing } from './pages/Landing';

import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
