
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import Home from './pages/home';
import MyCart from './pages/myCart';
import Buy from './pages/buy';
import MyOrders from './pages/myOrders';
import AdminLogin from './pages/adminPages/adminLogin';
import AdminDashboard from './pages/adminPages/adminDashboard';
import SignUp from './pages/signUp';
import Login from './pages/login';
import Layout from './components/Layout/Layout';
import NotFound from './pages/404NotFound';
import Categories from './pages/Categories';
import BrandStore from './pages/BrandStore';
import ProductPage from './pages/ProductPage';
import Laptop from './pages/categories/Laptop';
import CMobile from './pages/categories/CMobile';
import Tablet from './pages/categories/Tablet';
import TV from './pages/categories/TV';
import Wm from './pages/categories/Wm';
import Ac from './pages/categories/Ac';
import Ref from './pages/categories/Ref';




function App() {
  
 
  
  return (
    <>
     <Router> 
         <Routes>
           <Route path='/' element={<Layout></Layout>}>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="*" element={<NotFound></NotFound>} />
            <Route path="/buy" element={<Buy></Buy>}></Route>
            <Route path="/myCart" element={<MyCart></MyCart>}></Route>
            <Route path="/myOrders" element={<MyOrders></MyOrders>}></Route>
            <Route path='/categories'element={<Categories></Categories>} ></Route>
            <Route path='/brandStore'element={<BrandStore></BrandStore>} ></Route>
            <Route path='/productPage'element={<ProductPage></ProductPage>} ></Route>

            <Route path='/categories/mobile'element={<CMobile/>} ></Route>
            <Route path='/categories/laptop'element={<Laptop/>} ></Route>
            <Route path='/categories/tablet'element={<Tablet/>} ></Route>
            <Route path='/categories/tv'element={<TV/>} ></Route>
            <Route path='/categories/wm'element={<Wm/>} ></Route>
            <Route path='/categories/ac'element={<Ac/>} ></Route>
            <Route path='/categories/ref'element={<Ref/>} ></Route>

            <Route path="/signup" element={<SignUp></SignUp>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
           </Route>




        
        
          <Route path='/admin' element={<AdminLogin></AdminLogin>}></Route>
          <Route path='/adminDashboard' element={<AdminDashboard></AdminDashboard>}></Route>
        </Routes>
     </Router>
    </>
  )
}

export default App
