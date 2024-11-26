import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function Main() {
  //change code here
  return (
    <div className="main">
      <div className="column mobs">MOB LIST</div>
      <div className="column map">MAP</div>
      <div className="column actions">ACTION LIST</div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}
