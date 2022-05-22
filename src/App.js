import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Login/Login';
import Registration from './Pages/Login/Registration';
import RequireAuth from './Pages/Login/RequireAuth';
import ToolDetails from './Pages/Home/ToolDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<Registration></Registration>}></Route>
        <Route path='purchase/:id' 
        element={<RequireAuth>
          <ToolDetails/>
        </RequireAuth>
          }>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
