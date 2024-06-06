import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Header, Footer } from './components';
import Home from './pages/Home';

import './App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
