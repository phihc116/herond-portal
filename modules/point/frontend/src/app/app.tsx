import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<NxWelcome title="point_frontend" />} />
        <Route path="detail" element={<NxWelcome title="point_frontend_detail" />} />
      </Routes>
    </Router>
  );
}

export default App;
