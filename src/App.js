import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header, Footer } from './components';
import { Landing } from './pages/Landing';

import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
