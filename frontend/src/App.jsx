
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import NavBar from './components/navBar';
import Home from './pages/home';
import MyCart from './pages/myCart';
import Buy from './pages/buy';
import MyOrders from './pages/myOrders';
import AdminLogin from './pages/adminPages/adminLogin';
import AdminDashboard from './pages/adminPages/adminDashboard';
import SignUp from './pages/signUp';
import Login from './pages/login';



function App() {
  
 
  
  return (
    <>
     <Router> 
         <Routes>
          
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/buy" element={<Buy></Buy>}></Route>
          <Route path="/myCart" element={<MyCart></MyCart>}></Route>
          <Route path="/myOrders" element={<MyOrders></MyOrders>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        
        
          <Route path='/admin' element={<AdminLogin></AdminLogin>}></Route>
          <Route path='/adminDashboard' element={<AdminDashboard></AdminDashboard>}></Route>
        </Routes>
     </Router>
    </>
  )
}

export default App
