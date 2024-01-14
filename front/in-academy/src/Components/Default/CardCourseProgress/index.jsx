import React, { useState } from "react";
import './style.css'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { Link } from "react-router-dom";

export function CardComponentProgress({curso, porcent}){
    const [percent, setPercent] = useState(0);

    function process(value){
        

        setTimeout(() => {
            if(value <= porcent){
                setPercent(value);
                process(value + 1)  
            }            
        }, 17)
    }

    useState(() =>{ process(1) }, []);

    return(
        <Link to={"/curso/" + curso.id} style={{textDecoration: 'none'}}>
            <div className="card">
                <div className="infoImage">
                    <img className="imgCard" src={curso.urlImageCourse}/>
                    <div className="infoCourse">
                        <h4 className="courseName">{curso.title}</h4>
                        <p className="courseAuthor">{curso.authorName}</p>
                    </div>
                </div>
                <div className="flex">
                    {
                        percent === 100 ? 
                        <>
                            <div className="divProgressBar concludeBar">
                                <div className="progressLine conclude" style={{width: porcent + '%'}}></div>
                            </div>
                            <CheckCircleOutlineRoundedIcon className="iconConclude" /> 
                        </>
                        :
                        <>
                            <div className="divProgressBar">
                                <div className="progressLine" style={{width: porcent + '%'}}></div>
                            </div>
                            <p className="progressNumber">{percent} %</p>
                        </>
                    }
                </div>
            </div>
        </Link>  
    )
}