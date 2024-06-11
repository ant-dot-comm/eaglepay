import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { Footer2, Button } from './components';
import { ReactComponent as Logo} from './components/visuals/logo-custom.svg';
import { Landing } from './pages/Landing2';
import { About } from './pages/About';
// import Contact from './pages/Contact';

import './App.scss';

function App() {
  return (
    <Router>
      <div>
        <header className="global-container fixed w-full top-8 left-1/2 -translate-x-1/2 z-50">
          <nav className="flex justify-between items-center p-16 rounded-lg shadow-[0_2px_8px_0_rgba(0,0,0,0.1)] backdrop-blur-md bg-neutral-50/50">
              <Link to="/"><Logo height={40}/></Link>
              <div className="flex items-center gap-16">
                <Link to="/about">About</Link>
                <Button as="a" href="https://www.truckparknation.com/login" target='_blank' rel="noreferrer" color="hollow">Sign In</Button>
                <Button as="a" href="https://www.truckparknation.com/sign-up" target='_blank' rel="noreferrer"  color="hollow">Register</Button>
              </div>
          </nav>
        </header>
        
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer2 />
      </div>
    </Router>
  );
}

export default App;
