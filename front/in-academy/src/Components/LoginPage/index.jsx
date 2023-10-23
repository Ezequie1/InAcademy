import React, { useState } from "react";
import './style.css'
import logo from '../assets/logoIn.png'
import { BackgroundVideo } from '../Default/Background/index';
import logoAcademy from '../assets/logoSite.png'
import logoMicrosoft from "../assets/microsoftLogo.png"
import { Link } from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';

function LoginPage(){

    const [see, setSee] = useState('password');
    const [eye, setEye] = useState(false);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(<>Login</>)

    function sendForm(){

        setLoading(<CircularProgress style={{height: '25px', width: '25px'}}/>)
    }


    return(
        <>
            <BackgroundVideo/> 
            <div className="content">
                <div className="formLogin">
                    <div className="divLogoAcademy">
                        <img src={logoAcademy} alt="" className="logoAcademy"/>
                    </div>
                    <div className="login">
                        <p className="texts principalText">Faça login para continuar</p>
                        <p className="texts">Ainda não possui conta? <span className="buttonCadastre"><Link to='/registry' className="link">Cadastre-se</Link></span>!</p>
                        <div className="divInputs">
                            <div className="inputSingle">
                                <input type="text" required className="inputStyle" onChange={ event => setEmail(event.target.value)} id="email"/>
                                <label htmlFor="email" className="inputLabel">Email</label>
                            </div>
                            <div className="inputSingle">
                                <input type={see} required className="inputStyle password" onChange={ event => setSenha(event.target.value)} id="password"/>
                                <label htmlForid="password" className="inputLabel">Senha</label>
                                {eye ?  
                                    <IconButton size="small">
                                        <VisibilityOffIcon fontSize="small" className="icon" onClick={() => {
                                            see === 'password' ? setSee('text') : setSee('password')
                                            setEye(!eye)}}
                                        />
                                    </IconButton>
                                     :
                                    <IconButton size="small">
                                        <RemoveRedEyeIcon fontSize="small" className="icon" onClick={() => {
                                            see === 'password' ? setSee('text') : setSee('password')
                                            setEye(!eye)
                                        }}/>
                                    </IconButton>
                                }
                            </div>
                        </div>
                        <div className="divButton">
                            <button className="button" onClick={sendForm}>
                                { loading }
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
    );

}

export default LoginPage;