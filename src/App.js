import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Productpage from './pages/Productpage/Productpage';
import DetailProduct from './pages/DetailProduct/DetailProduct';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path='/' element={<Homepage />}/>
    <Route path='/products' element={<Productpage />}/>
    <Route path='/detailproduct/:id' element={<DetailProduct />}/>
   </Routes>
   <Footer />
   </BrowserRouter>
  );
}

export default App;
