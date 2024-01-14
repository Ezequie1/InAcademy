import React, { useEffect, useState } from "react";
import { Header } from "../../Components/Default/Header";
import { getUser } from "../../Service/UserService";
import { addToFavorite, getCourseById, getCourses, getTotalUsersInACourse, registerUserToCourse, removeToFavorite } from "../../Service/CoursesService/courses";
import "./style.css"
import fundo from "../../Components/assets/fundoPageCourse.png"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Comment } from "../../Components/Default/Comment";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { CardComponent } from "../../Components/Default/CardComponent";
import { FooterComponent } from "../../Components/Default/Footer";
import { Rating } from "@mui/material";
import { userIsAuthenticated } from "../../Service/UserService";
import { Navigate } from "react-router-dom";
import { CoursePageSkeeleton } from "../../Components/Default/SkeletoonsLoading/CoursePage";
import CircularProgress from '@mui/material/CircularProgress';

function RenderCousePage(){

    const [user, setUser] = useState(null)
    const [course, setCourse ] = useState(null)
    const [favorite, setFavorite] = useState(false)
    const [isEnrolled, setIsEnrolled] = useState(null)
    const [dataCourses, setDataCourses] = useState(null)
    const [totalUsersInACourse, setTotalUsers] = useState('0')

    useEffect(() => {
        async function getDataUser(){
            await getUser().then( async (resUser) => {
                setUser(resUser.data) 

                await getCourseById(window.location.pathname.split('/')[2]).then( async res => {

                    setCourse(res.data)

                    await getTotalUsersInACourse(res.data.id).then( res => {
                        setTotalUsers(res.data);
                    })

                    resUser.data.favoritesCourses.map((item) => {
                        if(item.id === res.data.id) setFavorite(true)
                    })
                
                    resUser.data.enrolledCourses.map((item) => {
                        if(item.id === res.data.id){
                            setIsEnrolled(<Link style={{textDecoration: 'none', color: '#fff'}} to={'/classrooom/course/' + res.data.id }>
                                <button className="buttonInsrevase" >
                                    <h5>Continuar de onde parou</h5>
                                </button>
                           </Link>)
                        }else{
                            setIsEnrolled(
                                <button className="buttonInsrevase" onClick={() => registerToCourse(resUser.data.email, res.data.id) }>
                                    <h5>Matricule-se</h5>                             
                                </button>
                            )
                        }
                    })
                })
            });

            await getCourses().then( res =>  {
                setDataCourses(res.data)
            })
        }

        getDataUser();
    },[])

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

    function getTotalHours(){

        let totalMin = 0;
        let totalHours = 0;

        course.courseContent.map((module) => {
            module.classroom.map((classroom) =>{
                if(totalMin === 60){
                    totalMin = 0;
                    totalHours += 1;
                }
                totalMin += 20;
            })
            
        })

        return totalHours + "H e " + totalMin + "m";
    }


    async function changeFavorite(){
        if(favorite){
            await removeToFavorite(user.email, course.id).then((res) => {
                if(res.status === 200) setFavorite(false)
            }).catch((error) => console.log(error))
        }else{
            await addToFavorite(user.email, course.id).then((res) => {
                if(res.status === 200) setFavorite(true);
            }).catch((error) => console.log(error))
        }
    }

    function getTotalClass(){
        let total = 0;
        course.courseContent.map((module) => {
            total += module.classroom.length;
        })

        return total;
    }

    async function registerToCourse(email, id){

        setIsEnrolled(
            <button className="buttonInsrevase" >
                <CircularProgress style={{height: '25px', width: '25px', color: '#fff'}}/>
            </button>
        )

        await registerUserToCourse(email, id).then((res) => {
            setInterval(() => {
                setIsEnrolled(
            <Link style={{textDecoration: 'none', color: '#fff'}} to={'/classroom/course/' + course.id }>                
                <button className="buttonInsrevase" >
                    <h5>Continuar de onde parou</h5>
                </button>
            </Link>
            )
            },2000)
        })
    }


    return(<>
        { user !== null && course !== null ?
            <>
                <Header user={user} pageSelected="meuAprendizado"/>
                <div className="backgroundImageCourseDiv"></div>
                <img className="backgroundImageCourse" src={fundo} alt=""/>
                <div className="align">
                    <div className="infoCourseDiv">
                        <div className="divPrincipalInfos">
                            <div>
                                <div className="modalImageCourse">
                                    <img src={course.urlImageCourse} alt="" className="imageCourse"/>
                                    <h5 className="estudeNow">Começe a aprender agora!</h5>
                                    { isEnrolled }
                                    <button className="buttonFavorite" onClick={() => {changeFavorite()}}>
                                        { favorite ? 
                                            <>
                                                <FavoriteIcon className="iconFavorite" /> 
                                                <h5>Remover dos favoritos</h5>
                                            </>
                                            : 
                                            <>
                                                <FavoriteBorderIcon className="iconNotFavorite"/> 
                                                <h5>Adicionar aos favoritos</h5>
                                            </> 
                                        }
                                    </button>
                                </div>
                                <div className="describeInfoCourses">
                                    <div className="flex">
                                        <AccessAlarmsIcon/>
                                        <p>Duração: { getTotalHours() }</p>
                                    </div>
                                    <div className="flex">
                                        <SchoolIcon />
                                        <p>Total de aulas: { getTotalClass() }</p>
                                    </div>
                                    <div className="flex">
                                        <CalendarMonthIcon/> 
                                        <p>Data de criação: { course.creationDate.split('T')[0] }</p>
                                    </div>
                                    <Link to="#" className="totalUsers">
                                        <div className="flex">
                                                <PersonIcon/> 
                                                <p>Total de alunos: { totalUsersInACourse }</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="spaceDivTitle">
                                <div>
                                    <div className="nameAndAuthorCourse">
                                        <h1>{ course.title }</h1>
                                        <h3>{ course.authorName}</h3>
                                        <div className="flex">
                                            <Rating name="half-rating" defaultValue={course.avaliation.toFixed(1)} readOnly precision={0.1} />
                                            <h4 style={{color: 'white', marginLeft: 10}}>{course.avaliation.toFixed(1)}</h4>
                                        </div>
                                    </div>
                                    <div className="diferenciaisCourse">
                                        <span><PersonIcon fontSize="large"/><span>{totalUsersInACourse}</span></span>
                                        <span><EmojiEventsIcon fontSize="large"/><p>Com certificado</p></span>
                                        <span><VerifiedUserIcon fontSize="large"/>Exclusivo Inmetrics</span>
                                        <span><ArrowOutwardIcon fontSize="large"/>Em alta!</span>
                                    </div>
                                </div>
                                <h2>Visão geral</h2>
                                <p>{ course.courseDescription }</p>
                                <h2 style={{fontSize: 19}}>O que você irá aprender?</h2>
                                {
                                    course.courseContent.map((module, index) => {
                                        return (
                                        <>
                                            <Accordion defaultExpanded={index === 0 ? true : false}>
                                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" style={{justifyContent: "space-between"}}>
                                                  <Typography><p>{ module.nameModule }</p></Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    {
                                                        module.classroom.map((aula) => {
                                                            return (
                                                                <>
                                                                <Link to={"/Read/Classroom/" + aula.id } style={{ textDecoration: 'none' }} >
                                                                    <div className="classroomAccordion flexClassroom">
                                                                        <div className="flexClassroom">
                                                                            <OndemandVideoIcon className="iconVideo" />
                                                                            <p className="titleClassroom">{aula.titleClassroom}</p>
                                                                        </div>  
                                                                        <div className="flexClassroom">
                                                                            <p className="timeClass">12:34</p> 
                                                                            { aula.statusClassroom === "COMPLETE" ?
                                                                                <CheckCircleOutlineIcon className="completeClassroom"/> 
                                                                                : 
                                                                                <RadioButtonUncheckedIcon className="uncheckClassroom"/>
                                                                            }
                                                                        </div> 
                                                                    </div>
                                                                </Link>
                                                                </>
                                                            )
                                                        })
                                                    }

                                                </AccordionDetails>
                                            </Accordion>
                                        </>)
                                    })
                                }
                            </div>


                        </div>
                        <div className="divComentsCourse">
                            <h1>Comentários deste curso <span style={{fontSize: 18}}>({ course.courseComments.length })</span></h1>
                            <div className="commentDiv">
                                {
                                    course.courseComments.map((coment, index) => {
                                        if(index > 2){
                                            return(<></>)
                                        }else{
                                            return(<Comment coment={coment}/>)
                                        }
                                    })
                                }
                                <h5>Ver mais</h5>
                            </div>
                        </div>
                        <div className="usersToView">
                            <h5 className="nameSectionUsersToView">
                                Os usuários também viram:
                            </h5>
                            <div className="contentPage flex contentArrows">
                                <ArrowBackIosRoundedIcon className="arrows left" onClick={() => moveCarrousel('divNew', 'left')}/>
                                    <div className="flex contentPage scroll" id="divNew">
                                        {
                                            dataCourses === null ? 
                                            <></>
                                            :
                                            dataCourses.map((course) => {
                                                return (<CardComponent course={course} user={user}/>)
                                            })
                                        }
                                    </div>
                                <ArrowForwardIosRoundedIcon className="arrows right" onClick={() => moveCarrousel('divNew', 'right')}/>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterComponent/>
            </>
            : 
            <CoursePageSkeeleton/>
        }
    </>)
}



export function CoursePage(){

    const [component, setComponent] = useState(<CoursePageSkeeleton/>)

    useEffect(() => {
        async function verifyAuth(){
            await userIsAuthenticated() ? setInterval( () => setComponent(<RenderCousePage/>), 1500) : setInterval( () =>setComponent(<Navigate to='/'/>), 1500);
        }

        verifyAuth();
    },[])


    return component;


}