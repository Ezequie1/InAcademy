import React from "react";
import { Routes, Route } from "react-router-dom";
import  LoginPage  from "./Pages/LoginPage/index"
import RegistryPage from "./Pages/RegistryPage"
import { HomePage } from "./Pages/HomePage"
import { CoursePage } from "./Pages/CoursePage";

export function PathRouter(){

    return(
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/registry" element={<RegistryPage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/curso/*" element={<CoursePage/>}/>
        </Routes>
    )

}