import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Cart from './Components/Cart';
import { ProductsData } from './api/api';





const Layout = () => {
  return(
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
  )
}


const App = () => {

  const router = createBrowserRouter(
      createRoutesFromElements(
      <Route>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} loader={ProductsData}></Route>  
          <Route path='cart' element={<Cart/>}></Route>  
        </Route>
      </Route>
    )
  );

  return (
    <div>
        <RouterProvider router={router}/>
        
    </div>
  )
}

export default App