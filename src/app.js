import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "/src/components/Header";
import Body from "/src/components/Body";
import Footer from "/src/components/Footer";
import About from "/src/components/About";
import Error from "/src/components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "/src/components/Contact";
import RestaurantMenu from "/src/components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "/src/utils/appStore";
import Cart from "/src/components/Cart";


const AppLayout = () =>{
    return(
        <Provider store={appStore}>
        <>
         <Header/>
         <Outlet/>
         <Footer/>
        </>
        </Provider>

       
       
    )
}

const appRouter = createBrowserRouter([
{
    path:"/",
    element :<AppLayout/>,
    errorElement:<Error/>,
    children:[
        {
            path:"/",
            element:<Body/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/restaurant/:id",
            element:<RestaurantMenu/>
        },
        {
            path:"/cart",
            element:<Cart/>
        }
    ]
},
{
   
   
}
]);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRouter} />);