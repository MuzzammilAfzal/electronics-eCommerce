
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavBar from './components/navBar';
import Home from './pages/home';
import MyCart from './pages/myCart';
import Buy from './pages/buy';
import MyOrders from './pages/myOrders';



function App() {
  

  return (
    <>
     <Router>
      <NavBar></NavBar>
         <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/buy" element={<Buy></Buy>}></Route>
          <Route path="/myCart" element={<MyCart></MyCart>}></Route>
          <Route path="/myOrders" element={<MyOrders></MyOrders>}></Route>
        </Routes>
     </Router>
    </>
  )
}

export default App
