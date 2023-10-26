import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';
import PDFviewer from './components/PDFviewer';
import NavBar from './components/Navbar/Navbar';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';

function App() {
  return (
    <>
      <Toaster />
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pdf/:pdfID' element={<PDFviewer />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
    
}

export default App