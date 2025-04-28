import { Route, Routes } from 'react-router-dom';
import NxWelcome from './nx-welcome';

export function PointFrontendApp() {
  return (
    <Routes>
      <Route index element={<NxWelcome title="point_frontend" />} />
      <Route path="detail" element={<NxWelcome title="point_frontend_detail" />} />
    </Routes>
  );
}

export default PointFrontendApp;
