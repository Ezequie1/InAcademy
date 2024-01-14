import React, { useEffect, useState } from "react";
import './style.css'
import Rating from '@mui/material/Rating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";
import { removeToFavorite, addToFavorite } from "../../../Service/CoursesService/courses";

export function CardComponent(props){

    const [ favorite, setFavorite ] = useState(false);
    const [ isEnrolled, setIsEnrolled ] = useState(false);

    useEffect(() => {
        function verifyCourseIsFavorite(){
            props.user.favoritesCourses.map((course) => { if(course.id === props.course.id) setFavorite(true)})
        }

        verifyCourseIsFavorite();
    }, [])

    useEffect(() => {

        function verifyUserIsEnrolled(){
            props.user.enrolledCourses.map(course => { 
                if(course.id === props.course.id) setIsEnrolled(true); 
            })
        }

        verifyUserIsEnrolled()

    }, [])

    function verifyIfIsNew(){
        const oneWeekBefore = new Date();
        oneWeekBefore.setDate(oneWeekBefore.getDate() -7);

        const dayFormat = oneWeekBefore.toISOString().slice(0, 19).replace(' ');

        return dayFormat < props.course.creationDate;
    }

    
    async function changeFavorite(){
        if(favorite){
            await removeToFavorite(props.user.email, props.course.id).then((res) => {
                if(res.status === 200) setFavorite(false)
            }).catch((error) => console.log(error))
        }else{
            await addToFavorite(props.user.email, props.course.id).then((res) => {
                if(res.status === 200) setFavorite(true);
            }).catch((error) => console.log(error))
        }
    }

    return(
        <div className="cardStyle">
            <div className="divImageCard">
                <img src={props.course.urlImageCourse} alt="" className="imageCardNew" />
                { verifyIfIsNew() ? <h5 className="new">Novo</h5> : <></> }
            </div>
            <div className="contentCard">
                <h4 className="courseName">{props.course.title}</h4>
                <p className="author">{props.course.authorName}</p>
                
                <Rating name="half-rating" defaultValue={props.course.avaliation} style={{ paddingTop: '10px'}} readOnly precision={0.1} />
                <h5 className="avaliations">{ props.course.avaliation.toFixed(1) }</h5>
                <p className="numberAvaliations">({props.course.courseComments.length})</p>
            </div>
            <div className="divButtons">
                { favorite ? 
                    <FavoriteIcon className="iconFavorite" onClick={() => {changeFavorite()}} /> 
                    : 
                    <FavoriteBorderIcon className="iconNotFavorite"  onClick={ () => { changeFavorite() }} /> 
                }
                {   isEnrolled ?
                    <Link to={'/curso/' + props.course.id } >
                        <button className="buttonCourse"><h5>Ir para o curso</h5></button>
                    </Link>
                    :
                    <Link to={'/curso/' + props.course.id } >
                        <button className="buttonCourse"><h5>Matricule-se</h5></button>
                    </Link>
                } 
            </div>
        </div>
    )
}