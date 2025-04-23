// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import NxWelcome from "./nx-welcome";
import { Route, Routes } from "react-router-dom"
export function App() {
  return (
    <Routes>
      <Route index element={<NxWelcome title="point_frontend" />} />
      <Route path="detail" element={<NxWelcome title="point_frontend_detail" />} />
    </Routes>
  );
}

export default App;


