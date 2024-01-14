import "./style.css";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import logoInmetrics from "../../assets/logoSite.png"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import imgUser from '../../assets/imgUser.jpg'
import { Link } from "react-router-dom";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LanguageIcon from '@mui/icons-material/Language';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import GroupsIcon from '@mui/icons-material/Groups';
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useState } from "react";
import { Tooltip } from 'react-tooltip';
import trofeuImg from '../../assets/trofeu.png'
import estrela from '../../assets/estrela.png';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { getSugestions } from "../../../Service/CoursesService/courses";
import CircularProgress from '@mui/material/CircularProgress';
import ErrorIcon from '@mui/icons-material/Error';
import { destroyCookie } from "nookies";

export function Header({user, pageSelected}){

    const [openNav, setNav] = useState('-21vw')
    const [seeSugestion, setSugestions] =useState('0px')
    const [seeBorderSugestion, setBorder] = useState('none')
    const [star, setStar] = useState(0);
    const [trofeu, setTrofeu] = useState(0);
    const [contentSugestion, setContentSugestion] = useState(<CircularProgress style={{marginTop:'20px', marginBottom: '20px', color: 'gray'}}/>);

    function openSideNav(){
        if(openNav == '-21vw') {
            setNav('0')
        }else{
            setNav('-21vw')
        }
    }

    function finishSession(){
        destroyCookie(null, 'session_user')
        destroyCookie(null, 'email')
    }

    async function takeSugestions(value){
        setSugestions('min-content');
        setBorder('1px solid rgb(184, 184, 184)')

        if(value !== ''){
            await getSugestions(value).then((res) => {

                setContentSugestion(<CircularProgress style={{marginTop:'20px', marginBottom: '20px', color: 'gray'}}/>)

                setTimeout(() => {
                    res.data.length == 0 ?  

                    setContentSugestion(
                        <>
                            <ErrorIcon fontSize="large" style={{color: 'gray', marginTop: '20px'}}/>
                            <p style={{ marginBottom: '20px' }}>Ops, não encontramos nada...</p>
                        </>
                    ) 
                    :
                    setContentSugestion(
                        <>
                            {
                                res.data.map((course) => {
                                    return( 
                                        <Link to={'/Curso/' + course.id} style={{textDecoration: 'none'}}>
                                            <div className="sugestion">
                                                <img className="imgSugestion" src={ course.urlImageCourse }/>
                                                <div className="infoSugestion">
                                                    <h5 className="titleSugestion">{ course.title }</h5>
                                                    <div className="flex">
                                                        <p className="titleAutor">{ course.authorName }</p>
                                                        <div className="flex">
                                                            |<AccessTimeIcon className="iconTime" fontSize="small" color="disabled"/>
                                                            <p className="hour">15h</p>
                                                        </div>    
                                                    </div>                            
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                }) 
                            }
                        </>
                    )
                },500)                
            })
        }
    }

    function increment(i, max, element){
        if(element === 'rank' && trofeu === 0){
            if(i > max) return;
            setTimeout(function(){
              setTrofeu(i);
              increment(i+1, max, element);
            },10)
        }else if(star === 0){
            if(i > max) return;
            setTimeout(function(){
              setStar(i);
              increment(i+1, max, element);
            },10)
        }
    }

    function verifyPage(id){
        return id === pageSelected ? "itemSideNav selectedItem" : "itemSideNav";
    }

    return(

        <>

        <div className="navBar">

            <div className="itensNav">

                <MenuRoundedIcon className="icon" fontSize="large" onClick={openSideNav}/>

                <Link to="http://localhost:3000/home" style={{textDecoration: "none"}}>

                    <img src={logoInmetrics} className="logoInmetrics" />

                </Link>

            </div>

            <div className="itensNav">

                <div className="searchBarFather">

                    <div className="searchBar">

                        <SearchRoundedIcon fontSize="large" className="iconSearch icon"/>

                        <input type="text" placeholder="Pesquisar cursos..." className="inputSearch" onBlur={() => 
                            {   
                                setTimeout(() => {
                                    setSugestions('0px')
                                    setBorder('none')
                                }, 100)
                            }} onChange={(event) => takeSugestions(event.target.value)}/>

                    </div>

                    <div className="divSugestion" style={{ height: seeSugestion, border: seeBorderSugestion }} id="divSugestions" >

                        {
                            contentSugestion
                        }

                    </div>                    

                </div>

                <div className="userAndNotify">
                    <NotificationsRoundedIcon fontSize="large" className="icon notify"/>
                    <FavoriteIcon fontSize="large" className="icon notify favoriteIcon" id='favorite'/>
                    <a data-tooltip-id="tooltipProfile" data-tooltip-place="bottom-end" data-tooltip-variant="light" data-tooltip-position-strategy="absolute">
                        <img className="imgUser" alt="" src={imgUser} />
                    </a>
                </div>

                <Tooltip id="tooltipProfile" style={{backgroundColor: '#eee', zIndex: 10}} clickable>
                    <div className="principalDivTootip" onMouseOver={() => { 
                        increment(0,16, 'rank')
                        increment(0,240, 'points')
                        }} onMouseDown={() => {
                            setStar(0)
                            setTrofeu(0)
                        }}>
                        { onmouseenter ? <CameraAltOutlinedIcon/> : <img src={imgUser} alt="" className="userTooltip"/> }
                        <h4>{ user?.name }</h4>
                        <p className="emailUser">{ user?.email }</p>
                    </div>
                    <div className="flex divSimbols">
                        <div>
                            <img src={trofeuImg} alt="" className="simbols" />
                            <h4 id='rank' className="points" style={{marginRight: '-3px'}}>{trofeu}°</h4>
                            <p>Posição</p>
                        </div>
                        <div>
                            <img src={estrela} alt="" className="simbols" />
                            <h4 id='points' className="points">{user.userPoints}</h4>
                            <p>Pontos</p>
                        </div>
                    </div>
                    <Link to='/' className="divExit" style={{textDecoration: 'none'}} onClick={ () => {finishSession()} }>
                        <p className="exit">Sair</p><LogoutOutlinedIcon/>
                    </Link>
                </Tooltip>
            </div>

        </div>
        
        <div className="sideBar" id="sideNav" style={{left: openNav}}>

            <div className="divIconClose">

                <CloseRoundedIcon fontSize="large" onClick={openSideNav}/>

            </div>

            <div className="divIconInacademy">

                <img src={logoInmetrics} className="logoInmetricsNav" />

            </div>
            <Link to="/home" style={{textDecoration: "none", color: "black"}}>
                <div className={verifyPage("home")} id="home">

                    <HomeIcon fontSize="large" className="iconSideNav"/>

                    <p>Home</p>

                </div>
            </Link>
            
            <Link to="/user/meu-aprendizado" style={{textDecoration: "none", color: "black"}}>
                <div className={verifyPage("meuAprendizado")} id="meuAprendizado" >

                    <SchoolIcon fontSize="large" className="iconSideNav"/>

                    <p>Meu aprendizado</p>

                </div>
            </Link>

            <Link to="/comunidades" style={{textDecoration: "none", color: "black"}}>
                <div className={verifyPage("comunidades")} id="comunidades">

                    <LanguageIcon fontSize="large" className="iconSideNav"/>

                    <p>Comunidades</p>

                </div>
            </Link>

            <Link to="/cursos/todos" style={{textDecoration: "none", color: "black"}}>
                <div className={verifyPage("allcourses")} id="allcourses">

                    <AutoStoriesIcon fontSize="large" className="iconSideNav"/>

                    <p>Todos os cursos</p>

                </div>
            </Link>


            <Link to="/membros/todos" style={{textDecoration: 'none', color: 'black'}}>
                <div className={verifyPage("membros")} id="membros">

                    <GroupsIcon fontSize="large" className="iconSideNav" style={{color: 'black'}}/>

                    <p style={{ color: 'black'}}>Membros</p>

                </div>
            </Link>
        </div>

        </>

    )

}