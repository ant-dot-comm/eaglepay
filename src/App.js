import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Footer2, Header } from './components';
import { Landing, Capabilities, Contact, UseCases } from './pages';
// import Contact from './pages/Contact';

import './App.scss';

const App = () => {
  return (
    <Router>
      <>
        <Header/>
        
        <Routes>
          <Route path="/eaglepay" element={<Landing />} />
          <Route path="/eaglepay/capabilities" element={<Capabilities />} />
          <Route path="/eaglepay/use-cases" element={<UseCases />} />
          <Route path="/eaglepay/contact" element={<Contact />} />
        </Routes>
        
        <Footer2 />
      </>
    </Router>
  );
}

export default App;
