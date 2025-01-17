
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Breweries from './pages/Breweries';
import HomePage from './pages/Homepage';
import Documentation from './pages/Documentation';
import NavigationBar from './components/NavigationBar';
import About from './pages/About';
import KeyAuth from './pages/KeyAuth';
import Search from './pages/Search';

const App = () => {
  return (
    <>
    <Router>
      <div className="min-h-screen">
        <NavigationBar />
          <div className="container mx-auto">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/breweries" element={<Breweries />} />
                <Route path="/documentation" element={<Documentation />} />
                <Route path="/about" element={<About />} />
                <Route path="/key" element={<KeyAuth />} />
                <Route path="/search" element={<Search />} />
            </Routes>
          </div>
      </div>
    </Router>
    </>
  );
};

export default App;
