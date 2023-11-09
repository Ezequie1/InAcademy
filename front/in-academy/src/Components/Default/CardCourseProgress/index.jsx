import React, { useState } from "react";
import './style.css'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

export function CardComponentProgress(props){

    const [percent, setPercent] = useState(0);

    function process(value){
        if(value -1 === props.porcent) return;

        setTimeout(() => {
            setPercent(value);
            process(value + 1)            
        }, 17)
    }

    useState(() =>{ process(1) }, []);

    return(
        <div className="card">
            <div className="infoImage">
                <img className="imgCard" src={props.url}/>
                <div className="infoCourse">
                    <h4 className="courseName">{props.title}</h4>
                    <p className="courseAuthor">{props.author}</p>
                </div>
            </div>
            <div className="flex">
                {
                    percent === 100 ? 
                    <>
                        <div className="divProgressBar concludeBar">
                            <div className="progressLine conclude" style={{width: props.porcent + '%'}}></div>
                        </div>
                        <CheckCircleOutlineRoundedIcon className="iconConclude" /> 
                    </>
                    :
                    <>
                        <div className="divProgressBar">
                            <div className="progressLine" style={{width: props.porcent + '%'}}></div>
                        </div>
                        <p className="progressNumber">{percent} %</p>
                    </>

                }
            </div>
        </div>
    )
}