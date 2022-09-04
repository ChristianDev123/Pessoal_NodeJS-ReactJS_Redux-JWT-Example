import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import RegisterPage from './pages/register'
import SecretPage from './pages/secret';
import Global  from './Styles/globalStyles';
export default function App(){
  return(
    <>
     <Global/>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/secret" element={<SecretPage/>}/>
      </Routes>
    </>
  );
};