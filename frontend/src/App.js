import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Contacts from './pages/Contacts';
import Contact from './pages/Contact';
import Index from './pages/Index';
import './styles/utilities.css'
import AddContact from './pages/AddContact';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
      <Route path='/' element={<Index/>}/>
                {/* <Route path='login' element={<Login/>}/>
                <Route path='register' element={<Register/>}/> */}
                <Route path='contacts'>
                    <Route index element={<Contacts/>}/>
                    <Route path=':id' element={<Contact/>}/> 
                    <Route path='add' element={<AddContact/>}/>
                </Route>
                <Route path='*' element={<h1>404 - Page does not exist</h1>}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
