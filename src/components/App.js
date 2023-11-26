import React from "react";
import { createRoot } from 'react-dom/client';
import '../components/app.scss';
import AppLayout from "./AppLayout";


const root = createRoot(document.getElementById('root'));

 root.render(<AppLayout/>);