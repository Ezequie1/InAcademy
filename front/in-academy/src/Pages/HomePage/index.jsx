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
                console.log(res.data)
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

    return(
        <>   
            {
                dataUser === null || dataCourses === null ? 
                <HomePageSkeeleton /> 
                : 
                <>
                    <Header user={ dataUser }/>
                        <div className="align">
                            <SliderCarrousel/>
                            <div className="flex welcome contentPage">
                                <h2 style={{color: 'black'}}>Bem vindo de volta { dataUser?.name.split(' ')[0] }!</h2>
                                <Link to='/cursos-em-andamento' className="cursosInProgress">
                                    <h5 className="cursosInProgress">Cursos em progresso</h5>
                                </Link>
                            </div>
                            <div className="contentPage flex contentArrows" >
                                <ArrowBackIosRoundedIcon className="arrows left" onClick={() => moveCarrousel('recents', 'left')}/>
                                    <div className="flex contentPage cardProgress scroll" id="recents">
                                        <CardComponentProgress title='Docker completo' author='Alexandre de morais' porcent={77} url="https://img-c.udemycdn.com/course/240x135/4821926_131f.jpg"/>
                                        <CardComponentProgress title='Cloud Practitioner' author='Luis Gustavo' porcent={29} url="https://img-c.udemycdn.com/course/240x135/3142166_a637_3.jpg"/>
                                        <CardComponentProgress title='TypeScript na raça' author='Roberto Benner' porcent={100} url="https://img-c.udemycdn.com/course/240x135/947098_02ec_2.jpg"/>
                                        <CardComponentProgress title='Banco de dados' author='Willian Santos' porcent={19} url="https://img-b.udemycdn.com/course/240x135/860444_34ed_37.jpg"/>
                                        <CardComponentProgress title='MySQL completo' author='Henrique Tito' porcent={88} url="https://img-c.udemycdn.com/course/240x135/3944892_9621.jpg"/>
                                    </div>
                                <ArrowForwardIosRoundedIcon className="arrows right" onClick={() => moveCarrousel('recents', 'right')}/>
                            </div>

                            <div className="flex welcome contentPage">
                                <h2 style={{color: 'black'}}>Recentemente adicionados</h2>
                                <Link to='/recents' className="cursosInProgress">
                                    <h5 className="cursosInProgress">Recentes</h5>
                                </Link>
                            </div>
                            <div className="contentPage flex contentArrows">
                                <ArrowBackIosRoundedIcon className="arrows left" onClick={() => moveCarrousel('divNew', 'left')}/>
                                    <div className="flex contentPage scroll" id="divNew">
                                        {
                                            dataCourses.map((course) => {
                                                return (<CardComponent id={course.id} date={ course.creationDate }  fav={false} title={ course.title } author={ course.authorName } rate={ course.avaliation } votes={0} url={ course.urlImageCourse } />)
                                            })
                                        }
                                    </div>
                                <ArrowForwardIosRoundedIcon className="arrows right" onClick={() => moveCarrousel('divNew', 'right')}/>
                            </div>
                            <div className="flex welcome contentPage">
                                <h2 style={{color: 'black'}}>Artigos desta semana</h2>
                                <Link to='/recents' className="cursosInProgress">
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



