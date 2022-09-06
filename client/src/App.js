import { Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import LandingPage from "./Pages/LandingPage/LandingPage";
import StudentLoginPage from './Pages/StudentLoginPage/StudentLoginPage';
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<LandingPage />}  />
        <Route path="Login" element={<StudentLoginPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
