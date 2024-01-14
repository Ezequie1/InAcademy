import React, { useState } from "react";
import './style.css'
import rankingIcon from '../../assets/trofeu.png'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import imgUser from '../../assets/imgUser.jpg'
import eduardoMenezes from '../../assets/userRanks/eduardoMenezes.png'
import franklin from '../../assets/userRanks/Franklin.png'
import gustavo from '../../assets/userRanks/gustavoSantana.png'
import hugoDeJesus from '../../assets/userRanks/HugoDeJesus.png'
import joseNildo from '../../assets/userRanks/JoseNildo.png'
import joseLuiz from '../../assets/userRanks/JoseLuiz.png'
import thalesMateus from '../../assets/userRanks/ThalesMateus.png'

export function Ranking(){

    const [openRanking, setOpenRank] = useState('-300px');
    const users = [
        {nome: "Eduardo Menezes", points: 600, img: eduardoMenezes},
        {nome: "José Luiz", points: 550, img: joseLuiz},
        {nome: "Gustavo Santana", points: 490, img: gustavo},
        {nome: "Thales Mateus", points: 420, img: thalesMateus},
        {nome: "Hugo de Jesus", points: 390, img: hugoDeJesus},
        {nome: "Franklin Carlos", points: 350, img: franklin},
        {nome: "José Nildo", points: 200, img: joseNildo},
    ]

    function moveRanking(){
        setOpenRank( openRanking === '40px' ? '-300px' : '40px')
    }

    function verifyRaking(index){
        if(index === 0){
            return "pointsUser gold";
        }else if(index === 1){
            return "pointsUser prata"
        }else if(index === 2){
            return "pointsUser bronze"
        }else{
            return "pointsUser"
        }
    }

    function renderCup(index){
        if(index > 2) return (<></>) 

        if(index === 0){
            return (<EmojiEventsRoundedIcon className="iconGold" fontSize="large"/>);
        }else{
            return index === 1 ? (<EmojiEventsRoundedIcon className="iconPrata" fontSize="large"/>) : (<EmojiEventsRoundedIcon className="iconBronze" fontSize="large"/>);
        }
    }

    return(
        <>
            <div className="rankingDiv" onClick={moveRanking}>
                <img src={rankingIcon} className="iconRanking" alt=""/>
            </div>
            <div className="divRanking" style={{right: openRanking }}>
                <div className="closeDiv">
                    <ArrowForwardIosRoundedIcon className="iconCloseRanking" onClick={moveRanking}/>
                </div>
                <div className="titleMembers">
                    <h5 className="TitleRanking">Membros</h5>
                    <p className="numbers">835</p>
                </div>
                <div className="listMembers">                    
                    {
                        users.map((user, index) => {
                            return(                    
                                <div className="members">
                                    <div className="itemListMembers">
                                        <img src={user.img} alt="" className="iconUserMember"/>
                                        <div className="detailsUser">
                                            <h5 className="NameMember">{user.nome}</h5>
                                            <div className="iconAndPoints">
                                                <h5 className={verifyRaking(index)}>{user.points}</h5><p className="textPoints"> pontos</p>
                                            </div>
                                        </div>
                                        { renderCup(index) }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div> 
                <h5 className="showMore">ver mais</h5>
                <div className="members">
                    <div className="itemListMembers yourDiv">
                        <img src={imgUser} alt="" className="iconUserMember imageYou"/>
                        <div className="detailsUser">
                            <h5 className="NameMember">Ezequiel Alves</h5>
                            <div className="iconAndPoints">
                                <h5 className="pointsUser">140</h5><p className="textPoints"> pontos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
    
}