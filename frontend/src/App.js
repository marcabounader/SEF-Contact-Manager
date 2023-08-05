import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Contacts from './pages/Contacts';
import Contact from './pages/Contact';
import Index from './pages/Index';
import './styles/utilities.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Index/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='register' element={<Register/>}/>
                <Route path='contacts'>
                    <Route index element={<Contacts/>}/>
                    <Route path=':id' element={<Contact/>}/> 
                </Route>
                <Route path='*' element={<h1>404 - Page does not exist</h1>}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
