import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Breweries from './components/Breweries';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/breweries" element={<Breweries />} />
      </Routes>
    </Router>
  );
};

export default App;
