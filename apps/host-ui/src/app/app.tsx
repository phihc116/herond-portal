import * as React from 'react';
import NxWelcome from "./nx-welcome";
import { Link, Route, Routes } from 'react-router-dom';

const PointFrontend = React.lazy(() => import('point-frontend/Module'));


export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li><Link to="/">Home</Link></li>
<li><Link to="/point-frontend">PointFrontend</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host-ui"/>} />
<Route path="/point-frontend" element={<PointFrontend />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
