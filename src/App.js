import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomProvider from "./components/CustomProvider";


function App() {


    return (
        <CustomProvider>
            <BrowserRouter>
                <NavBar />
                <Main />
                <ToastContainer />
            </BrowserRouter>
            <Footer />
        </CustomProvider>

    );
}

export default App;












