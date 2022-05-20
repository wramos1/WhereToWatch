import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetType from "./components/GetType";
import Main from "./components/Main";
import GetService from "./components/GetService";
import GetResults from "./components/GetResults";
import './App.css';


const App = () => {
    return (
        <div id='App'>
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/type' element={<GetType />} />
                        <Route path='/service' element={<GetService />} />
                        <Route path='/results' element={<GetResults />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}


export default App;