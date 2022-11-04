import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { BrowserRouter} from "react-router-dom"
function App() {
    return (

        <>
            <BrowserRouter>
                <NavBar />
                <Main />
            </BrowserRouter>   
                <Footer />
        </>
    )
        ;
}

export default App;












