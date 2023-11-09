import React, { useState } from "react";
import "./style.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";

export function ArtigoCard(props){

    const [favorite, setFavorite] = useState(props.fav);
    
    return(
            <div className="divHeaderArtigo">
                <img src={props.src} className="imagemArtigo"/>
                <div className="informacoesArtigo">
                    <div className="flex titleAndIcon">
                        <div className="artigoTitle">
                            <h3>{ props.title }</h3>
                        </div>
                        { favorite ? <FavoriteIcon className="favorite" onClick={() => setFavorite(false)} /> : <FavoriteBorderIcon className="notFavorite" onClick={() => setFavorite(true)}/> }
                    </div>
                    <div className="flex">
                        <h5 className="authorDoArtigo">{props.author}</h5>
                        <AccessTimeIcon fontSize="small"/>
                        <p className="publicado">Publicado em {props.timePub}</p>
                    </div>
                    <div className="flex divAvaliation">
                        <p className="avaliationText">Avaliações: </p>
                        <div className="flex">
                            <h4>{ props.rate }</h4>
                            <Rating name="half-rating" defaultValue={props.rate} readOnly precision={0.1} />
                        </div>
                    </div>
                    <div className="buttonLermais">
                        <button className="readMoreButton"><h5>Ler mais</h5></button>
                    </div>
                </div>
            </div>

    )
}