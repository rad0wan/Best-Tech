import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Purchase from './pages/Purchase/Purchase';
import Navbar from './pages/shared/Navbar'
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import RequireAuth from './pages/Login/RequireAuth';
import Blogs from './pages/Blogs/Blogs';
import NotFound from './pages/NotFound/NotFound';
import DashBoard from './pages/DashBoard/DashBoard';
import AddAReviews from './pages/DashBoard/AddAReviews';
import MyOrders from './pages/DashBoard/MyOrders';
import MyProfile from './pages/DashBoard/MyProfile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';
import Payment from './pages/DashBoard/Payment';
import AllUsers from './pages/Home/AllUsers';
import ManageOrders from './pages/DashBoard/ManageOrders';
import AddAProduct from './pages/DashBoard/AddAProduct';
import ManageProducts from './pages/DashBoard/ManageProducts';
import RequireAdmin from './pages/hooks/RequireAdmin';

function App() {
  return (
    <div className='lg:max-w-7xl mx-auto lg:px-12 px-3' >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase/:id" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path="/DashBoard" element={
          <RequireAuth>
            <DashBoard />
          </RequireAuth>
        }>
          <Route index element={<MyProfile />}></Route>
          <Route path='addAReviews' element={<AddAReviews />}></Route>
          <Route path='myOrders' element={<MyOrders />}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>
          <Route path='users' element={<RequireAdmin><AllUsers /></RequireAdmin>}></Route>
          <Route path='orders' element={<RequireAdmin><ManageOrders /></RequireAdmin>}></Route>
          <Route path='AddAProduct' element={<RequireAdmin><AddAProduct /></RequireAdmin>}></Route>
          <Route path='manageProducts' element={<RequireAdmin><ManageProducts /></RequireAdmin>}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/myPortfolio" element={<MyPortfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
