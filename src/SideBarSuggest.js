import React from "react";
import { Link } from "react-router-dom";
import './HomePage.css';
export default function SideBarSuggest({image,title,channel,channelId,videoId}){
    return (
        <div className="sideBarSuggest" style={{width:'100%',backgroundColor:'rgb(30,30,30)',display:'flex',flexDirection:'column',margin:'30px 10px 0 10px',cursor:'pointer'}}>
            <Link to={`/VideoDetails/${videoId}`} style={{textDecoration:'none'}}>
            <img src={image}style={{width:'100%'}} />
            <h3 style={{color:'white'}}>{title}</h3>
            </Link>
            <Link to={`/Channel/${channelId}`}style={{textDecoration:'none'}}>
            <p style={{color:'white'}}>{channel}</p>
            </Link>
        </div>
    )
}