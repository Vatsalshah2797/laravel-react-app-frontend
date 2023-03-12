//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import UserList from './pages/UserList';
import UserCreate from './pages/UserCreate';
import UserEdit from './pages/UserEdit';
import UserView from './pages/UserView';

function App() {
  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <div className='navbar-nav mr-auto'>
          <li className='navbar-item'>
            <Link to={"/"} className='nav-link'>User List</Link>
          </li>
          <li className='navbar-item'>
            <Link to={"/create"} className='nav-link'>Create</Link>
          </li>
        </div>
      </nav>
      <div className='container'>
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/create' element={<UserCreate />} />
          <Route path='/edit/:id' element={<UserEdit />} />
          <Route path='/view/:id' element={<UserView />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
