import { Navigate, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import Accessibility from './Pages/Accessibility';
import Responsive from './Pages/Responsive';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/accessibility" element={<Accessibility />} />
    <Route path="/responsive" element={<Responsive />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AppRouter;
