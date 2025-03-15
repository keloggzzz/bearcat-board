import './App.css'
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import NavBar from './Components/NavBar';
import Connections from './Components/Connections';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, createContext} from "react";

export const DataContext=createContext("");


export default function App() {
  var login=0; 
   if(sessionStorage.getItem("logged") != null){
     login=sessionStorage.getItem("logged")
   }
   const [logStatus,setLogStatus]=useState(login);

   return (
    <DataContext.Provider value={{ logStatus, setLogStatus }}>
      <BrowserRouter>
        {logStatus === "1" ? (
          // If logged in, show the NavBar
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
            </Routes>
          </>
        ) : (
          // If not logged in, show the Login page
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        )}
      </BrowserRouter>
    </DataContext.Provider>
  );
}



