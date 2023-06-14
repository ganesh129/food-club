import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
// import './App.css';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Body from './components/Body';
import Error from './components/Error';
import RestaurantDetails from './components/RestaurantDetails';
import LoginPage from './components/Login';



function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}

const AppLayOut=createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<Error/>,
    children:[
      {
         path:"/",
         element:<Body/>
      },
      {
        path: "/about",
        element:<About/>
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path:"/login",
        element: <LoginPage/>
      },
      {
        path:"/restaurant/:id",
        element: <RestaurantDetails/>
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={AppLayOut}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

