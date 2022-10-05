import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Productpage from './pages/Productpage/Productpage';
import DetailProduct from './pages/DetailProduct/DetailProduct';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Cartpage from './pages/Cartpage/Cartpage';
import { ToastContainer } from 'react-toastify';
import Aboutpage from './pages/Aboutpage/Aboutpage';
import Newspage from './pages/Newspage/Newspage';
import ScrollToTop from './components/ScrollToTop';
import Signin from './components/Signin/Signin';

function App() {
  return (
   <BrowserRouter>
   <ScrollToTop />
   <Navbar />
   <ToastContainer />
   <Routes>
    <Route path='/' exact element={<Homepage />}/>
    <Route path='/products' element={<Productpage />}/>
    <Route path='/detailproduct/:id' element={<DetailProduct />}/>
    <Route path='/cart' element={<Cartpage />}/>
    <Route path='/about' element={<Aboutpage />}/>
    <Route path='/news' element={<Newspage />}/>
    <Route path='/signin' element={<Signin />}/>
   </Routes>
   <Footer />
   </BrowserRouter>
  );
}

export default App;
