import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import GetType from "./components/GetType";
import Main from "./components/Main";
import GetService from "./components/GetService";
import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";
import Navigation from "./components/Navigation";
import './App.css';


const App = () => {
    return (
        <div id='App'>
            <HashRouter>
                <div>
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/type' element={<GetType />} />
                        <Route path='/service' element={<GetService />} />
                        <Route path='/search' element={<SearchBar />} />
                        <Route path='/results' element={<ResultsList />} />
                    </Routes>
                </div>
                <Navigation />
            </HashRouter>
        </div>
    )
};


export default App;