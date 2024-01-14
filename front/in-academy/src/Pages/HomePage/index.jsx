import React, { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Header } from "../../Components/Default/Header";
import { SliderCarrousel } from "../../Components/Default/Carrousel";
import './style.css';
import { Link, Navigate } from "react-router-dom";
import { CardComponentProgress } from "../../Components/Default/CardCourseProgress";
import { CardComponent } from "../../Components/Default/CardComponent";
import { Ranking } from "../../Components/Default/MembersRanking";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded';
import Qrimage from '../../Components/assets/qrcode.png'
import { ArtigoComponent } from "../../Components/Default/ArtigoComponent";
import { FooterComponent } from "../../Components/Default/Footer";
import logoAcademy from '../../Components/assets/logoSite.png'
import { getUser, userIsAuthenticated } from "../../Service/UserService";
import { getCourses } from "../../Service/CoursesService/courses";
import { HomePageSkeeleton } from "../../Components/Default/SkeletoonsLoading/HomePage";
 
export function HomePage(){
 
    const [component, setComponent] = useState(<div className="loaderPage"><img src={logoAcademy} className="imageLoading" alt=""/> <p>Aguarde um instante!</p> <CircularProgress className="circularProgressPages"/></div>)
 
    useEffect(() => {

        console.log('chegou no verify auth home')
        async function verifyAuth(){
            await userIsAuthenticated() ? setInterval( () => setComponent(<RenderHomePage/>), 1500) : setInterval( () =>setComponent(<Navigate to='/'/>), 1500);
        }
 
        verifyAuth();
    },[])
 
    return(component);
}
 
function RenderHomePage(){
    const [ qrCode, setQrCode] = useState('-130px');
    const [ dataUser, setDataUser ] = useState(null);
    const [ dataCourses, setDataCourses ] = useState(null);
 
    useEffect(() => {
        async function getData() {
            await getUser().then((res) => {
                setDataUser(res.data);
            })
 
            await getCourses().then((res) => {
                setDataCourses(res.data)
            })
        }
 
        getData();
    }, [])
 
 
    function moveCarrousel(id, to){
        if(to === 'left'){
            document.getElementById(id).scrollBy({
                left: -1200,
                top: 0,
                behavior: 'smooth'
            });
        }else{
            document.getElementById(id).scrollBy({
                left: +1200,
                top: 0,
                behavior: 'smooth'
            });
        }
    }
 
    function openQrCode(){
        setQrCode(qrCode === '-130px' ? '10px' : '-130px');
    }
   
    function calculatePercent(curso){
        var total = 0;
        var totalComplete = 0;
 
        if(curso.courseContent.length === 0) return 0;

        curso.courseContent.map((module) => {
            total += module.classroom.length;
           
            module.classroom.map((classroom) => {
                if(classroom.statusClassroom === "COMPLETE"){
                    totalComplete += 1;
                }
            })
        })
           
        const percent = (totalComplete / total) * 100;
        return percent.toFixed(0);
    }
 
    return(
        <>  
            {
                dataUser === null || dataCourses === null ?
                <HomePageSkeeleton />
                :
                <>
                    <Header user={ dataUser } pageSelected="home"/>
                        <div className="align">
                            <SliderCarrousel/>
                            <div className="flex welcome contentPage">
                                <h2 style={{color: 'black'}}>Bem vindo de volta { dataUser?.name.split(' ')[0] }!</h2>
                                <Link to='/user/meuAprendizado' className="cursosInProgress">
                                    <h5 className="cursosInProgress">Cursos em progresso</h5>
                                </Link>
                            </div>
                            <div className="contentPage flex contentArrows" >
                                <ArrowBackIosRoundedIcon className="arrows left" onClick={() => moveCarrousel('recents', 'left')}/>
                                    <div className="flex contentPage cardProgress scroll" id="recents">
                                        {
                                            dataUser.enrolledCourses.map((course) => {
                                                return <CardComponentProgress curso={course} porcent={calculatePercent(course)} />
                                            })
                                        }
                                    </div>
                                <ArrowForwardIosRoundedIcon className="arrows right" onClick={() => moveCarrousel('recents', 'right')}/>
                            </div>
 
                            <div className="flex welcome contentPage">
                                <h2 style={{color: 'black'}}>Recentemente adicionados</h2>
                                <Link to='/cursos/recentes' className="cursosInProgress">
                                    <h5 className="cursosInProgress">Recentes</h5>
                                </Link>
                            </div>
                            <div className="contentPage flex contentArrows">
                                <ArrowBackIosRoundedIcon className="arrows left" onClick={() => moveCarrousel('divNew', 'left')}/>
                                    <div className="flex contentPage scroll" id="divNew">
                                        {
                                            dataCourses.map((course) => {
                                                return (<CardComponent course={course} user={dataUser}/>)
                                            })
                                        }
                                    </div>
                                <ArrowForwardIosRoundedIcon className="arrows right" onClick={() => moveCarrousel('divNew', 'right')}/>
                            </div>
                            <div className="flex welcome contentPage">
                                <h2 style={{color: 'black'}}>Artigos desta semana</h2>
                                <Link to='/artigos/recentes' className="cursosInProgress">
                                    <h5 className="cursosInProgress">Artigos</h5>
                                </Link>
                            </div>
                            <ArtigoComponent />
                        </div>
                        <Ranking/>
                        <div className="divQr" style={{left: qrCode}} onClick={openQrCode}>
                            <div className="QrCode">
                                <div className="infosQr">
                                    <h5 className="titleQr">Baixe o app!</h5>
                                    <img src={Qrimage} className="qrImage"/>
                                    <p className="textQr">Aponte a camera do seu celular para o QR Code!</p>
                                </div>
                            </div>
                            <QrCodeScannerRoundedIcon className="iconQr"/>
                        </div>
                    <FooterComponent/>
                </>
            }
           
        </>
    )
}