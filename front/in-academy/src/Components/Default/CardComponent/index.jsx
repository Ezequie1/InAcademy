import React, { useState } from "react";
import './style.css'
import Rating from '@mui/material/Rating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";

export function CardComponent(props){

    const [favorite, setFavorite] = useState(props.fav);

    function verifyIfIsNew(){
        const oneWeekBefore = new Date();
        oneWeekBefore.setDate(oneWeekBefore.getDate() -7);

        const dayFormat = oneWeekBefore.toISOString().slice(0, 19).replace(' ');

        return dayFormat < props.date;
    }

    return(
        <div className="cardStyle">
            <div className="divImageCard">
                <img src={props.url} alt="" className="imageCardNew" />
                { verifyIfIsNew() ? <h5 className="new">Novo</h5> : <></> }
            </div>
            <div className="contentCard">
                <h4 className="courseName">{props.title}</h4>
                <p className="author">{props.author}</p>
                
                <Rating name="half-rating" defaultValue={props.rate} style={{ paddingTop: '10px'}} readOnly precision={0.1} />
                <h5 className="avaliations">{ props.rate }</h5>
                <p className="numberAvaliations">({props.votes})</p>
            </div>
            <div className="divButtons">
                { favorite ? <FavoriteIcon className="iconFavorite" onClick={() => {setFavorite(false)}} /> : <FavoriteBorderIcon className="iconNotFavorite"  onClick={ () => { setFavorite(true) }} /> }
                <Link to={'/Curso/' + props.id } >
                    <button className="buttonCourse"><h5>Matricule-se</h5></button>
                </Link>
            </div>
        </div>
    )
}