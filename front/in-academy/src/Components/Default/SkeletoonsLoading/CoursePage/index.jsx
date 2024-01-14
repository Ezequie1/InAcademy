import React from "react";
import { Skeleton } from "@mui/material";
import "./style.css"

export function CoursePageSkeeleton(){

    return(
        <div className="bodyHomePage">
            <div className="niveBarSkl">
                <div className="flex iconNavbarAndLogoSkl">
                    <Skeleton variant="rounded" animation="wave" width={60} sx={{ bgcolor: '#c0c0c0' }} height={60} />
                </div>
                <div className="flex iconSearchAndUserSkl">
                    <Skeleton variant="rounded" animation="wave" width={300} sx={{ bgcolor: '#c0c0c0' }} height={40} />
                    <Skeleton variant="circular" animation="wave" width={60}  sx={{ bgcolor: '#c0c0c0' }} height={60} />
                </div>
            </div>
            <div className="backSkeeletonCoursePage"></div>

            <div className="align">
                <div className="courseImageAndInfosSkeletoon">
                    <div>
                        <Skeleton variant="rounded" animation="wave" width={'20vw'} sx={{ bgcolor: '#c0c0c0' }} height={'35vh'} />
                        <Skeleton variant="rounded" animation="wave" width={'10vw'} sx={{ bgcolor: '#c0c0c0' }} height={'3vh'} />
                        <Skeleton variant="rounded" animation="wave" width={'14vw'} sx={{ bgcolor: '#c0c0c0' }} height={'3vh'} />
                        <Skeleton variant="rounded" animation="wave" width={'14vw'} sx={{ bgcolor: '#c0c0c0' }} height={'3vh'} />
                        <Skeleton variant="rounded" animation="wave" width={'10vw'} sx={{ bgcolor: '#c0c0c0' }} height={'3vh'} />
                    </div>
                    <div className="divInfosCourseSkeeleton">
                        <Skeleton variant="rounded" animation="wave" width={'20vw'} sx={{ bgcolor: '#c0c0c0' }} height={'4vh'} />
                        <Skeleton variant="rounded" animation="wave" width={'15vw'} sx={{ bgcolor: '#c0c0c0' }} height={'2vh'} />
                        <Skeleton variant="rounded" animation="wave" width={'10vw'} sx={{ bgcolor: '#c0c0c0' }} height={'15px'} />
                        <div>
                            <Skeleton variant="rounded" animation="wave" width={'100%'} sx={{ bgcolor: '#c0c0c0' }} height={'8vh'} />
                        </div>
                        <div>
                            <Skeleton variant="rounded" animation="wave" width={'10vw'} sx={{ bgcolor: '#c0c0c0' }} height={'3vh'} />
                            <Skeleton variant="rounded" animation="wave" width={'100%'} style={{marginBottom: 0}} sx={{ bgcolor: '#c0c0c0' }} height={'3vh'} />
                            <Skeleton variant="rounded" animation="wave" width={'15vw'} sx={{ bgcolor: '#c0c0c0' }} height={'3vh'} />
                        </div>
                        <div>
                            <Skeleton variant="rounded" animation="wave" width={'10vw'} sx={{ bgcolor: '#c0c0c0' }} height={'3vh'} />
                            <Skeleton variant="rounded" animation="wave" width={'100%'} sx={{ bgcolor: '#c0c0c0' }} height={'12vh'} />
                            <Skeleton variant="rounded" animation="wave" style={{marginBottom: '8px'}} width={'100%'} sx={{ bgcolor: '#c0c0c0' }} height={'5vh'} />
                            <Skeleton variant="rounded" animation="wave" width={'100%'} sx={{ bgcolor: '#c0c0c0' }} height={'5vh'} />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}