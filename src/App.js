import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { Header, Footer } from './components';
import { Home } from './pages/Home';

import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
