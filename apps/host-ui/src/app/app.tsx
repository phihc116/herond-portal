import * as React from 'react';
import NxWelcome from "./nx-welcome";
import { Link, Route, Routes } from 'react-router-dom';

const PointFrontend = React.lazy(() => import('point_frontend/Module'));

export function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/point">PointFrontend</Link></li>
        <li><Link to="/point/detail">PointFrontendDetail</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host-ui" />} />
        <Route path="/point/*" element={<PointFrontend />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
