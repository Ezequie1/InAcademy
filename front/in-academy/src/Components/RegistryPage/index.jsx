import React from "react";
import './style.css'
import logo from '../assets/logoIn.png'
import { BackgroundVideo } from '../Default/Background/index';
import logoAcademy from '../assets/logoSite.png'
import logoMicrosoft from "../assets/microsoftLogo.png"
import { Link } from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";

function RegistryPage(){

    const[see, setSee] = useState('password');
    const[eye, setEye] = useState(false)

    return(    
        <>
            <BackgroundVideo/> 
            <div className="content">
                <div className="formRegistry">
                    <div className="divLogoAcademy">
                        <img src={logoAcademy} alt="" className="logoAcademy"/>
                    </div>
                    <div className="login">
                        <p className="texts principalText">Cadastre-se para criar sua conta!</p>
                        <p className="texts">Já possui conta? <span className="buttonCadastre"><Link to='/' className="link">Entrar</Link></span>!</p>
                        <div className="divInputs">
                            <div className="inputSingle">
                                <input type="text" required className="inputStyle" id="name"/>
                                <label htmlFor="name" className="inputLabel">Nome</label>
                            </div>
                            <div className="inputSingle">
                                <input type="text" required className="inputStyle" id="email"/>
                                <label htmlFor="email" className="inputLabel">Email</label>
                            </div>
                            <div className="inputSingle">
                                <input type={see} required className="inputStyle password" id="senha"/>
                                <label htmlForid="senha" className="inputLabel">Senha</label>
                                {eye ?  
                                <IconButton size="small">
                                    <VisibilityOffIcon color="disabled" fontSize="small" className="icon" onClick={() => {
                                        see === 'password' ? setSee('text') : setSee('password')
                                        setEye(!eye)}}
                                    />
                                </IconButton>
                                 :
                                <IconButton size="small">
                                    <RemoveRedEyeIcon  color="disabled" fontSize="small" className="icon" onClick={() => {
                                        see === 'password' ? setSee('text') : setSee('password')
                                        setEye(!eye)
                                    }}/>
                                </IconButton>
                                }
                            </div>
                        </div>
                        <div className="divButton">
                            <button className="button" >
                                Cadastre-se
                            </button>
                        </div>
                        <div className="divOu">
                            <span className="line"/>
                            <p className="textOu">Ou</p>
                            <span className="line"/>
                        </div>
                        <div className="divButton">
                            <button className="ssoLogin">
                                <img src={logoMicrosoft} className="logoMicrosoft" alt="" /> Microsoft
                            </button>
                        </div>
                    </div>
                </div>

                <span className="LogoInmetrics">
                    <img src={logo} alt="" className="imgLogo" />
                </span>
            </div>

        </>
    )

}

export default RegistryPage;