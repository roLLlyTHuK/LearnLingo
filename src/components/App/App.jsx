import { Route, Routes } from 'react-router-dom';
import { AppWrapper } from './App.styled';
import SharedLayout from '../SharedLayout/SharedLayout';
import HomePage from '../../pages/HomePage/HomePage';
import TeachersPage from '../../pages/TeachersPage/TeachersPage';
import PrivateRoute from '../../routes/PrivateRoute';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="teachers" element={<TeachersPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="favorites" element={<FavoritesPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
