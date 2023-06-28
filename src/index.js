import React, { Suspense, fallback, useState,useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
// import './App.css';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Body from './components/Body';
import Cart from './components/cart';
import Error from './components/Error';
import RestaurantDetails from './components/RestaurantDetails';
import LoginPage from './components/Login';
import UserContext from './components/utils/UserContext';
import { Provider } from 'react-redux';
import store from './components/utils/store';

const Instamart = React.lazy(()=> import('./Instamart'));



const AppLayOut=()=> {
  const [user,setUser]=useState({
      name:"Ganesh",
      email:'gks@gmail.com'
  })
  

  return (
    <>
    <Provider store={store}>
    <UserContext.Provider
    value={{
      user:user,
      setUser:setUser
    }}>
    <Header/>
      <Outlet/>
      <Footer/>
    </UserContext.Provider>
    </Provider>
    </>
  )
}

const AppRouter=createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut/>,
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
      },
      {
        path:"/instamart",
        element: (
          <Suspense fallback={<h1>Instamart Loading...</h1>}>
          <Instamart/>
          </Suspense>
        )
      },
      {
        path:"/cart",
        element: <Cart/>
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={AppRouter}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

