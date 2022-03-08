import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ThemeProvider} from "@mui/material";
import {theme} from "./shared/utils/theme";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
