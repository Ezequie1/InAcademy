import React, { useState } from "react";
import './style.css'
import logo from '../../Components/assets/logoIn.png'
import { BackgroundVideo } from '../../Components/Default/Background/index';
import logoAcademy from '../../Components/assets/logoSite.png'
import logoMicrosoft from "../../Components/assets/microsoftLogo.png"
import { Link, Navigate } from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import { Login } from "../../Service/UserService";
import { setCookie } from "nookies";

function LoginPage(){

    const [see, setSee] = useState('password');
    const [eye, setEye] = useState(false);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(<>Login</>)

    function sendForm(){

        if(email !== '' && senha !== ''){
            setLoading(<CircularProgress style={{height: '25px', width: '25px', color: '#000'}}/>)

            Login(email, senha).then((response) => {
                setCookie(null, 'session_user', response.data.token, {
                    maxAge: 86400 * 2,
                    path: '/'
                })

                setCookie(null, 'email', email, {
                    maxAge: 86400 * 2,
                    path: '/'
                })
                
                const interval = setInterval(() => {
                    setLoading(<Navigate to='/home'/>);
                    clearInterval(interval)
                } , 1500);
                
            }).catch((error) => {
                setLoading(<>Login</>)
                console.error(error)
            })

        }
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