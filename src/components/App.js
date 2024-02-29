import React from "react";
import { createRoot } from 'react-dom/client';
import '../components/app.scss';
import AppLayout from "./AppLayout";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './Header';
import AboutUs from "./aboutUs";
import Grocery from "./Grocery";
import RestaurantDetails from "./RestaurantDetails";
import AppStore from "../redux/AppStore";
import { Provider } from "react-redux";

const Layout = () => {
    return (
        <>
        <Provider store={AppStore}>
            <Header />
            <Outlet/>
            </Provider>
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
        },
        {
            path: '/restaurant/:id',
            element: <RestaurantDetails/>
        }
        ]
    }, ])

const root = createRoot(document.getElementById('root'));

 root.render(<RouterProvider router={appRouter}/>);