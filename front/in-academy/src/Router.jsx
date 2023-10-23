import React from "react";
import { Routes, Route } from "react-router-dom";
import  LoginPage  from "./Components/LoginPage";
import RegistryPage from "./Components/RegistryPage"

export function PathRouter(){
    return(
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/registry" element={<RegistryPage/>}/>
        </Routes>
    )

}