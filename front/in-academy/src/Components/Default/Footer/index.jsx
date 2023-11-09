import React from "react";
import './style.css'
import logo from '../../assets/logoIn.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export function FooterComponent(){
    return(
        <div className="divFooter">
            <img src={logo} className="logoFooter"/>
            <div className="infosPolitica">
                <h5>
                Política de privacidade | Canal de ética
                </h5>
                <p>
                2021. Inmetrics. Todos os direitos reservados | 04.959.158/0002-25
                </p>
            </div>
            <div>
                <p>Siga a Inmetrics nas redes sociais</p>
                <div className="flex divItensFooter">
                    <FacebookIcon className="iconFooter" fontSize="large"/>
                    <InstagramIcon className="iconFooter" fontSize="large"/>
                    <LinkedInIcon className="iconFooter" fontSize="large"/>
                    <TwitterIcon className="iconFooter" fontSize="large"/>
                </div>
            </div>
        </div>
    )
}