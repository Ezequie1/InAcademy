import React from "react";
import "./style.css"
import Rating from '@mui/material/Rating';
import imgUser from '../../assets/imgUser.jpg'

export function Comment({coment}){
    return (
        <div className="divCommentComponent"> 
            <div>
                <img src={imgUser} className="userInComment" alt=""/>
            </div>
            <div className="infosComment">
                <div className="imageUserAndNameComment">
                    <div className="nameAndRateComment">
                        <h2> { coment.userName } </h2>
                        <Rating name="half-rating" defaultValue={coment.avaliation.toFixed(1)} readOnly precision={0.1} />
                    </div>
                    <p>
                        {coment.dataComentário.split('T')[0]}
                    </p>
                </div>
                <div className="contentComment">
                    <h4>{coment.commentTitle}</h4>
                    <p>
                        {coment.comment}
                    </p>
                </div>
            </div>
        </div>
    )
}