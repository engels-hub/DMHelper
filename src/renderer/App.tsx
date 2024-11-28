import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Titlebar from './components/titlebar';
import Mobs from './components/mobs';
import Actions from './components/actions';
import DBox from './components/map';

function Main() {
  return (
    <div className="main">
      <div className="column mobs">
        <Mobs />
      </div>
      <DBox />
      <div className="column actions">
        <Actions />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Titlebar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}
