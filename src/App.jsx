import './Global.css';
import { Router } from './routes/Router';
import {AuthContext, AuthProvider} from './contexts/Auth'; 
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <div className='container'> 
    <ToastContainer autoClose={5000} theme="colored" /> 
    <Router />
    </div>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App
