import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Titlebar from './components/titlebar';
import Mobs from './components/Mobs';

function Main() {
  return (
    <div className="main">
      <div className="column mobs">
        <Mobs />
      </div>
      <div className="column map">MAP</div>
      <div className="column actions">ACTION LIST</div>
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
