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
import Myorders from './Pages/Dashboard/Myorders';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Blogs from './Pages/Blogs/Blogs';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import NotFound from './Pages/NotFound/NotFound';
import Users from './Pages/Dashboard/Users';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProduct from './Pages/Dashboard/ManageProduct';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<Registration></Registration>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='purchase/:id' 
        element={<RequireAuth>
          <ToolDetails/>
        </RequireAuth>
          }>
        </Route>
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<Myorders></Myorders>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="addproduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="manageproduct" element={<ManageProduct></ManageProduct>}></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
