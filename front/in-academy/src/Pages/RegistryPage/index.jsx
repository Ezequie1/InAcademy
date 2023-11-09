import React from "react";
import './style.css'
import logo from '../../Components/assets/logoIn.png'
import { BackgroundVideo } from '../../Components/Default/Background/index';
import logoAcademy from '../../Components/assets/logoSite.png'
import logoMicrosoft from "../../Components/assets/microsoftLogo.png"
import { Link } from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { Registry } from "../../Service/UserService";
import { Navigate } from "react-router-dom";

function RegistryPage(){

    const[see, setSee] = useState('password');
    const[eye, setEye] = useState(false)
    const[loading, setLoading] = useState(<>Cadastre-se</>)
    const[nome, setNome] = useState('');
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');


    function sendForm(){

        if(nome !== '', email !== '', senha !== ''){

            setLoading(<CircularProgress style={{height: '25px', width: '25px'}}/>);

            Registry(nome, email, senha).then((response) => {
                if(response.status === 200){
                    const interval = setInterval(() => {
                        setLoading(<Navigate to='/'/>);
                        clearInterval(interval)
                    } , 1500);
                }
            }).catch((error) =>  setLoading(<>Cadastre-se</>))
        }
    }

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
                                <input type="text" required className="inputStyle" id="name" onChange={event => setNome(event.target.value)}/>
                                <label htmlFor="name" className="inputLabel">Nome</label>
                            </div>
                            <div className="inputSingle">
                                <input type="text" required className="inputStyle" id="email" onChange={event => setEmail(event.target.value)}/>
                                <label htmlFor="email" className="inputLabel">Email</label>
                            </div>
                            <div className="inputSingle">
                                <input type={see} required className="inputStyle password" id="senha" onChange={event => setSenha(event.target.value)}/>
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
    )

}

export default RegistryPage;