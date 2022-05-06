import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Pages/Home/Banner/Banner';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Home from './Pages/Home/Home/Home';
import InventoryDetail from './Pages/Home/InventoryDetail/InventoryDetail';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header></Header>
      <Routes className='container'>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:inventoryId' element={<InventoryDetail></InventoryDetail>}></Route>
        <Route to='/manageitems'></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
