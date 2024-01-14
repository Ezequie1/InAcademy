import React from "react";
import './style.css'
import { Skeleton } from "@mui/material";


export function HomePageSkeeleton() {
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
            <div className="align">
                <Skeleton variant="rounded" animation="wave" width={'60vw'} sx={{ bgcolor: '#c0c0c0' }} height={'40vh'} />
                <div className="flex infoContentSkl">
                    <Skeleton variant="rounded" animation="wave" width={350} sx={{ bgcolor: '#c0c0c0' }} height={35} />
                    <Skeleton variant="rounded" animation="wave" width={100} sx={{ bgcolor: '#c0c0c0' }} height={20} />
                </div>
                <div className="flex coursesDivSkl">
                    <div className="cardSkl">
                        <div className="flex nameAndImageCourseSkl">
                            <Skeleton variant="rounded" animation="wave" width={180} sx={{ bgcolor: '#c0c0c0' }} height={100} />
                            <Skeleton variant="rounded" animation="wave" style={{ marginTop: 10 }} width={150} sx={{ bgcolor: '#c0c0c0' }} height={25} />
                        </div>  
                        <div className="flex">
                            <Skeleton variant="rounded" animation="wave" style={{ marginTop: 20 }} width={'96%'} sx={{ bgcolor: '#c0c0c0' }} height={12} />
                        </div>
                    </div>
                    <div className="cardSkl">
                        <div className="flex nameAndImageCourseSkl">
                            <Skeleton variant="rounded" animation="wave" width={180} sx={{ bgcolor: '#c0c0c0' }} height={100} />
                            <Skeleton variant="rounded" animation="wave" style={{ marginTop: 10 }} width={150} sx={{ bgcolor: '#c0c0c0' }} height={25} />
                        </div>  
                        <div className="flex">
                            <Skeleton variant="rounded" animation="wave" style={{ marginTop: 20 }} width={'96%'} sx={{ bgcolor: '#c0c0c0' }} height={12} />
                        </div>
                    </div>
                    <div className="cardSkl">
                        <div className="flex nameAndImageCourseSkl">
                            <Skeleton variant="rounded" animation="wave" width={180} sx={{ bgcolor: '#c0c0c0' }} height={100} />
                            <Skeleton variant="rounded" animation="wave" style={{ marginTop: 10 }} width={150} sx={{ bgcolor: '#c0c0c0' }} height={25} />
                        </div>  
                        <div className="flex">
                            <Skeleton variant="rounded" animation="wave" style={{ marginTop: 20 }} width={'96%'} sx={{ bgcolor: '#c0c0c0' }} height={12} />
                        </div>
                    </div>
                </div>
                <div className="flex infoContentSkl">
                    <Skeleton variant="rounded" animation="wave" width={350} sx={{ bgcolor: '#c0c0c0' }} height={35} />
                    <Skeleton variant="rounded" animation="wave" width={100} sx={{ bgcolor: '#c0c0c0' }} height={20} />
                </div>
                <div className="flex coursesDivSkl">
                    <div className="cardCourseNewSkl">
                        <Skeleton variant="rounded" animation="wave" width={'100%'} sx={{ bgcolor: '#c0c0c0' }} height={120} />
                        <Skeleton variant="rounded" animation="wave" style={{ marginTop: 10 }} width={150} sx={{ bgcolor: '#c0c0c0' }} height={15} />
                        <Skeleton variant="rounded" animation="wave" style={{ marginTop: 5 }} width={100} sx={{ bgcolor: '#c0c0c0' }} height={10} />
                    </div>

                    <div className="cardCourseNewSkl">
                        <Skeleton variant="rounded" animation="wave" width={'100%'} sx={{ bgcolor: '#c0c0c0' }} height={120} />
                        <Skeleton variant="rounded" animation="wave" style={{ marginTop: 10 }} width={150} sx={{ bgcolor: '#c0c0c0' }} height={15} />
                        <Skeleton variant="rounded" animation="wave" style={{ marginTop: 5 }} width={100} sx={{ bgcolor: '#c0c0c0' }} height={10} />
                    </div>

                    <div className="cardCourseNewSkl">
                        <Skeleton variant="rounded" animation="wave" width={'100%'} sx={{ bgcolor: '#c0c0c0' }} height={120} />
                        <Skeleton variant="rounded" animation="wave" style={{ marginTop: 10 }} width={150} sx={{ bgcolor: '#c0c0c0' }} height={15} />
                        <Skeleton variant="rounded" animation="wave" style={{ marginTop: 5 }} width={100} sx={{ bgcolor: '#c0c0c0' }} height={10} />
                    </div>

                    <div className="cardCourseNewSkl">
                        <Skeleton variant="rounded" animation="wave" width={'100%'} sx={{ bgcolor: '#c0c0c0' }} height={120} />
                        <Skeleton variant="rounded" animation="wave" style={{ marginTop: 10 }} width={150} sx={{ bgcolor: '#c0c0c0' }} height={15} />
                        <Skeleton variant="rounded" animation="wave" style={{ marginTop: 5 }} width={100} sx={{ bgcolor: '#c0c0c0' }} height={10} />
                    </div>

                    <div className="cardCourseNewSkl">
                        <Skeleton variant="rounded" animation="wave" width={'100%'} sx={{ bgcolor: '#c0c0c0' }} height={120} />
                        <Skeleton variant="rounded" animation="wave" style={{ marginTop: 10 }} width={150} sx={{ bgcolor: '#c0c0c0' }} height={15} />
                        <Skeleton variant="rounded" animation="wave" style={{ marginTop: 5 }} width={100} sx={{ bgcolor: '#c0c0c0' }} height={10} />
                    </div>

                    <div className="cardCourseNewSkl">
                        <Skeleton variant="rounded" animation="wave" width={'100%'} sx={{ bgcolor: '#c0c0c0' }} height={120} />
                        <Skeleton variant="rounded" animation="wave" style={{ marginTop: 10 }} width={150} sx={{ bgcolor: '#c0c0c0' }} height={15} />
                        <Skeleton variant="rounded" animation="wave" style={{ marginTop: 5 }} width={100} sx={{ bgcolor: '#c0c0c0' }} height={10} />
                    </div>
                </div>
            </div>
        </div>
    )
}