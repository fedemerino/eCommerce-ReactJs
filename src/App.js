import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { BrowserRouter} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {
    return (

        <>
            <BrowserRouter basename="/">
                <NavBar />
                <Main />
                <ToastContainer />
                </BrowserRouter>   
                <Footer />
        </>
    );
}

export default App;












