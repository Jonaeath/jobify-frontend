import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home/Home';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
