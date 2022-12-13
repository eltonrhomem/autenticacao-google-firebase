import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';





function App() {
  

  

 

  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route exact path="/" element={ <Navigate to="/login" /> }> </Route>
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
