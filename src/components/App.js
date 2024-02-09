import React from "react";
import { createRoot } from 'react-dom/client';
import '../components/app.scss';
import AppLayout from "./AppLayout";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './Header';
import AboutUs from "./aboutUs";
import Grocery from "./Grocery";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {path: '/', element: <AppLayout/>},
        {
        path: '/about-us',
        element: <AboutUs/>
        }, {
        path: '/grocery',
        element: <Grocery/>
        }
        ]
    }, ])

const root = createRoot(document.getElementById('root'));

 root.render(<RouterProvider router={appRouter}/>);