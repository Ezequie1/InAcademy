import React, { useState } from "react";
import './style.css'
import rankingIcon from '../../assets/trofeu.png'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import imgUser from '../../assets/imgUser.jpg'


export function Ranking(){

    const[openRanking, setOpenRank] = useState('-300px');

    function moveRanking(){
        setOpenRank( openRanking === '40px' ? '-300px' : '40px')
    }

    return(
        <>
            <div className="rankingDiv" onClick={moveRanking}>
                <img src={rankingIcon} className="iconRanking" alt=""/>
            </div>
            <div className="divRanking" style={{right: openRanking }}>
                <div className="closeDiv">
                    <ArrowForwardIosRoundedIcon className="iconCloseRanking" onClick={moveRanking}/>
                </div>
                <div className="titleMembers">
                    <h5 className="TitleRanking">Membros</h5>
                    <p className="numbers">835</p>
                </div>
                <div className="listMembers">                    
                    <div className="members">
                        <div className="itemListMembers">
                            <img src="https://d3a43hwv7gvd4j.cloudfront.net/Profile_Photos_Thumbs_YouKnow/1636646243629_1335869_54.png?Expires=1698683609&Signature=WxaP~DdENF-~TGEFzcTY5YS6N8t1qr1V02SrGqIL9vPHPfgj8FDwZIQtq0wFLxYIHDbXPIYZ7BRqiqorcsL8oE7XkVzkRd9bw-2ZTdrDBW8maImeYfj47TN1jNVi7O2~pnCbBbVfGGyn1xjA6umJqVLAXpLtLgeHL2GS0Fp2isE_&Key-Pair-Id=APKAISCSU5VMJAEZCN3Q" alt="" className="iconUserMember"/>
                            <div className="detailsUser">
                                <h5 className="NameMember">Eduardo Menezes</h5>
                                <div className="iconAndPoints">
                                    <h5 className="pointsUser gold">600</h5><p className="textPoints"> pontos</p>
                                </div>
                            </div>
                            <EmojiEventsRoundedIcon className="iconGold" fontSize="large"/>
                        </div>
                    </div>
                    <div className="members">
                        <div className="itemListMembers">
                            <img src="https://d3a43hwv7gvd4j.cloudfront.net/Profile_Photos_Thumbs_YouKnow/1697544270181_1403937_54.png?Expires=1698773229&Signature=WuggcZn8O5aL8VjzFDNjujlxbfaykRE5Pj6wuR0tvxwi3wGoirYkgnwI4uIxerf5UbCSEXcffxE5NabSfzko9sHSy3NVL02sY6xSTE~GkzZyFhQa17zhg-fvCuEVrq9eu3gUZAzTzY58HxU0qfpdXWSMSvXwB4TX48rttTYX8u4_&Key-Pair-Id=APKAISCSU5VMJAEZCN3Q" alt="" className="iconUserMember"/>
                            <div className="detailsUser">
                                <h5 className="NameMember">José Luiz</h5>
                                <div className="iconAndPoints">
                                    <h5 className="pointsUser prata">550</h5><p className="textPoints">pontos</p>
                                </div>
                            </div>
                            <EmojiEventsRoundedIcon className="iconPrata" fontSize="large"/>
                        </div>
                    </div>
                    <div className="members">
                        <div className="itemListMembers">
                            <img src="https://d3a43hwv7gvd4j.cloudfront.net/Profile_Photos_Thumbs_YouKnow/1692017569569_1401174_54.png?Expires=1698683609&Signature=Jy3vsIPXAhCsghZzHXNuUpI2-um0vTzu93kU4Yk2f~fV1-lxkhUgDwe8WWDYrBS3u~6DZbUNE4b-gIBb5rVVQtj5JKrcp5VKWYUiV3jkp54CedGoIILBoDSn41rrjJKEqE1hWfCbI05ojheKLSGLnUQUYmX2a9iN0tBkRMoBIc4_&Key-Pair-Id=APKAISCSU5VMJAEZCN3Q" alt="" className="iconUserMember"/>
                            <div className="detailsUser">
                                <h5 className="NameMember">Gustavo Santana</h5>
                                <div className="iconAndPoints">
                                    <h5 className="pointsUser bronze">490</h5><p className="textPoints"> pontos</p>
                                </div>
                            </div>
                            <EmojiEventsRoundedIcon className="iconBronze" fontSize="large"/>
                        </div>
                    </div>
        
                    <div className="members">
                        <div className="itemListMembers">
                            <img src="https://d3a43hwv7gvd4j.cloudfront.net/Profile_Photos_Thumbs_YouKnow/1692903543851_1401180_54.png?Expires=1698683609&Signature=YypTQggcqod8jXWUgBzIQkmqdh5FAFnEC9HViFedUOlnOO8YdVvYmgbn~i4kgHiCQpPebt3nXoxQ1y2hYy3UB3Pm~ME6x2oJNyHOHF8hqmW5oUDApCSzDN7oKzwbgvWPmky6vFmvwoek~6CPOHGEMWHG85YvoYJ8rNmR9ziWo~8_&Key-Pair-Id=APKAISCSU5VMJAEZCN3Q" alt="" className="iconUserMember"/>
                            <div className="detailsUser">
                                <h5 className="NameMember">Thales Matheus</h5>
                                <div className="iconAndPoints">
                                    <h5 className="pointsUser">420</h5><p className="textPoints"> pontos</p>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div className="members">
                        <div className="itemListMembers">
                            <img src="https://d3a43hwv7gvd4j.cloudfront.net/Profile_Photos_Thumbs_YouKnow/1655830336249_1361752_54.png?Expires=1698683609&Signature=CZDGRwFvKoX5tMxmmm0p3qZFjiJYbb7olkH2F06GQMUtxxt0ajkJjoOYXV5lbkDirQQCtPe7ToGMSvqeCb6Hs3SF3VHaxw-7M1ThxPhU8kuuKjBY-w8tcSWeF9NYqtTSvEAPQS73UiWyBMIrQd-Y9zq1uWznRTx4f3CmKbuKVqM_&Key-Pair-Id=APKAISCSU5VMJAEZCN3Q" alt="" className="iconUserMember"/>
                            <div className="detailsUser">
                                <h5 className="NameMember">Hugo de Jesus</h5>
                                <div className="iconAndPoints">
                                    <h5 className="pointsUser">390</h5><p className="textPoints"> pontos</p>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div className="members">
                        <div className="itemListMembers">
                            <img src="https://d3a43hwv7gvd4j.cloudfront.net/Profile_Photos_Thumbs_YouKnow/1691799982059_1401172_54.png?Expires=1698686111&Signature=n7Mv42ZxFeUQ6bNETEcUuuifIpTQHUoXER0wyfjleSSuECiN40BFOwIAAN8MXmDWvtGW4lQ0LfFo4ueW8~rXIP70bXToWPUwiEL-nvnOl8srKx0i3T34w6H3NkzslTwF6k23KLKfEVRwQbxPsZ4AFsxVxgnjp3fKDROB4jGVPyo_&Key-Pair-Id=APKAISCSU5VMJAEZCN3Q" alt="" className="iconUserMember"/>
                            <div className="detailsUser">
                                <h5 className="NameMember">Franklin Carlos</h5>
                                <div className="iconAndPoints">
                                    <h5 className="pointsUser">350</h5><p className="textPoints"> pontos</p>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div className="members">
                        <div className="itemListMembers">
                            <img src="https://d3a43hwv7gvd4j.cloudfront.net/Profile_Photos_Thumbs_YouKnow/1636140312678_1359805_54.png?Expires=1698686111&Signature=gLx3THm7NgEfbEHfjzv~ZyUa52BI9~R~Tn8DuzI9y87lLSN6AOo2rQhe-lZftWyPM3DRRqGZ3609YNwVZbGVWBBwp~Z-dBuUFVqfoJ9QzQzh6mTaepxDpTHaKg2ZdudcKE532ncZGH2DaXpvmZ-TFrj2ccJhM-VVIsUGuNDwGwI_&Key-Pair-Id=APKAISCSU5VMJAEZCN3Q" alt="" className="iconUserMember"/>
                            <div className="detailsUser">
                                <h5 className="NameMember">José Nildo</h5>
                                <div className="iconAndPoints">
                                    <h5 className="pointsUser">300</h5><p className="textPoints"> pontos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h5 className="showMore">ver mais</h5>
                <div className="members">
                    <div className="itemListMembers yourDiv">
                        <img src={imgUser} alt="" className="iconUserMember imageYou"/>
                        <div className="detailsUser">
                            <h5 className="NameMember">Ezequiel Alves</h5>
                            <div className="iconAndPoints">
                                <h5 className="pointsUser">140</h5><p className="textPoints"> pontos</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </>
    )
}