import React from "react";
import { createRoot } from 'react-dom/client';
import '../components/app.scss';
import AppLayout from "./AppLayout";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutUs from "./aboutUs";

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>
    }, {
        path: '/about-us',
        element: <AboutUs/>
}])

const root = createRoot(document.getElementById('root'));

 root.render(<RouterProvider router={appRouter}/>);