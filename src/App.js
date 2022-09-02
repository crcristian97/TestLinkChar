import './App.css'
import React from 'react';
import FormSignup from "./component/Form/FormSignUp"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './routes/Home';


function App() {
    return (
    <BrowserRouter>
        <Routes>         
            <Route index element={<FormSignup/>} />
            <Route path="/home" element={<Home/>}>
            </Route>
        </Routes>
      </BrowserRouter>
    )
}

export default App;