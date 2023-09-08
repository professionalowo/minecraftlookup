import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
    createBrowserRouter, createRoutesFromElements, Route,
    RouterProvider,
} from "react-router-dom";
import About from "./About.tsx";
import Navbar from "./components/Navbar.tsx";
import SkinViewComponent from "./components/SkinViewComponent.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Navbar/>}>
            <Route index element={<App/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="viewer/:username" element={<SkinViewComponent/>}/>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
