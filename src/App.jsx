import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import Problem from './pages/Problem';
import Solution from './pages/Solution';
import Prototype from './pages/Prototype';
import Research from './pages/Research';
import Team from './pages/Team';
import './App.css';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/imersao" element={<Problem />} />
          <Route path="/solucao" element={<Solution />} />
          <Route path="/prototipo" element={<Prototype />} />
          <Route path="/pesquisa" element={<Research />} />
          <Route path="/equipe" element={<Team />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
