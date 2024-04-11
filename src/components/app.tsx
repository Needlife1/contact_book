import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '@/public/enums/enums.js';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path={AppRoute.ROOT} />
    </Routes>
  );
};
