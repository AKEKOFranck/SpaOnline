import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import { lazy, Suspense } from 'react';
import First from './First'
import Second from './Second/Second'





function App() {
  return (
   <>
   <Header />

   <Routes>
    <Route path='/' element={<First />}></Route>
    <Route path='/reservation' element={<Second />}></Route>
   </Routes>
   </>
  );
}

export default App;
