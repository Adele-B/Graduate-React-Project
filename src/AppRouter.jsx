import { Navigate, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AppRouter;
