import React from "react";
import video from "../../assets/backgroundVideo.mp4"
import "./style.css"

export function BackgroundVideo(){

    return(
        <video src={video} autoPlay loop muted className="videoBG" />
    )

}