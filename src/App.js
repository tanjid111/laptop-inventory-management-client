import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Home from './Pages/Home/Home/Home';
import InventoryDetail from './Pages/Home/InventoryDetail/InventoryDetail';
import ManageInventory from './Pages/Home/ManageInventory/ManageInventory';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ResetPassword from './Pages/Login/ResetPassword/ResetPassword';
import AddInventory from './Pages/AddInventory/AddInventory';
// import { addResponseMessage, Widget } from 'react-chat-widget';
// import { useEffect } from 'react';
// import logo from './logo.svg';
import 'react-chat-widget/lib/styles.css';
import { ToastContainer } from 'react-toastify';
import MyItems from './Pages/MyItems/MyItems';


function App() {
  // useEffect(() => {
  //   addResponseMessage('Welcome to this **awesome** chat!');
  // }, []);


  // const handleNewUserMessage = (newMessage) => {
  //   console.log(`New message incoming! ${newMessage}`);
  //   // Now send the message through the backend API
  // };
  return (
    <div className="d-flex flex-column min-vh-100">

      <Header></Header>
      <Routes className='container'>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <InventoryDetail></InventoryDetail>
          </RequireAuth>
        }></Route>
        <Route path='/add' element={
          <RequireAuth>
            <AddInventory></AddInventory>
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/reset' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
      {/* <Widget
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar={logo}
        title="My new awesome title"
        subtitle="And my cool subtitle"

      /> */}
    </div>
  );
}

export default App;
